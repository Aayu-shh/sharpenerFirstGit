// // console.dir(document);

// //Examine the Document Object
// //Changing HTML page from DOM using JavaScript
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //console.log(document.title=123);
// console.log(document.doctype);
// console.log(document.head);

// console.log(document.all);
// //console.log(document.all[10].textContent="Hello");          //Changes Header InnerText-Not recommended coz does based on index which can change if something added before

// console.log(document.forms);

//Element Selectors


  // GetElementByID

var headerTitle = (document.getElementById('header-title'));            //title text comes INSIDE header
var header = (document.getElementById('main-header'));

console.log(headerTitle.innerText);

//console.log(headerTitle);               //logs header node element

// headerTitle.textContent = "Hello";                      //Changes Header
// headerTitle.innerText = "Goodbye";

//console.log(headerTitle.textContent);                  //Logs 123 even when its not displacyed due to styling
//console.log(headerTitle.innerText);                 //SeeConsole logs -- Considers Style in Span and doesnt log 123

//headerTitle.innerHTML = "<h3> Hello InnerHTML</h3>"

header.style.borderBottom = "solid 3px #000"            //Border on the bottom of the headers


//2 GetElementsbyClassName

//NOTE : Method NAMEs are case sensitive - camel case only


// var items = document.getElementsByClassName('list-group-item');     // multiElement Selector

// console.log(items);
// console.log(items[1].textContent="Hello");          //change + log 2nd Item 

// //items[1].style.fontWeight = 'bold';
// items[2].style.backgroundColor = 'green';           //task4 additions


// //Giver ERROR
// //items.style.backgroundColor = 'yellow';             //Doesnt work  -- An HTML Collection deosnt have STYLE

// for(var i = 0;i < items.length;i++){
//     items[i].style.fontWeight='bold';               //Task4 Additions
// }


//3 GetElementsByTagName

//Note: fetches last li tag (class != list-group-item) and changes apply to EVEN last li tag 

// var li = document.getElementsByTagName('li');     // multiElement Selector
// console.log(li);
// console.log(li[1].textContent = "Hello");          //change + log 2nd Item 

// li[2].style.backgroundColor = 'green';           //task4 additions


// //Giver ERROR
// //items.style.backgroundColor = 'yellow';             //Doesnt work  -- An HTML Collection deosnt have STYLE

// for (var i = 0; i < li.length; i++) {
//   li[i].style.fontWeight = 'bold';               //Task4 Additions
// }


//4 querySelector

//NOTE: Only Grabs the first one

// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector("input");
// input.value = 'Hello World';

// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND";

// var item = document.querySelector('.list-group-item');      //class .
// item.style.color = 'red';

// var lastItem  = document.querySelector('.list-group-item:last-child');
// lastItem.style.color='blue';


// //TASK6 - Solutions Here  \|/
// var secondItem = document.querySelector('.list-group-item:nth-child(2)');     //nth-child(index) - psudeo selector
// secondItem.style.color = 'green';

// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');     //nth-child(index) - psudeo selector
// thirdItem.style.color = 'white';


// Task6 Part 2

//querySelectorAll

// var titles = document.querySelectorAll('.title');
// console.log(titles);      //Gives the node list of TITLES  - traversable

// titles[0].textContent='Hello';

// //Alternating   

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for(var i=0;i<odd.length;i++)
// {
//   odd[i].style.backgroundColor = "#f4f4f4";   //lighter grey
//   even[i].style.backgroundColor = "#ccc";      //Darker Grey
// }

//Traversing  the DOM - JS DOM cracsh course Part2   //

var itemList = document.querySelector('#items');

//parentNode
//console.log(itemList.parentNode);     //on higher syntax

// itemList.parentNode.style.backgroundColor = '#f4f4f4';    //lightGrey

// console.log(itemList.parentNode.parentNode.parentNode);

////Parent Element ////
//console.log(itemList.parentElement);

// itemList.parentElement.style.backgroundColor = '#f4f4f4';    //lightGrey

// console.log(itemList.parentElement.parentElement.parentElement);


//Child Nodes//

//console.log(itemList.childNodes);     //NodeList -- Basically an Array -- includes LineBreak Elements
//console.log(itemList.childNodes);
// console.log(itemList.children);
// itemList.children[1].style.backgroundColor='yellow';

// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "Hello 1";

// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = "Hello 5";

//Next Sibling
console.log(itemList.nextSibling);

//Next Element Sibling
console.log(itemList.nextElementSibling);   //No next siblng , adding <span> for it to return <span>

//Previous SIbling
console.log(itemList.previousSibling);

console.log(itemList.previousElementSibling);

//create element
var newDiv = document.createElement('div');
//add class
newDiv.className = 'hello';
//add id
newDiv.id='hello1';

//Add Attribute
newDiv.setAttribute('title','Hello Div');

//Create text node
var newDivText = document.createTextNode('Hello World');

//Add text to DIV
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

container.insertBefore(newDiv,h1);
console.log(newDiv);

newDiv.style.fontFamily = 'monotype corsiva';