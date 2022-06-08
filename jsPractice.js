
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
