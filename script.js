var urlAny = "https://sv443.net/jokeapi/category/Any";
var urlProgramming = "https://sv443.net/jokeapi/category/Programming";
var urlMiscellaneous = "https://sv443.net/jokeapi/category/Miscellaneous";
var urlDark = "https://sv443.net/jokeapi/category/Dark";


function menu_afficher(){ //afficher le menu
   var menu = document.getElementById("menu");
   var menu_ham = document.getElementById("menu_ham");
   var cross = document.getElementById('cross');

   var h1 = document.getElementById("title");
   h1.classList.add('disparaitre');

   menu.classList.add('animation_slide'); //on ajoute la première animation
   menu.classList.remove('animation_slide_reverse'); //on retire l'animation de fermeture qui va rester en tant que classe quand on aura fini de la faire
   menu.classList.remove('disparaitre'); //on retire la classe disparaitre au menu
   menu.classList.add('afficher'); //on ajoute la classe afficher au menu

   cross.classList.add('afficher'); //on ajoute la classe afficher à la croix
   cross.classList.remove('disparaitre'); //on ajoute la classe disparaitre à la croix

   menu_ham.classList.add('disparaitre');//on ajoute la classe disparaitre au menu hamburger
}

var menu_ham = document.getElementById("menu_ham");
menu_ham.addEventListener('click',menu_afficher); //quand on clique surle burger on fait apparaitre le menu



function menu_disparaitre(){
  var menu = document.getElementById("menu");
  var menu_ham = document.getElementById("menu_ham");
  var cross = document.getElementById('cross');

  var h1 = document.getElementById("title");
  h1.classList.remove('disparaitre');
  h1.classList.add('afficher');


  menu.classList.add('animation_slide_reverse'); //on ajoute l'animation de fermeture


  cross.classList.remove('afficher');
  cross.classList.add('disparaitre');

  menu_ham.classList.remove('disparaitre');
  menu_ham.classList.add('afficher');


}

var cross = document.getElementById("cross");
cross.addEventListener('click',menu_disparaitre);

function jokeMaker(){
  var textArea = document.getElementById("tellJokeArea");
  var jokeTxt = textArea.value;

  var select = document.getElementById('selectType');
  var option = select.value;

  var auteur = document.getElementById('utilisateur');
  var auteurTxt = auteur.value;

  var p = document.createElement('p');
  var h5 = document.createElement('h5');
  var h3 = document.createElement('h3');
  var divContainer = document.createElement('div');

  var joke = document.createTextNode(jokeTxt);
  var categorie = document.createTextNode(option);
  var auteurJoke = document.createTextNode(auteurTxt);

  var jokesUsers = document.getElementsByClassName('jokesUsers');
  var containerJokesUsers = document.getElementById('containerJokesUsers');


  p.appendChild(joke);
  h5.appendChild(categorie);
  h3.appendChild(auteurJoke);

  divContainer.appendChild(p);
  divContainer.appendChild(h5);
  divContainer.appendChild(auteurJoke);
  divContainer.classList.add('jokeUserClass');

  if (jokeTxt == "") {
    alert("Vous n'avez rien écrit boloss");
  }
  else { //Affiche les balgues créait de la plus récente à la plus ancienne
    var theFirstChild = containerJokesUsers.firstChild; //Je récupère la référence du premier enfant (même si il est null)
    containerJokesUsers.insertBefore(divContainer,theFirstChild); //J'ajoute la div que je viens de créer avant le premier enfant de la div
  }
}

function effacer(){ //effacer le contenu du texte area
  document.getElementById("tellJokeArea").value = "";
  document.getElementById("utilisateur").value = "";
}

var bouton = document.getElementById('poster');
bouton.addEventListener('click',jokeMaker);
bouton.addEventListener('click',effacer);


async function catchJokeAny() {
  const response = await fetch(urlAny);
  return await response.json();
}

async function catchJokeProgramming() {
  const response = await fetch(urlProgramming);
  return await response.json();
}

async function catchJokeMiscellaneous() {
  const response = await fetch(urlMiscellaneous);
  return await response.json();
}

async function catchJokeDark() {
  const response = await fetch(urlDark);
  return await response.json();
}

