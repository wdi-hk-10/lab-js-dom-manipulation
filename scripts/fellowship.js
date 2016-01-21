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
  middleEarth.setAttribute("id","middle-earth");
  // add each land as an article tag
  lands.forEach(function(landName){
    var land = document.createElement("article");
  // inside each article tag include an h1 with the name of the land
    land.innerHTML = "<h1>" + landName + "</h1>"
    middleEarth.appendChild(land);
  })
  // append middle-earth to your document body
  body.appendChild(middleEarth);
}

makeMiddleEarth();


// Part 2

var theShire = document.querySelectorAll("article")[0];
var rivendell = document.querySelectorAll("article")[1];
var mordor = document.querySelectorAll("article")[2];

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  var listOfHobbits = document.createElement("ul");
  hobbits.forEach(function(hobbitName){
    listOfHobbits.innerHTML += "<li class=\"hobbit\">" + hobbitName + "</li>";
  });
  theShire.appendChild(listOfHobbits);
  // give each hobbit a class of hobbit
}

makeHobbits();


// Part 3
var frodo = theShire.querySelector(".hobbit");
var theOneRing = document.createElement("div");
function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  theOneRing.setAttribute("id", "the-ring");
  // give the div a class of 'magic-imbued-jewelry'
  theOneRing.setAttribute("class", "magic-imbued-jewelry");
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  theOneRing.addEventListener("click", nazgulScreech);
  // add the ring as a child of Frodo
  frodo.appendChild(theOneRing);
}
keepItSecretKeepItSafe();

// Part 4


function makeBuddies() {
  // create an aside tag
  var aside = document.createElement('aside');
  // attach an unordered list of the 'buddies' in the aside
  var listOfBuddies = document.createElement('ul');
  buddies.forEach(function(buddy){
    listOfBuddies.innerHTML += "<li>" + buddy + "</li>";
  });
  aside.appendChild(listOfBuddies);
  rivendell.appendChild(aside);
  // insert your aside as a child element of rivendell
}
makeBuddies();


// Part 5

var strider = rivendell.querySelectorAll('li')[3]

function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  strider.textContent='Aragorn';
}

beautifulStranger();

// Part 6

var halflings = theShire.querySelector("ul")

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  rivendell.appendChild(halflings);
}
leaveTheShire();

// Part 7

var characters = document.querySelectorAll('li');
var characterList = document.createElement('ul');

function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  var fellowship = document.createElement('div');
  fellowship.setAttribute("id","the-fellowship");
  rivendell.appendChild(fellowship);
  // add each hobbit and buddy one at a time to 'the-fellowship'
  for (var i = 0; i < characters.length; i++){
    characterList.appendChild(characters[i]);
    console.log(characters[i].textContent + " has joined your party!");
  };
  fellowship.appendChild(characterList);
  // after each character is added make an alert that they have joined your party

}

forgeTheFellowShip();

// Part 8

var gandalf = rivendell.querySelector('li');

function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  gandalf.textContent='Gandalf the White';
  // apply style to the element
  gandalf.style.background = 'white';
  // make the background 'white', add a grey border
  gandalf.style.border = '5px dotted grey';
}

theBalrog();

// Part 9
var boromir = rivendell.querySelectorAll('li')[4]
function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  alert('The horn of Gondor has been blown! Boromir\'s been killed by the Uruk-hai.. :(');
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
boromir.style.textDecoration = 'line-through';
  // Remove Boromir from the Fellowship
characterList.removeChild(boromir);
}
hornOfGondor();

// Part 10
var sam = document.querySelectorAll('.hobbit')[1];
var mountDoom = document.createElement('div');
function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  var mordorList = document.createElement('ul');
  mordorList.appendChild(frodo);
  mordorList.appendChild(sam);
  mordor.appendChild(mordorList);
  // add a div with an id of 'mount-doom' to Mordor
  mountDoom.setAttribute('id','mount-doom');
  mordor.appendChild(mountDoom);
}
itsDangerousToGoAlone();

// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  var gollum = document.createElement('div');
  gollum.setAttribute('id','gollum');
  mordor.appendChild(gollum);
  // Remove the ring from Frodo and give it to Gollum
  gollum.appendChild(theOneRing);
  // Move Gollum into Mount Doom
  mountDoom.appendChild(gollum);
}

weWantsIt();

// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  mountDoom.removeChild(gollum);
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
  var selectAllHobbits = document.querySelectorAll('.hobbit');
  var hobbitList = document.createElement('ul');
  for (var i = 0; i < selectAllHobbits.length; i++) {
    hobbitList.appendChild(selectAllHobbits[i]);
  }
  theShire.appendChild(hobbitList);
}


thereAndBackAgain();