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


//2 GetElementbyClassName

var items = document.getElementsByClassName('list-group-item');     // multiElement Selector
console.log(items);
console.log(items[1].textContent="Hello");          //change + log 2nd Item 

//items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'green';              //NOTE : Method NAMEs are case sensitive - camel case only

//Giver ERROR
//items.style.backgroundColor = 'yellow';             //Doesnt work  -- An HTML Collection deosnt have STYLE


for(var i = 0;i < items.length;i++){
    items[i].style.fontWeight='bold';               //Overrrides Item2 BgColor
}
