var urlAny = "https://sv443.net/jokeapi/category/Any";
var urls = ['https://media.giphy.com/media/O5NyCibf93upy/giphy.gif0',
'https://media.giphy.com/media/ZqlvCTNHpqrio/giphy.gif',
'https://media.giphy.com/media/GpyS1lJXJYupG/giphy.gif',
'https://media.giphy.com/media/lQ1nXVifuLqyVAH2Gu/giphy.gif',
'https://media.giphy.com/media/dC9DTdqPmRnlS/giphy.gif',
'https://media.giphy.com/media/JmsG1PY1K94hyOa1v9/giphy.gif',
'https://media.giphy.com/media/11uYyAmGgTWwGQ/giphy.gif',
'https://media.giphy.com/media/Rgss7R0Ey0rAY/giphy.gif',
'https://media.giphy.com/media/KcjxruOmio7bq/giphy.gif',
'https://media.giphy.com/media/12Tt4U7hlXXaRa/giphy.gif',
'https://media.giphy.com/media/gj0QdZ9FgqGhOBNlFS/giphy.gif',
'https://media.giphy.com/media/3i7zenReaUuI0/giphy.gif'];
/*
fetch(urlAny)
.then(data => {return data.json()})
.then(response => {
  console.log(response);
})
.catch(error => console.error("error"))*/

const Joke_Type = document.getElementById("type");
Joke_Type.addEventListener('click',initialize);
Joke_Type.addEventListener('click',gifInit);

function initialize(e){
  start();
}

function gifInit(){
  var number = Math.floor(Math.random() * 11);
  var gif0 = urls[number];
  console.log(gif0);
  let root = document.documentElement;
  root.style.backgroundImage = "url("+gif0+")";
  document.style.backgroundColor = (0,0,0,0.2);
}



async function catchJoke() {
  const response = await fetch(urlAny);
  return await response.json();
}


async function start() {
  const jsonJoke = await catchJoke();
  console.log(jsonJoke);

  if (jsonJoke.type == "single") {
    document.getElementById("anyjoke").innerHTML =
    `<h1> ${jsonJoke.joke} </h1>`
  }
  else {
    document.getElementById("anyjoke").innerHTML =
    `<h1> ${jsonJoke.setup} </h1>
    <h3> ${jsonJoke.delivery} </h3>`
  }
}
