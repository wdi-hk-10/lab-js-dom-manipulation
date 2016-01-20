console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  var middleEarth = document.createElement("section");
  middleEarth.setAttribute("id","middle-earth")
  // add each land as an article tag
  lands.forEach(function(landName){
    var land = document.createElement("article")
    // inside each article tag include an h1 with the name of the land
    land.innerHTML = "<h1>" + landName + "</h1>";
    middleEarth.appendChild(land);
  });
  // append middle-earth to your document body
  body.appendChild(middleEarth);
}

makeMiddleEarth();


// Part 2
var theShire = document.querySelectorAll('article')[0]
var rivendell = document.querySelectorAll('article')[1]
var mordor = document.querySelectorAll('article')[2]

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  var listOfHobbits = document.createElement("ul");
  hobbits.forEach(function(hobbitName){
    // give each hobbit a class of hobbit
    listOfHobbits.innerHTML += "<li class =\"hobbit\">" + hobbitName + "</li>"
  });
  theShire.appendChild(listOfHobbits);
}

makeHobbits();

// Part 3
var frodo = theShire.querySelector(".hobbit");
function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  var theRing = document.createElement("div");
  theRing.setAttribute("id","the-ring")
  // give the div a class of 'magic-imbued-jewelry'
  theRing.setAttribute("class","magic-imbued-jewelry");
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  theRing.addEventListener("click", nazgulScreech);
  // add the ring as a child of Frodo
  frodo.appendChild(theRing);
}

keepItSecretKeepItSafe();

// Part 4

function makeBuddies() {
  // create an aside tag
  var aside = document.createElement("aside")
  // attach an unordered list of the 'buddies' in the aside
  var listOfBuddies = document.createElement("ul");
  buddies.forEach(function(buddiesName){
    listOfBuddies.innerHTML += "<li>" + buddiesName + "</li>";
  });
  aside.appendChild(listOfBuddies);
  // insert your aside as a child element of rivendell
  rivendell.appendChild(aside);
}

makeBuddies();

// Part 5

var strider =rivendell.querySelectorAll("li")[3]
function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  strider.textContent='Aragorn';
}

beautifulStranger();

// Part 6

var halflings = theShire.querySelectorAll("li");
var ul = rivendell.querySelector("ul");

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  for (var i=0; i<halflings.length; i++) {
    ul.appendChild(halflings[i]);
  }
}

leaveTheShire();

// Part 7

var character = document.querySelectorAll("li");
function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  var theFellowship = document.createElement("div");
  theFellowship.setAttribute("id","the-fellowship");
  // add each hobbit and buddy one at a time to 'the-fellowship'
  for (i=0; i < character.length; i++) {
    ul.appendChild(character[i]);
    // after each character is added make an alert that they have joined your party
    console.log(character[i].textContent + " have joined your party.")
  }
  theFellowship.appendChild(ul);
  rivendell.appendChild(theFellowship)
}

forgeTheFellowShip();

// Part 8

var gandalf =rivendell.querySelectorAll("li")[0]
function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  gandalf.textContent='Gandalf the White';
  // apply style to the element
  // make the background 'white', add a grey border
  gandalf.style.background= "white"
  gandalf.style.border= "5px solid grey"
}

theBalrog();

// Part 9
var boromir = rivendell.querySelectorAll("li")[4]
function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  console.log("The Horn of Gondor has been blown. Boromir has been killed by the Uruk-hai!")
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  boromir.style.textDecoration= "line-through"
  // Remove Boromir from the Fellowship
  ul.removeChild(boromir);
}

hornOfGondor();

// Part 10
var frodoSam = rivendell.querySelectorAll("li");
function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  for (var i=4; i<6; i++) {
    mordor.appendChild(frodoSam[i])
  }
  // add a div with an id of 'mount-doom' to Mordor
  var div = document.createElement("div");
  div.setAttribute("id","mount-doom");
  mordor.appendChild(div);
}

itsDangerousToGoAlone();

// Part 11
var removeRing = mordor.querySelector("div")
function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  var div = document.createElement("div");
  div.setAttribute("id","gollum");
  mordor.appendChild(div)
  // Remove the ring from Frodo and give it to Gollum
  var Gollum =
  gollum.appendChild(removeRing);
  // Move Gollum into Mount Doom
  var mountDoom = mordor.querySelector("#mount-doom")
  mountDoom.appendChild(gollum);
}

weWantsIt();

// Part 12
var GollumRing = mordor.querySelector("#mount-doom")
var Section = body.querySelector("#middle-earth")
var list = mordor.querySelectorAll("li")
var list2 = ul.querySelectorAll("li")

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  mordor.removeChild(GollumRing);
  // remove all the baddies from the document
  mordor.style.backgroundImage = "none";
  // Move all the hobbits back to the shire
  for (var i=0; i<2; i++) {
    theShire.appendChild(list[i]);
  }
  for (var i=4; i<6; i++) {
    theShire.appendChild(list2[i]);
  }
}

thereAndBackAgain();