async function start() {
  const jsonJoke = await catchJokeAny();
  console.log(jsonJoke);

  var nouvH4Sgl = document.createElement('h4');  //Je créer un nouvel élément h1
  var nouvH4 = document.createElement('h4');  //Je créer un nouvel élément h1
  var p = document.createElement('p'); //Je créer un nouvel élément h3
  var cat = document.createElement('p'); //Je créer un nouvel élément h3

  var A = document.createTextNode(jsonJoke.joke); //on remplit l'élément avec la variable
  var B = document.createTextNode("(Q) "+jsonJoke.setup); //on remplit l'élément avec la variable
  var C = document.createTextNode("(R) "+jsonJoke.delivery); //on remplit l'élément avec la variable
  var Cat = document.createTextNode("Categorie : "+jsonJoke.category); //on remplit l'élément avec la variable

  nouvH4Sgl.appendChild(A);
  nouvH4.appendChild(B);
  p.appendChild(C);
  cat.appendChild(Cat);


  var joke = document.getElementsByClassName('joke'); //Je récupère les éléments avec la classe joke
  var joke1 = document.getElementById('joke1'); //Je récupère les éléments avec la classe joke

  for (jokes of joke) {
    jokes.classList.toggle('classJoke'); //Je parcours les éléments avec la classe joke et on ajoute la classe
    }

  if (jsonJoke.type == "single") {
    joke1.appendChild(nouvH4Sgl);
    joke1.appendChild(Cat);

  }
  else {
      joke1.appendChild(nouvH4);
      joke1.appendChild(p);
      joke1.appendChild(Cat);
  }
}

async function programmingJoke(){
  const jsonJokeP = await catchJokeProgramming();
  console.log(jsonJokeP);

  var jokesP = document.getElementsByClassName('jokesP'); //Je récupère les éléments avec la classe joke
  var jokeP = document.getElementById('jokeP'); //Je récupère les éléments avec la classe joke


  var nouvH4Sgl = document.createElement('h4');  //Je créer un nouvel élément h1
  var nouvH4 = document.createElement('h4');  //Je créer un nouvel élément h1
  var p = document.createElement('p'); //Je créer un nouvel élément h3
  var cat = document.createElement('p'); //Je créer un nouvel élément h3

  var A = document.createTextNode(jsonJokeP.joke); //on remplit l'élément avec la variable
  var B = document.createTextNode("(Q) "+jsonJokeP.setup); //on remplit l'élément avec la variable
  var C = document.createTextNode("(R) "+jsonJokeP.delivery); //on remplit l'élément avec la variable
  var Cat = document.createTextNode("Categorie : "+jsonJokeP.category); //on remplit l'élément avec la variable

  nouvH4Sgl.appendChild(A);
  nouvH4.appendChild(B);
  p.appendChild(C);
  cat.appendChild(Cat);


  for (jokes of jokesP) {
    jokes.classList.add('joke'); //Je parcours les éléments avec la classe joke et on ajoute la classe
    }

  if (jsonJokeP.type == "single") {
    jokeP.appendChild(nouvH4Sgl);
    jokeP.appendChild(Cat);

  }
  else {
      jokeP.appendChild(nouvH4);
      jokeP.appendChild(p);
      jokeP.appendChild(Cat);
  }
}

async function darkJoke(){
  const jsonJokeD = await catchJokeDark();
  console.log(jsonJokeD);

  var nouvH4Sgl = document.createElement('h4');  //Je créer un nouvel élément h1
  var nouvH4 = document.createElement('h4');  //Je créer un nouvel élément h1
  var p = document.createElement('p'); //Je créer un nouvel élément h3
  var cat = document.createElement('p'); //Je créer un nouvel élément h3

  var A = document.createTextNode(jsonJokeD.joke); //on remplit l'élément avec la variable
  var B = document.createTextNode("(Q) "+jsonJokeD.setup); //on remplit l'élément avec la variable
  var C = document.createTextNode("(R) "+jsonJokeD.delivery); //on remplit l'élément avec la variable
  var Cat = document.createTextNode("Categorie : "+jsonJokeD.category); //on remplit l'élément avec la variable

  nouvH4Sgl.appendChild(A);
  nouvH4.appendChild(B);
  p.appendChild(C);
  cat.appendChild(Cat);


  var jokesD = document.getElementsByClassName('jokesD'); //Je récupère les éléments avec la classe joke
  var jokeD = document.getElementById('jokeD'); //Je récupère les éléments avec la classe joke

  for (jokes of jokesD) {
    jokes.classList.toggle('joke'); //Je parcours les éléments avec la classe joke et on ajoute la classe
    }

  if (jsonJokeD.type == "single") {
    jokeD.appendChild(nouvH4Sgl);
    jokeD.appendChild(Cat);

  }
  else {
      jokeD.appendChild(nouvH4);
      jokeD.appendChild(p);
      jokeD.appendChild(Cat);
  }
}

