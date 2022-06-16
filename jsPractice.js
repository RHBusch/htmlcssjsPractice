
//-----------------------Reviewing JS Properties -------------------------------

/*Use the .querySelector() method to select the first 'h1' element. 
Access that element’s .innerHTML property to change the h1 title to 
'Most popular Harry Potter characters' */

document.querySelector('h1').innerHTML = 'Most popular Harry Potter characters'

/*Use the .getElementById() method to access the element with an ID of 'fourth'.
 Set that element’s inner HTML to read 'Professor Snape'.*/

document.getElementById('fourth').innerHTML = 'Professor Snape'

/* Use the .getElementsByClassName() method to access the first element 
with the class name of 'slytherin'. Replace that element’s 
inner HTML with the text 'Salazar Slytherin'.*/

document.getElementsByClassName('slytherin')[0].innerHTML = 'Salazar Slytherin'

/*
Use the .getElementsByTagName() method to access the first element with the <li> tag.
 Access that element’s .innerHTML to replace the content to read 'Dobby'.
*/

document.getElementsByTagName('li')[0].innerHTML = 'Dobby'

/*Style the backgroundColor of the <body> element in the blog post to '#201F2E' 
to match the Codecademy text editor.*/

let BgElement =
    document.querySelector('body');
BgElement.style.backgroundColor = '#201F2E';

/*Next, change the font family of the element with the heading class to 'Roboto'.*/

let headingElement =
    document.querySelector('h1');
headingElement.style.fontFamily = 'Roboto'

/*
First, create a variable called first and set it to the first children of the document body.
Then, set the inner HTML of the first element to 'BROWN BEARS ARE AWESOME!'.
 Take a moment to note which element has been modified.
*/

let first = document.body.children[0];
first.innerHTML = 'BROWN BEARS ARE AWESOME!'

/*
Use the .parentNode property to access the parent element of the variable first 
and modify its .style.backgroundColor to 'beige'.
Take a moment to notice the change in the web page.
*/

let first = document.body.children[0];
first.innerHTML = 'BROWN BEARS ARE AWESOME!'

first.parentNode.style.backgroundColor = 'beige';

/*
Create a <li> element using the .createElement() method and save it in a
variable called newAttraction.

On the following line, assign the newAttraction element an id of 'vespa'.

Next, assign the newAttraction element the text 'Rent a Vespa' as its inner HTML.

Lastly, append the newAttraction element to the list of top attractions with the 
ID of italy-attractions.
*/

let newAttraction = document.createElement('li');
newAttraction.id = 'vespa';
newAttraction.innerHTML = 'Rent a Vespa';

document.getElementById('italy-attractions').appendChild(newAttraction);

/*

First, save the element with the ID of vespa as a variable named elementToRemove.

The elementToRemove element is a child of the list of top attractions with the
 ID of italy-attractions.

Remove the elementToRemove element from its parent.

*/

let elementToRemove = document.getElementById('vespa');
document.getElementById('italy-attractions').removeChild(elementToRemove);


/*
Inside the turnButtonRed() function, add the code to modify 
the button stored in the element variable as follows:

Assign the .style.backgroundColor to 'red'
Assign the .style.color to 'white'
Modify the .innerHTML to 'Red Button'

Below our turnButtonRed() function definition, 
trigger the turnButtonRed() function when the element detects a click event.

*/

let element = document.querySelector('button');

element.onclick = function turnButtonRed() {
    element.style.backgroundColor = 'red';
    element.style.color = 'white';
    element.innerHTML = 'Red Button';
}

/*


Creating JS script for a game on CodeCademy


*/


let botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg';
let beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg';
let spaceDoorPath = 'https://content.codecademy.com/projects/chore-door/images/space.svg';
let closedDoorPath = 'https://content.codecademy.com/projects/chore-door/images/closed_door.svg';


let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');

let startButton = document.getElementById('start');



let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let currentlyPlaying = true;

const isClicked = (door) => {
    if (door.src === closedDoorPath) {
        return true;
    }
    else {
        return false;
    }
}

