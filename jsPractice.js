
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