async function miscellaneous(){
  const jsonJokeM = await catchJokeMiscellaneous();
  console.log(jsonJokeM);

  var nouvH4Sgl = document.createElement('h4');  //Je créer un nouvel élément h1
  var nouvH4 = document.createElement('h4');  //Je créer un nouvel élément h1
  var p = document.createElement('p'); //Je créer un nouvel élément h3
  var cat = document.createElement('p'); //Je créer un nouvel élément h3

  var A = document.createTextNode(jsonJokeM.joke); //on remplit l'élément avec la variable
  var B = document.createTextNode("(Q) "+jsonJokeM.setup); //on remplit l'élément avec la variable
  var C = document.createTextNode("(R) "+jsonJokeM.delivery); //on remplit l'élément avec la variable
  var Cat = document.createTextNode("Categorie : "+jsonJokeM.category); //on remplit l'élément avec la variable

  nouvH4Sgl.appendChild(A);
  nouvH4.appendChild(B);
  p.appendChild(C);
  cat.appendChild(Cat);


  var jokesM = document.getElementsByClassName('jokesM'); //Je récupère les éléments avec la classe joke
  var jokeM = document.getElementById('jokeM'); //Je récupère les éléments avec la classe joke

  for (jokes of jokesM) {
    jokes.classList.toggle('joke'); //Je parcours les éléments avec la classe joke et on ajoute la classe
    }

  if (jsonJokeM.type == "single") {
    jokeM.appendChild(nouvH4Sgl);
    jokeM.appendChild(Cat);

  }
  else {
      jokeM.appendChild(nouvH4);
      jokeM.appendChild(p);
      jokeM.appendChild(Cat);
  }
}


function initialize(e){
  start();
  programmingJoke();
  darkJoke();
  miscellaneous();
}

function refreshP(){
  var joke = document.getElementById('jokeP');

  joke.classList.remove("joke");

  var firstChild = joke.firstChild;
    joke.removeChild(firstChild);

  var newFirstChild = joke.firstChild;
    joke.removeChild(newFirstChild);

  var newNewFirstChild = joke.lastChild;
    joke.removeChild(newNewFirstChild);

}

function refreshD(){
  var joke = document.getElementById('jokeD');

  joke.classList.remove("joke");

  var firstChild = joke.firstChild;
    joke.removeChild(firstChild);

  var newFirstChild = joke.firstChild;
    joke.removeChild(newFirstChild);

  var newNewFirstChild = joke.lastChild;
    joke.removeChild(newNewFirstChild);

}

function refreshM(){
  var joke = document.getElementById('jokeM');

  joke.classList.remove("joke");

  var firstChild = joke.firstChild;
    joke.removeChild(firstChild);

  var newFirstChild = joke.firstChild;
    joke.removeChild(newFirstChild);

  var newNewFirstChild = joke.lastChild;
    joke.removeChild(newNewFirstChild);

}

var buttonProgrammingJoke = document.getElementById("buttonProgrammingJoke");
buttonProgrammingJoke.addEventListener('click',refreshP);
buttonProgrammingJoke.addEventListener('click',programmingJoke);

var buttonDarkJoke = document.getElementById("buttonDarkJoke");
buttonDarkJoke.addEventListener('click',refreshD);
buttonDarkJoke.addEventListener('click',darkJoke);

var buttonMJoke = document.getElementById("buttonMJoke");
buttonMJoke.addEventListener('click',refreshM);
buttonMJoke.addEventListener('click',miscellaneous);

  window.onload = initialize;

/*function display(){

  var presentation = document.getElementById('Presentation');
  var
}*/

  AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

AOS.init();
