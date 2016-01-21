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
var $body = $('body');


// Part 1


function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  var $middleEarth = $('<section>').attr('id', 'middle-earth');
  // add each land as an article tag
  lands.forEach(function(landName){
    // inside each article tag include an h1 with the name of the land
    $middleEarth.append(
      $('<article>').html('<h1>' + landName + '</h1>')
    );
  });
  // append middle-earth to your document body
  $body.append($middleEarth);
}

makeMiddleEarth();


// Part 2
var $theShire = $('article:nth-child(1)');
var $rivendell = $('article:nth-child(2)');
var $mordor = $('article:nth-child(3)');
function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  var $ul = $('<ul>');
  hobbits.forEach(function(hobbit){
    // give each hobbit a class of hobbit
    $ul.append($('<li>').text(hobbit).addClass('hobbit'));
  });
  $theShire.append($ul);
}

makeHobbits();


// Part 3
var $frodo = $(".hobbit").first();
var $theOneRing;
function keepItSecretKeepItSafe() {
  // set up for the bonus
  $frodo.data('ring-touched', 0);
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  $theOneRing = $('<div>').attr('id', 'the-ring').addClass('magic-imbued-jewelry');
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  //$theOneRing.on('click', nazgulScreech);
  $theOneRing.on('click', function() {
    nazgulScreech();

    //Bonus 1
    $frodo.fadeOut({
      duration: 2000,
      complete: function() {
        $frodo.fadeIn(2000);
      }
    });

    //Bonus 2
    var touched = $frodo.data('ring-touched') + 1
    //var touched = $.data($frodo, 'ring-touched') + 1;
    $frodo.data('ring-touched', touched);
    if (touched === 3) {
      $body.html('<div>The Ring has been returned to Sauron and the world is over.</div>');
      $body.find('div').css({
        fontSize: '5em',
        marginTop: '30%',
        textAlign: 'center'
      })
    }
  });
  // add the ring as a child of Frodo
  $frodo.append($theOneRing);
}
keepItSecretKeepItSafe();

// Part 4

function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  var $ul = $('<aside>').append('<ul>').children(':first-child');
  buddies.forEach(function(buddy){
    $ul.append($("<li>").text(buddy));
  });
  // insert your aside as a child element of rivendell
  $rivendell.append($ul.parent());
}

makeBuddies();


// Part 5

var $strider = $rivendell.find('li:nth-child(4)');
function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  $strider.text('Aragorn');
}

beautifulStranger();


// Part 6
var $halflings = $('.hobbit');
function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  $rivendell.find('aside > ul').append($halflings);
}
leaveTheShire();


// Part 7

var $theFellowship;
function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  $theFellowship = $('<div>').attr('id', 'the-fellowship');
  $rivendell.append($theFellowship);
  $theFellowship.append($rivendell.find('ul'));
  // add each hobbit and buddy one at a time to 'the-fellowship'
  $theFellowship.find('li').each(function(){
    // after each character is added make an alert that they have joined your party
    console.log($(this).text() + ' has joined the fellowship.');
  });
}

forgeTheFellowShip();
/*
// Part 8

var $gandalf = $theFellowship.find('li:nth-child(1)');
function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  $gandalf.text('Gandalf the White');
  // apply style to the element
  // make the background 'white', add a grey border
  $gandalf.css({
    border: '3px solid gray',
    backgroundColor: 'white'
  });
}

theBalrog();


// Part 9
var $boromir = $theFellowship.find('li:nth-child(5)');
function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  alert("The horn of gondor has been blown. Boromir's been killed by the Uruk-hai!");
  // put a linethrough on boromir's name
  $boromir.css({textDecoration: 'line-through'});
  // Remove Boromir from the Fellowship
  $boromir.remove();
}
//hornOfGondor();

// Part 10
var $sam = $theFellowship.find('li:nth-child(6)');
var $mountDoom;
function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  var $ul = $('<ul>').append($frodo).append($sam);
  $mordor.append($ul);
  // add a div with an id of 'mount-doom' to Mordor
  $mountDoom = $('<div>').attr('id', 'mount-doom');
  $mordor.append($mountDoom);
}
itsDangerousToGoAlone();

// Part 11
var $gollum;
function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  $gollum = $('<div>').attr('id', 'gollum');
  // Remove the ring from Frodo and give it to Gollum
  $gollum.append($theOneRing);
  // Move Gollum into Mount Doom
  $mountDoom.append($gollum);
}
weWantsIt();


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  $gollum.remove();
  $theOneRing.remove();
  // remove all the baddies from the document
  $mordor.css({background: 'transparent'});
  // Move all the hobbits back to the shire
  $ul = $theShire.find('ul');
  $halflings.each(function(){
    $ul.append(this);
  });
}
thereAndBackAgain();
*/
