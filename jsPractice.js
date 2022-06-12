
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