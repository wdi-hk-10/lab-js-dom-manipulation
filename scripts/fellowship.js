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

    // Bonus 1
    frodo.style.opacity = 1;
    var magic = function(increment) {
      var opacity = +frodo.style.opacity;
      if (opacity >= 0) {
        frodo.style.opacity = opacity + increment;
      }
    }
    var fadeOutId = setInterval(magic, 200, -0.1);
    var fadeInId;
    setTimeout(function() { 
      clearInterval(fadeOutId); 
      fadeInId = setInterval(magic, 200, 0.1);
    }, 2000);
    setTimeout(function() { clearInterval(fadeInId); }, 4000);

    // Bonus 2
    ringTouched++;
    if (ringTouched === 3) {
      body.innerHTML = "<div>The Ring has been returned to Sauron and the world is over.</div>";
      var div = body.querySelector("div");
      div.style.fontSize = "5em";
      div.style.marginTop = "30%";
      div.style.textAlign = "center";
    }
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
var fellowshipMembers = rivendell.querySelectorAll("li");
function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  var theFellowship = document.createElement("div");
  theFellowship.setAttribute("id", "the-fellowship");
  // add each hobbit and buddy one at a time to 'the-fellowship'
  for (var i=0; i<fellowshipMembers.length; i++) {
    theFellowship.appendChild(fellowshipMembers[i]);
    // after each character is added make an alert that they have joined your party
    console.log(fellowshipMembers[i].textContent + " has joined the party.");
  }
  rivendell.appendChild(theFellowship);
}

forgeTheFellowShip();

// Part 8
var gandalf = fellowshipMembers[0];

function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  gandalf.textContent = "Gandalf the White";
  // apply style to the element
  // make the background 'white', add a grey border
  gandalf.style.border = "3px solid gray";
  gandalf.style.backgroundColor = "white";
}

theBalrog();

// Part 9
var boromir = fellowshipMembers[4];
function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  alert("The horn of gondor has been blown!!");
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  boromir.style.textDecoration = "line-through";
  // Remove Boromir from the Fellowship
  var theFellowship = rivendell.querySelector("#the-fellowship");
  theFellowship.removeChild(boromir);
  //boromir.parentNode.removeChild(boromir);
}

hornOfGondor();


// Part 10
var sam = fellowshipMembers[6];
var mountDoom;
//var sam = rivendell.querySelectorAll("li")[5];
function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  mordor.appendChild(frodo);
  mordor.appendChild(sam);
  // add a div with an id of 'mount-doom' to Mordor
  mountDoom = document.createElement("div");
  mountDoom.setAttribute("id", "mount-doom");
  mordor.appendChild(mountDoom);
}

itsDangerousToGoAlone();


// Part 11
var gollum, theRing;

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  gollum = document.createElement("div");
  gollum.setAttribute("id", "gollum");
  // Remove the ring from Frodo and give it to Gollum
  theRing = frodo.querySelector("#the-ring");
  gollum.appendChild(theRing);
  // Move Gollum into Mount Doom
  mountDoom.appendChild(gollum);
}

weWantsIt();


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  gollum.parentNode.removeChild(gollum);
  theRing.parentNode.removeChild(theRing);
  // remove all the baddies from the document
  mordor.style.background = "transparent";
  // Move all the hobbits back to the shire
  var hobbits = body.querySelectorAll(".hobbit");
  var ul = document.createElement("ul");
  for (var i=0; i<hobbits.length; i++) {
    ul.appendChild(hobbits[i]);
  }
  theShire.appendChild(ul);
}

thereAndBackAgain();