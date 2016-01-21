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
  // add each land as an article tag
  lands.forEach(function(landName) {
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

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  var listOfHobbits = document.createElement("ul");
  hobbits.forEach(function(hobbitName) {
    listOfHobbits.innerHTML += "<li class=\"hobbit\">" + hobbitName + "</li>";
  // give each hobbit a class of hobbit
    });
  theShire.appendChild(listOfHobbits);
}

makeHobbits();


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
};

keepItSecretKeepItSafe();

// Part 4


function makeBuddies() {
  // create an aside tag
  var friends = document.createElement("aside");
  // attach an unordered list of the 'buddies' in the aside
  var listOfBuddies = document.createElement("ul");
  buddies.forEach(function(buddyName) {
    listOfBuddies.innerHTML += "<li>" + buddyName + "</li>";
    friends.appendChild(listOfBuddies);
  });
  // insert your aside as a child element of rivendell
  rivendell.appendChild(friends);
}

makeBuddies();

// Part 5

var strider = rivendell.querySelectorAll("li")[3];
function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  strider.textContent = "Aragorn";
}

beautifulStranger();

// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  var halfings = theShire.querySelector("ul");
  rivendell.appendChild(halfings);
}

leaveTheShire();

// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  var fellowship = document.createElement("div");
  fellowship.setAttribute("id", "the-fellowship");
  rivendell.appendChild(fellowship);
  var ammendFellowship = document.createElement("ul");
  fellowship.appendChild(ammendFellowship);

  // add each hobbit and buddy one at a time to 'the-fellowship'
  var rivendellClan = rivendell.querySelectorAll("li");
  for (var i = 0; i < rivendellClan.length; i++) {
      ammendFellowship.appendChild(rivendellClan[i]);
      console.log(rivendellClan[i].textContent + " has joined the Fellowship!");
      // use textContent
  }
  // after each character is added make an alert that they have joined your party
}

forgeTheFellowShip();

// Part 8

var gandalf = rivendell.querySelectorAll("li")[0];
function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  gandalf.textContent = "Gandalf the White";
  // apply style to the element
  // make the background 'white', add a grey border
}

theBalrog();

// Part 9

var boromirDies = rivendell.querySelectorAll("ul")[2];
var boromir = rivendell.querySelectorAll("li")[4];
boromir.setAttribute("id", "boromir");

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  console.log("The horn of gondor has been blown!");
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
  boromirDies.removeChild(boromir);
}

hornOfGondor();


// Part 10
frodo = rivendell.querySelectorAll(".hobbit")[0];
var sam = rivendell.querySelectorAll(".hobbit")[1];
var travelTogether = document.createElement("ul");
travelTogether.setAttribute("id", "travelTogether");
mordor.appendChild(travelTogether)

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  travelTogether.appendChild(frodo);
  travelTogether.appendChild(sam);
  // add a div with an id of 'mount-doom' to Mordor
  var mountDoom = document.createElement("div");
  mountDoom.setAttribute("id", "mount-doom");
  mordor.appendChild(mountDoom);
}

itsDangerousToGoAlone();


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  var gollum = document.createElement("div");
  gollum.setAttribute("id", "gollum");
  mordor.appendChild(gollum);
  // Remove the ring from Frodo and give it to Gollum
  var theOneRing = mordor.querySelector("div");
  gollum.appendChild(theOneRing);
  // Move Gollum into Mount Doom
  var mountDoom = mordor.querySelector("div");
  mountDoom.appendChild(gollum);
}

weWantsIt();

// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  var gollumDies = mordor.querySelector("div");
  var gollum = mordor.querySelectorAll("div")[1];
  gollumDies.removeChild(gollum);
  // remove all the baddies from the document
  var eyeOfSauron = body.querySelectorAll("article")[2];
  eyeOfSauron.style.background = "none";
  // Move all the hobbits back to the shire
  theShire.appendChild(travelTogether);

  var merry = rivendell.querySelectorAll(".hobbit")[0];
  var pippin = rivendell.querySelectorAll(".hobbit")[1];

  var rivendellHobbits = document.createElement("ul");
  rivendellHobbits.setAttribute("id", "rivendellHobbits");

  rivendellHobbits.appendChild(merry);
  rivendellHobbits.appendChild(pippin);
  theShire.appendChild(rivendellHobbits);
}

thereAndBackAgain();

  var byeFellowship = rivendell.querySelectorAll("ul")[2];
  byeFellowship.removeChild(baddies);

// Bonus 1 - Within the click event listener for clicking `'#the-ring'`, add functionality so that when it's clicked, it not only calls `nazgulScreech` but also causes Frodo's opacity to go down to 0 for a while, only to fade back in.


// Bonus 2 - If the ring is clicked three times, the entire body element should disappear, to be replaced with the text "The Ring has been returned to Sauron and the world is over."