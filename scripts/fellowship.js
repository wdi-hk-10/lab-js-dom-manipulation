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
  middleEarth.setAttribute("id", "middle-earth");
  lands.forEach(function(landName){
    // add each land as an article tag
    var land = document.createElement("article");
    // inside each article tag include an h1 with the name of the land
    land.innerHTML = '<h1>' + landName + '</h1>';
    middleEarth.appendChild(land);
  });
  // append middle-earth to your document body
  body.appendChild(middleEarth);
}

makeMiddleEarth();


// Part 2
//var theShire = document.querySelector("#middle-earth > article:nth-child(1)");
//var rivendell = document.querySelector("#middle-earth > article:nth-child(2)");
//var mordor = document.querySelector("#middle-earth > article:nth-child(3)");
var theShire = body.querySelectorAll('article')[0];
var rivendell = body.querySelectorAll('article')[1];
var mordor = body.querySelectorAll('article')[2];

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  var listOfHobbits = document.createElement("ul");
  hobbits.forEach(function(hobbitName){
    var hobbit = document.createElement("li");
    hobbit.innerText = hobbitName;
    // give each hobbit a class of hobbit
    hobbit.setAttribute("class", "hobbit");
    listOfHobbits.appendChild(hobbit);
  });
  theShire.appendChild(listOfHobbits);
}

makeHobbits();

// Part 3
//var frodo = document.querySelector(".hobbit:nth-child(1)");
var frodo = body.querySelectorAll(".hobbit")[0];
var ringTouched = 0;
function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  var theOneRing = document.createElement("div");
  theOneRing.setAttribute("id", "the-ring");
  // give the div a class of 'magic-imbued-jewelry'
  theOneRing.setAttribute("class", "magic-imbued-jewelry");
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  theOneRing.addEventListener("click", function() {
    nazgulScreech();
  });
  // add the ring as a child of Frodo
  frodo.appendChild(theOneRing);
}

keepItSecretKeepItSafe();

// Part 4
function makeBuddies() {
  // create an aside tag
  var aside = document.createElement("aside");
  var buddyList = document.createElement("ul");
  buddies.forEach(function(buddyName){
    var buddy = document.createElement("li");
    buddy.textContent = buddyName;
    buddyList.appendChild(buddy);
  });
  // attach an unordered list of the 'buddies' in the aside
  aside.appendChild(buddyList);
  // insert your aside as a child element of rivendell
  rivendell.appendChild(aside);
}

makeBuddies();


// Part 5
//var strider = rivendell.querySelector("aside >ul > li:nth-child(4)");
var strider = rivendell.querySelectorAll("li")[3];
function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  strider.textContent = "Aragorn";
}

beautifulStranger();

// Part 6
var halflings = theShire.querySelectorAll("li");
function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  var ul = rivendell.querySelector("ul");
  for (var i=0; i<halflings.length; i++) {
    ul.appendChild(halflings[i]);
  }
}

leaveTheShire();


// Part 7


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
