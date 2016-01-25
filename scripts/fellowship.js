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
    land.innerHTML = "<h1>" + landName  + "</h1>";
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
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  var listOfHobbits = document.createElement("ul");
  hobbits.forEach(function(hobbitName){
      // give each hobbit a class of hobbit
    listOfHobbits.innerHTML += "<li class=\"hobbit\">" + hobbitName + "</li>";
  });

  theShire.appendChild(listOfHobbits);
}

makeHobbits();

// Part 3
var frodo = theShire.querySelector(".hobbit");
function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
    // create a section tag with an id of middle-earth
  var theRing = document.createElement("div");
  theRing.setAttribute("id", "the-ring");
  // give the div a class of 'magic-imbued-jewelry'
  theRing.setAttribute("class", "magic-imbued-jewelry");
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  theRing.addEventListener("click", nazgulScreech);
  // add the ring as a child of Frodo
  frodo.appendChild(theRing);
}

keepItSecretKeepItSafe();
// Part 4


function makeBuddies() {
  // create an aside tag
  var makeBuddies = document.createElement("aside");
  // attach an unordered list of the 'buddies' in the aside
  var listOfBuddies = document.createElement("ul");
  buddies.forEach(function(buddiesName){
      // give each hobbit a class of hobbit
    listOfBuddies.innerHTML += "<li class=\"buddies\">" + buddiesName + "</li>";
  });
  // insert your aside as a child element of rivendell
  rivendell.appendChild(listOfBuddies);
}

makeBuddies()

// Part 5

function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
var strider = rivendell.querySelectorAll("li")[3];
  strider.textContent = "Aragorn";
}
beautifulStranger()

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
var theFellowship = rivendell.querySelectorAll("li");
function forgeTheFellowship(){
  var fellows = document.createElement("div");
  fellows.setAttribute("id", "the-fellowship");
  rivendell.appendChild(fellows);
  for (i=0; i<theFellowship.length; i++) {
    fellows.appendChild(theFellowship[i])
    console.log(theFellowship[i].textContent + " has joined the party")
  }
}
// var theWholeGang = document.querySelectorAll("li");
// function forgeTheFellowShip() {
//   // create a new div called 'the-fellowship' within rivendell
//   var theFellowship = document.createElement("div");a
//   theFellowship.setAttribute("id", "the-fellowship");
//  // add each hobbit and buddy one at a time to 'the-fellowship'
//   for (i =0; i<theWholeGang.length; i++) {
//     ul.appendChild(theWholeGang[i]);
//   // after each character is added make an alert that they have joined your party
//     console.log(theWholeGang[i].textContent + " has joined the party")
//   }
//   theFellowship.appendChild(ul);
//   rivendell.appendChild(theFellowship);
// }

// forgeTheFellowShip()
// Part 8

var gandalf = rivendell.querySelectorAll("li")[0];
function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  gandalf.textContent = "Gandalf the White";
  // apply style to the element
  // var textContent = document.createElement("style");
  // make the background 'white', add a grey border
    gandalf.style.background= "white";
    gandalf.style.border= "5px solid grey";
}
theBalrog()

// Part 9

var boromir = rivendell.querySelectorAll("li")[4]
function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
    // Boromir's been killed by the Uruk-hai!
  console.log("The Horn of Gondor has been blown. Boromir has been killed by the Uruk-hai");
    // put a linethrough on boromir's name
  boromir.style.textDecoration= "line-through";
  // Remove Boromir from the Fellowship
  //var ul = rivendell.querySelector("ul");
  //ul.removeChild(boromir);
  boromir.parentNode.removeChild(boromir);
}
hornOfGondor()

// Part 10

// var frodoSam = rivendell.querySelectorAll("li");
// function itsDangerousToGoAlone(){
//   // take Frodo and Sam out of the fellowship and move them to Mordor
//   for (var i=4; i<6; i++) {
//     mordor.appendChild(frodoSam[i])
//   }
//   // add a div with an id of 'mount-doom' to Mordor
//   var div = document.createElement("div");
//   div.setAttribute("id","mount-doom");
//   mordor.appendChild(div);
// }

// itsDangerousToGoAlone();

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
