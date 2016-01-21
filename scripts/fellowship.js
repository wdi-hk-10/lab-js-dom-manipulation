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
  var middleEarth = document.createElement("section");
  middleEarth.setAttribute("id", "middle-earth");
  lands.forEach(function(landName){
    var land = document.createElement("article");
    land.innerHTML = "<h1>" + landName + "</h1>";
    middleEarth.appendChild(land);
  });
  body.appendChild(middleEarth);
  // create a section tag with an id of middle-earth
  // add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
}

makeMiddleEarth();


// Part 2
var theShire = document.querySelectorAll("article")[0];
var rivendell = document.querySelectorAll("article")[1];
var mordor = document.querySelectorAll("article")[2];

function makeHobbits() {
  var listOfHobbits = document.createElement("ul");
  hobbits.forEach(function(hobbitName){
    listOfHobbits.innerHTML += "<li class=\"hobbit\">"+ hobbitName + "</li>";
  });
  theShire.appendChild(listOfHobbits);
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit
}
makeHobbits();

// Part 3
var frodo = document.querySelector(".hobbit");
function keepItSecretKeepItSafe() {
  var theonering = document.createElement("div");
  theonering.setAttribute("id","the-ring");
  theonering.setAttribute("class", "magic-imbued-jewelry");
  //theonering.addEventListener("click", nazgulScreech);
  var click=0;
  theonering.addEventListener("click", function(){
    nazgulScreech;
    frodo.style.opacity = "0.5";
    click=click+1;
    if (click===3){
      document.body.innerHTML = "";
      body.innerHTML = "<h1 style=\"text-align: center\";>"+ "The Ring has been returned to Sauron and the world is over."+"</h1>"
    }
  });
  frodo.appendChild(theonering);

  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
}

keepItSecretKeepItSafe();

// Part 4


function makeBuddies() {
  var aside = document.createElement("aside");
  var team = document.createElement("ul");
  buddies.forEach(function(buddyname){
    team.innerHTML += "<li>" + buddyname + "</li>";
  });
  aside.appendChild(team);
  rivendell.appendChild(aside);
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
}

makeBuddies();
// Part 5

var strider = rivendell.querySelectorAll("li")[3];
function beautifulStranger() {
  strider.textContent = "Aragorn";
  // change the 'Strider' textnode to 'Aragorn'
}
beautifulStranger();

// Part 6
var halflings = theShire.querySelector("ul");
function leaveTheShire() {
  rivendell.appendChild(halflings);
  // assemble the hobbits and move them to Rivendell
}

leaveTheShire();

// Part 7


function forgeTheFellowShip() {
  var fellows = document.createElement("div");
  fellows.setAttribute("id", "the-fellowship");
  rivendell.appendChild(fellows);
  var heroes = rivendell.querySelectorAll("li");
  for (var i=0; i<heroes.length; i++) {
    fellows.appendChild(heroes[i]);
    console.log(heroes[i].textContent + " has joined the fellowship");
  }
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}
forgeTheFellowShip();

// Part 8

var newgandalf = rivendell.querySelectorAll("li")[0];
function theBalrog() {
  newgandalf.textContent = "Gandalf the White";
  newgandalf.style.backgroundColor = "white";
  newgandalf.style.border = "thick solid grey";
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}
theBalrog();

// Part 9

function hornOfGondor() {
  console.log("The Horn of Gondor has been blown");
  console.log("Boromir's been killed by the Uruk-hai!");
  var death = rivendell.querySelectorAll("li")[4];
  death.style.textDecoration = "line-through";
  var killed = rivendell.querySelector("aside > ul");
  killed.appendChild(death);
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}
hornOfGondor();

// Part 10
frofro = document.querySelectorAll(".hobbit")[0];
samsam = document.querySelectorAll(".hobbit")[1];
function itsDangerousToGoAlone(){
  mordor.appendChild(frofro);
  mordor.appendChild(samsam);
  var allseeingeye = document.createElement("div");
  allseeingeye.setAttribute("id","mount-doom");
  mordor.appendChild(allseeingeye);
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}
itsDangerousToGoAlone();

// Part 11

function weWantsIt() {
  var smeagol = document.createElement("div");
  smeagol.setAttribute("id","gollum");
  mordor.appendChild(smeagol);
  document.querySelector("#gollum").appendChild(document.querySelector("#the-ring"));
  document.querySelector("#mount-doom").appendChild(document.querySelector("#gollum"));
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}
weWantsIt();

// Part 12
var mers = rivendell.querySelectorAll(".hobbit")[0];
var pips = rivendell.querySelectorAll(".hobbit")[1];
function thereAndBackAgain() {
  document.getElementById("mount-doom").removeChild(document.getElementById("gollum"));
  theShire.appendChild(frofro);
  theShire.appendChild(samsam);
  theShire.appendChild(mers);
  theShire.appendChild(pips);
  rivendell.removeChild(document.getElementById("the-fellowship"));
  var endofstory = rivendell.querySelector("aside");
  rivendell.removeChild(endofstory);
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
thereAndBackAgain();
