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

    land.innerHTML = "<h1>" + landName + "</h1>";
    middleEarth.appendChild(land);
  });
  // append middle-earth to your document body
  body.appendChild(middleEarth);
}

makeMiddleEarth();


// Part 2
var theShire = document.querySelectorAll("article")[0];
var rivendell = document.querySelectorAll("article")[1];
var mordor = document.querySelectorAll("article")[2];


// var theShire = document.querySelectorAll("#middle-earth > article");  would also work

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  var listOfHobbits = document.createElement("ul");
  hobbits.forEach(function(hobbitName){
    listOfHobbits.innerHTML += "<li class=\"hobbit\">" + hobbitName + "</li>";
  });
  theShire.appendChild(listOfHobbits);
}
makeHobbits();

  // looking for shire - you need to use quertSelector


  // give each hobbit a class of hobbit



// Part 3

var frodo = theShire.querySelector(".hobbit");

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  var theOneRing = document.createElement("div");
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

  var Buds = document.createElement("aside");

  var listOfBuds = document.createElement("ul");

  buddies.forEach(function(budName){
    listOfBuds.innerHTML += "<li>" + budName + "</li>";
  });
  Buds.appendChild(listOfBuds);
  rivendell.appendChild(Buds);
}

makeBuddies();


  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell



// Part 5

var strider = rivendell.querySelectorAll("li")[0];

function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  strider.textcontent = "Aragorn";
}

beautifulStranger();


// Part 6

var halflings = theShire.querySelector("ul");

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  rivendell.appendChild(halflings);
}

leaveTheShire();

// Part 7

var theFellowship = document.createElement("div");

function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