const isBot = (door) => {
    if (door.src === botDoorPath) {
        return true;
    } else {
        return false;
    }
}

const gameOver = (status) => {
    if (status === 'win') {
        startButton.innerHTML = 'You win! Play again?'
    } else {
        startButton.innerHTML = 'Game over! Play again?'
    }
    currentlyPlaying = false;
}

const playDoor = (door) => {
    numClosedDoors--;
    if (numClosedDoors === 0) {
        gameOver('win')
    }
    else if (isBot(door)) {
        gameOver()
    }
}

const randomChoreDoorGenerator = () => {
    let choreDoor = Math.floor(Math.random * numClosedDoors);
    if (choreDoor === 0) {
        openDoor1 = botDoorPath
        openDoor2 = beachDoorPath
        openDoor3 = spaceDoorPath
    } else if (choreDoor === 1) {
        openDoor1 = beachDoorPath
        openDoor2 = botDoorPath
        openDoor3 = spaceDoorPath
    }
    else if (choreDoor === 2) {
        openDoor1 = beachDoorPath
        openDoor2 = spaceDoorPath
        openDoor3 = botDoorPath
    }
}

doorImage1.onclick = () => {
    if (currentlyPlaying && isClicked(doorImage1)) {
        doorImage1.src = openDoor1;
        playDoor(doorImage1);
    }
}

doorImage2.onclick = () => {
    if (currentlyPlaying && isClicked(doorImage2)) {
        doorImage2.src = openDoor2;
        playDoor(doorImage2);
    }
}

doorImage3.onclick = () => {
    if (currentlyPlaying && isClicked(doorImage3)) {
        doorImage3.src = openDoor3;
        playDoor(doorImage3);
    }
}

startButton.onclick = () => {
    if (currentlyPlaying === false) {
        startRound();
    }
}

const startRound = () => {
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;
    numClosedDoors = 3;
    currentlyPlaying = true;
    startButton.innerHTML = 'Good Luck!';
    randomChoreDoorGenerator()
}

startRound();

//Practicing event listeners 

let readMore = document.getElementById('read-more');
let moreInfo = document.getElementById('more-info');

function showInfo() {
    moreInfo.style.display = 'block'
}

readMore.addEventListener('click', showInfo);

/* 
create a function named textChange() that changes the text in the view element to 'Hello, World!'

Next, you must create a function named textReturn() that 
changes the text of the view element variable back to 'View'.

Assign textChange as an event handler function to a click event 
fired on the view variable and run your code.

Assign textReturn as an event handler function to a
click event fired on the close variable. Then run your code and fire the events!

*/

let view = document.getElementById('view-button');
let close = document.getElementById('close-button');
let codey = document.getElementById('codey');

let open = function () {
    codey.style.display = 'block';
    close.style.display = 'block';
};

let hide = function () {
    codey.style.display = 'none';
    close.style.display = 'none';
};

view.addEventListener('click', open);
close.addEventListener('click', hide);


let textChange = function () {
    view.innerHTML = 'Hello World!'
}

view.addEventListener('click', textChange)

let textReturn = function () {
    view.innerHTML = 'View'
}

close.addEventListener('click', textReturn)


//Practicing removing event listeners

/*
Inside the showFortune() function, add a .removeEventListener() to prevent a new fortune 
from being displayed when a user tries to click the button element.
*/

let fortunes = ["A beautiful, smart, and loving person will be coming into your life.",
    "A fresh start will put you on your way.",
    "A golden egg of opportunity falls into your lap this month.",
    "A smile is your personal welcome mat.",
    "All your hard work will soon pay off."
]

let button = document.getElementById('fortuneButton');
let fortune = document.getElementById('fortune');

function fortuneSelector() {
    let randomFortune = Math.floor(Math.random() * fortunes.length);
    return fortunes[randomFortune];
}

function showFortune() {
    fortune.innerHTML = fortuneSelector();
    button.innerHTML = "Come back tomorrow!";
    button.style.cursor = "default";
    button.removeEventListener('click', showFortune)
}

button.addEventListener('click', showFortune);

