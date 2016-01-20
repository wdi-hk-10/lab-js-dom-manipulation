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


// Part 1 - Make Middle Earth

function makeMiddleEarth() {
  // Create a section tag with an id of middle-earth
  var middleEarth = document.createElement("section");  // <-- need a variable to hold it to reference it
  middleEarth.setAttribute("id", "middle-earth");
  // Add each land as an article tag
  lands.forEach(function(landName) {
    var land = document.createElement("article"); // <-- need a varaible to hold it to reference it
    // Inside each article tag include an h1 with the name of the land.
    land.innerHTML = "<h1>" + landName + "</h1>"
    middleEarth.appendChild(land);
  });
  // Append middle-earth to your document body.
  body.appendChild(middleEarth);
}

makeMiddleEarth();


// Part 2 - Make Hobbits

var theShire = document.querySelectorAll("article")[0];
var rivendell = document.querySelectorAll("article")[1];
var mordor = document.querySelectorAll("article")[2];

function makeHobbits() {
  // Display an unordered list of hobbits in the shire (which is the first article tag on the page).
  var listOfHobbits = document.createElement("ul");
  hobbits.forEach(function(hobbitName){
    listOfHobbits.innerHTML += "<li class=\"hobbit\">" + hobbitName + "</li>";
    // Give each hobbit a class of hobbit.
  });
  theShire.appendChild(listOfHobbits);
}

makeHobbits();


// Part 3 - Keep it secret, keep it safe

var frodo = document.querySelector(".hobbit"); //don't need querySelectorAll as Frodo is the first child of theShire
function keepItSecretKeepItSafe() {
  // Create a div with an id of 'the-ring'.
  var theOneRing = document.createElement("div");
  theOneRing.setAttribute("id", "the-ring");
  // Give the div a class of 'magic-imbued-jewelry'.
  theOneRing.setAttribute("class","magic-imbued-jewelry");
  // Add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked.
  theOneRing.addEventListener("click", nazgulScreech);//do not add () after the function as will then only work once.
  // Add the ring as a child of Frodo
  frodo.appendChild(theOneRing);
}

keepItSecretKeepItSafe();


// Part 4 - Make buddies

function makeBuddies() {
  // Create an aside tag
var aside = document.createElement("aside");
  // Attach an unordered list of the 'buddies' in the aside.
var listOfBuddies = document.createElement("ul");
buddies.forEach(function(buddyName){
    listOfBuddies.innerHTML += "<li class=\"buddy\">" + buddyName + "</li>";
  });
  // Insert your aside as a child element of rivendell.
  aside.appendChild(listOfBuddies);
  rivendell.appendChild(aside);
}

makeBuddies();


// Part 5 - Beautiful stranger

var strider = rivendell.querySelectorAll("li")[3];
function beautifulStranger() {
  // Change the 'Strider' textnode to 'Aragorn'.
  strider.textContent = "Aragorn";
}

beautifulStranger();


// Part 6 - Leave the Shire

var halflings = theShire.querySelectorAll("li");
function leaveTheShire() {
  // Assemble the hobbits and move them to Rivendell.
  var ul = rivendell.querySelector("ul");
  for (var i = 0; i < halflings.length; i++) {
    ul.appendChild(halflings[i]);
  }
}

leaveTheShire();


// Part 7 - Forge the Fellowship

var theFellowship = rivendell.querySelectorAll("li");
function forgeTheFellowShip() {
  // Create a new div called 'the-fellowship' within rivendell
  var div = document.createElement("div");  // need a variable to hold it to reference it
  div.setAttribute("id", "the-fellowship");
  rivendell.appendChild(div);
  // Add each hobbit and buddy one at a time to 'the-fellowship'.
  for (i = 0; i < theFellowship.length; i++) {
    div.appendChild(theFellowship[i]);
    // After each character is added make an alert that they have joined your party.
    console.log(theFellowship[i].textContent + " joined the fellowship.");
  };
}

forgeTheFellowShip();


// Part 8 - The Balrog

var gandalf = rivendell.querySelectorAll("li")[0];
function theBalrog() {
  // Change the 'Gandalf' textNode to 'Gandalf the White'.
  gandalf.textContent = "Gandalf the White";
  // Apply style to the element.  Make the background 'white', add a grey border.
  gandalf.style.background = "white";
  gandalf.style.border = "thick solid gray";
}

theBalrog();


// Part 9 - Horn of Gondor

var boromir = rivendell.querySelectorAll("li")[4];
function hornOfGondor() {
  // Pop up an alert that the horn of gondor has been blown.
  console.log("The Horn of Gondor has been blown!");  // <-- should be an alert but they're so 1990s annoying!
  // Boromir's been killed by the Uruk-hai!
  // Put a linethrough on boromir's name.
  boromir.style.textDecoration = "line-through";
  // Remove Boromir from the Fellowship.
  boromir.style.display = "none";
}

hornOfGondor();


// Part 10 - It's dangerous to go alone

var sam = rivendell.querySelectorAll("li") [6];
function itsDangerousToGoAlone(){
  // Take Frodo and Sam out of the fellowship and move them to Mordor.
  mordor.appendChild(frodo);
  mordor.appendChild(sam);
  // Add a div with an id of 'mount-doom' to Mordor.
  var div = document.createElement("div");  // need a variable to hold it to reference it
  div.setAttribute("id", "mount-doom");
  mordor.appendChild(div);
}

itsDangerousToGoAlone();


// Part 11 - We wants it

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor.

  // Remove the ring from Frodo and give it to Gollum.

  // Move Gollum into Mount Doom.
}


// Part 12 - There and back again

function thereAndBackAgain() {
  // Remove Gollum and the Ring from the document.

  // Remove all the baddies from the document.

  // Move all the hobbits back to the shire.
}


// Bonus - The One Ring

// Within the click event listener for clicking '#the-ring', add functionality so that when it's clicked,
// it not only calls nazgulScreech but also causes Frodo's opacity to go down to 0 for a while, only to fade back in.

// If the ring is clicked three times, the entire body element should disappear, to be replaced with the text
// "The Ring has been returned to Sauron and the world is over."