/*
Working on event object properties.

First, add a statement inside the sharePhoto() 
function that will change the .display property of the event .target to 'none'.

Next, add a statement to the sharePhoto function that will modify the text element to
 state the number of milliseconds from the DOM loading to the event firing.

 Now, to create functionality for the event object, 
 assign the sharePhoto function to a click event on the share element.
*/


let social = document.getElementById('social-media');
let share = document.getElementById('share-button');
let text = document.getElementById('text');

// Write your code below
let sharePhoto = function (event) {
    event.target.style.display = 'none'
    text.innerHTML = 'This code completed in '
        + event.timeStamp + ' ms.'
}

share.addEventListener('click', sharePhoto);

/*

We made a really cool color generator to help people find different colors — try it out! Uh oh, 
it seems to be broken. We need you to use your new knowledge to fix the website.

Complete the colorChange() function, which will be used as an event handler function,
 to randomly change the colors of the buttons when specific events are fired on them.

First, add the following variable to the event handler function:

Add a statement that changes the background color of the event target and set it equal to randomColor.

There are two elements that should change color on this web page. First, 
create an event handler property on the button element that fires when it’s clicked. Use colorChange as the event handler function.
Then run your code and fire the click event.

Next, create an event handler property on the mysteryButton element. 
This property needs an event that fires when you rotate the mouse wheel or 
slide down on the mousepad. Use the MDN Events Reference page to find the correct event type. Assign the same colorChange event handler function to the event handler property.

Then run your code and fire the event.

*/


// This variable stores the "Pick a Color" button
let button = document.getElementById('color-button');

// This variable stores the "Mystery Color" button
let mysteryButton = document.getElementById('next-button');

// This random number function will create color codes for the randomColor variable
function colorValue() {
    return Math.floor(Math.random() * 256);
}

function colorChange(event) {
    let randomColor = 'rgb(' + colorValue() + ',' + colorValue() + ',' + colorValue() + ')';
    event.target.style.backgroundColor = randomColor;
}

button.addEventListener('click', colorChange);
mysteryButton.addEventListener('wheel', colorChange);

/* 

Practicing different mouse events 

First, create a function called increaseWidth() that changes 
the .width of itemOne to any size greater than '400px'

Now, create an event handler for itemOne that will 
trigger the increaseWidth() function when the mouse hovers on it.

Next, create a function called changeBackground() 
that changes the .backgroundColor of itemTwo.

Let’s use the changeBackground() function we just created as an event handler for
 itemTwo that will be triggered when the mouse is released over the element!

 Now, create a function called changeText() that changes the text of 
 itemThree to 'The mouse has left the element'.

 Create an event handler for itemThree that will
  fire changeText() function when the mouse leaves the element.


  Finally, let’s create a function called showItem() that makes 
  the itemFive element appear by changing the .display style property to 'block'.

  Now, create an event handler for itemFour that triggers 
  the showItem() function when the mouse is pressed down on the element.
*/

// These variables store the boxes on the side
let itemOne = document.getElementById('list-item-one');
let itemTwo = document.getElementById('list-item-two');
let itemThree = document.getElementById('list-item-three');
let itemFour = document.getElementById('list-item-four');
let itemFive = document.getElementById('list-item-five');
let resetButton = document.getElementById('reset-button');

// This function programs the "Reset" button to return the boxes to their default styles
let reset = function () {
    itemOne.style.width = ''
    itemTwo.style.backgroundColor = ''
    itemThree.innerHTML = 'The mouse must leave the box to change the text'
    itemFive.style.display = "none"
};
resetButton.onclick = reset;

function increaseWidth() {
    itemOne.style.width = '500px'
}

function changeBackground() {
    itemTwo.style.backgroundColor = 'green'
}

itemOne.addEventListener('mouseover', increaseWidth)

itemTwo.addEventListener('mouseup', changeBackground)

let changeText = function () {
    itemThree.innerHTML = 'The mouse has left the element'
}

itemThree.addEventListener('mouseout', changeText)

let showItem = function () {
    itemFive.style.display = 'block'
}

itemFour.addEventListener('mousedown', showItem)

/*Practicing keyboard events - keyup and keydown

First, make a function named up() that will raise the .bottom position of the ball to '250px'

Next, make a function named down() that will lower the .bottom position of the ball to '50px'.

Create an event handler property that runs the up() function when a keydown event fires on the document object,
 or anywhere on the DOM, as the event target.

 Create an event handler property that runs the down() function when a keyup event fires on the document.

*/

let ball = document.getElementById('float-circle');

// Write your code below
function up() {
    ball.style.bottom = '250px'
}

function down() {
    ball.style.bottom = '50px'
}

document.addEventListener('keydown', up)
document.addEventListener('keyup', down)

/*
Crafting an interactive project leveraging DOM events and mouse interactivity. 

*/


// The keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];
keys.forEach(function (key) {
    notes.push(document.getElementById(key));
})

// Write named functions that change the color of the keys below

const keyPlay = function (event) {
    event.target.style.backgroundColor = 'green'
}
const keyReturn = function (event) {
    event.target.style.backgroundColor = ''
}
// Write a named function with event handler properties
let eventAssignment = function (note) {
    note.onmousedown = function () {
        keyPlay(event);
    }
    note.onmouseup = function () {
        keyReturn(event);
    }
}

// Write a loop that runs the array elements through the function
notes.forEach(eventAssignment)


// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden = true;

// Write anonymous event handler property and function for the first progress button
nextOne.onclick = function () {
    nextTwo.hidden = false
    nextOne.hidden = true
    document.getElementById('letter-note-five').innerHTML = 'D'
    document.getElementById('letter-note-six').innerHTML = 'C'
}

// Write anonymous event handler property and function for the second progress button
nextTwo.onclick = function () {
    nextThree.hidden = false
    nextTwo.hidden = true
    document.getElementById('word-five').innerHTML = 'DEAR'
    document.getElementById('word-six').innerHTML = "FRI-"
    lastLyric.style.display = 'inline-block'
    document.getElementById('letter-note-three').innerHTML = 'G'
    document.getElementById('letter-note-four').innerHTML = 'E'
    document.getElementById('letter-note-five').innerHTML = 'C'
    document.getElementById('letter-note-six').innerHTML = 'B'
}

// Write anonymous event handler property and function for the third progress button

nextThree.onclick = function () {
    startOver.hidden = false
    nextThree.hidden = true
    document.getElementById('word-one').innerHTML = 'HAP-'
    document.getElementById('word-two').innerHTML = 'PY'
    document.getElementById('word-three').innerHTML = 'BIRTH'
    document.getElementById('word-four').innerHTML = 'DAY'
    document.getElementById('word-five').innerHTML = 'TO'
    document.getElementById('word-six').innerHTML = 'YOU!'
    document.getElementById('letter-note-one').innerHTML = 'F'
    document.getElementById('letter-note-two').innerHTML = 'F'
    document.getElementById('letter-note-three').innerHTML = 'E'
    document.getElementById('letter-note-four').innerHTML = 'C'
    document.getElementById('letter-note-five').innerHTML = 'D'
    document.getElementById('letter-note-six').innerHTML = 'C'
    lastLyric.style.display = 'none'
}


// This is the event handler property and function for the startOver button
startOver.onclick = function () {
    nextOne.hidden = false;
    startOver.hidden = true;
    document.getElementById('word-one').innerHTML = 'HAP-';
    document.getElementById('letter-note-one').innerHTML = 'G';
    document.getElementById('word-two').innerHTML = 'PY';
    document.getElementById('letter-note-two').innerHTML = 'G';
    document.getElementById('word-three').innerHTML = 'BIRTH-';
    document.getElementById('letter-note-three').innerHTML = 'A';
    document.getElementById('word-four').innerHTML = 'DAY';
    document.getElementById('letter-note-four').innerHTML = 'G';
    document.getElementById('word-five').innerHTML = 'TO';
    document.getElementById('letter-note-five').innerHTML = 'C';
    document.getElementById('word-six').innerHTML = 'YOU!';
    document.getElementById('letter-note-six').innerHTML = 'B';
}

/*
Practicing Handlebars Templating 
 
Start by creating your Handlebars template in index.html. 
Under the opening <head> tag, create a <script> element.
 Give the script element an attribute of id with a value of 'greet'. 
 Then, add another attribute, type to the same script, and assign type a value of 'text/x-handlebars-template'.
 
The id will allow you to select the HTML inside the script 
and the type determines that it is going to be used by the Handlebars object.
 
 
In the <script> element you just made, add a Handlebars expression with greeting inside the expression.
 
Now navigate to your main.js file. You want to access the HTML
 stored in the <script id="greet" type="text/x-handlebars-template"> element to later make a Handlebars template:
 
Access document.getElementById('greet').innerHTML and assign it to a const variable source.
 
 
source is a string that contains the raw HTML, but you want to be able to replace the Handlebars expressions with actual values. 
Sounds like you need a function to replace the Handlebars expressions in the HTML.
 
Call Handlebars.compile() with source and save the returned value in a template using const. 
template is a function that when passed an object returns a completed/compiled template in a string.
 
 
Create a context object to hold values for filling out the Handlebars template.
 
Create an object context and save it as a const variable.
 Add a key of greeting with the value 'Hello World!'
 
 To replace the Handlebars expressions with the values in context, 
 call template() with an argument of context and save the value to a const variable compiledHtml.
 
 Now you have to select the element that will contain the templated HTML.
 
Create a variable named fill using the const keyword and assign it document.getElementById('hello')
 
It’s time to add the compiled template HTML to the web page.
 
Assign compiledHtml to fill‘s innerHTML property.
 
Once you pass the checkpoint, the browser will render ‘Hello World!’.
 
*/

const source = document.getElementById('greet').innerHTML;

const template = Handlebars.compile(source);

const context = {
    greeting: 'Hello World!'
}

const compiledHtml = template(context)

const fill = document.getElementById('hello');

fill.innerHTML = compiledHtml;

// More handlebars practice using the {{if}} helper 

/*
In the index.html file, locate the <script> that has an id of 'ifHelper'.
 Inside the located <script> element, add an {{if}} helper block. 
 Provide an argument of opinion to the opening {{if}} expression.


Inside the {{if}} block, add an opening and closing <p> tag. 
Inside the created <p> add in the text (with the quotation marks): 
"The correct way to say 'GIF' is GIF!".

This template will now include a <p> element that says 
"The correct way to say 'GIF' is GIF!" if opinion is truthy.

Go to main.js. Some of the boilerplate code has been provided for you. 
However, you still have to create the object that you want to pass into template.

In a line below template, declare a variable named context using the keyword const. 
Then, assign to context an object that has a property of opinion and a value of true.

Finally, in the last line of main.js, assign debateElement‘s .innerHTML property the value of compiledHtml.

Run the code and you should see some text appear on the browser!

*/

/*

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>GIF!</title>
    <script src="handlebars.min.js"></script>
        <link rel="stylesheet" type="text/css" href="public/style.css">
    <!-- Add an {{if}} helper block in the script element below-->
      <script id="ifHelper" type="text/x-handlebars-template">
 {{#if opinion}}
 <p>"The correct way to say 'GIF' is GIF!"</p>
 {{/if}}
    </script>    
  </head>
  <body>
    <div class="bg">
      <img class="bg-convo" src="https://content.codecademy.com/courses/learn-handlebars/handlebars%20if.svg">
    </div>
    <div id="debate">
    </div>
  </body>
  <script src="public/main.js" type="text/javascript"></script>
</html>

*/

const source = document.getElementById('ifHelper').innerHTML;
const template = Handlebars.compile(source);

const context = {
    opinion: true
}
const compiledHtml = template(context);

const debateElement = document.getElementById('debate');

debateElement.innerHTML = compiledHtml;

//Practicing if else with handlebars

<script id="ifHelper" type="text/x-handlebars-template">
    {{ #if opinion }}
    <p>"The correct way to say GIF is GIF!"</p>
    {{ else}}<p>"There's no right way to say GIF!'"</p>
    {{/if}}
</script> 
