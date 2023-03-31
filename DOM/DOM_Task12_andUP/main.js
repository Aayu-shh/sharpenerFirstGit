//Stores in Local Storage

const myForm = document.querySelector("#myForm");
const named = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const msg = document.querySelector(".msg");
const lMsg = document.querySelector(".listMsg");
const itemList = document.querySelector(".items");
//localStorage.clear();

myForm.addEventListener('submit',onSubmit);

function onSubmit(e){
    e.preventDefault();
    if(named.value==""||email.value==""||phone.value==""){
        msg.style.color = 'red';
        msg.textContent = 'Please fill all the details!';

        setTimeout(()=>msg.remove(),5000);
    }
    else{
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(`${named.value} : ${email.value} : ${phone.value}\n`));
        
        //Edit Button
        const editBtn = document.createElement('button');
        editBtn.appendChild(document.createTextNode('Edit'));
        li.appendChild(editBtn);
        
        //Delete Button
        var delBtn = document.createElement('button');
        delBtn.appendChild(document.createTextNode("DELETE"));
        li.appendChild(delBtn);     //Child of ul

        //Append new 'li' to ul
        itemList.appendChild(li);   
        
        let user ={
            name:e.target.name.value,               //Tryinng stuff 
            email:email.value,
            phone:phone.value
        };
        //let user_serialize=JSON.stringify(user);   Converting object into string
        localStorage.setItem(user.email, `${named.value} : ${email.value} : ${phone.value}\n`);
        //console.log(JSON.parse(user_serialize));

        //clear Fields
        named.value = '';
        email.value = '';
        phone.value = '';

        //On click Event on DeleteButton to Remove Item from Screen and LocalStorage
        delBtn.onclick =()=>
        {
            //e.preventDefault();
            localStorage.removeItem(user.email);
            //var li = e.target.parentElement;
            itemList.removeChild(li);
        }

        editBtn.onclick = () =>{
            localStorage.removeItem(user.email);        //email is the key
            named.value = user.name;
            email.value = user.email;
            phone.value = user.phone;
            itemList.removeChild(li);
        };
    }
}

window.addEventListener("DOMContentLoaded",onloaded)
function onloaded(e){
    e.preventDefault();
    let localobj = localStorage;
    let localKeys = Object.keys(localobj);
    
    let li = document.createElement("li");
    
    //LoadOnScreen from Local
    localKeys.forEach(key=>{
        li.appendChild(document.createTextNode(localobj[key]));
        
        //Adding buttons Edit Button
        const editBtn = document.createElement('button');
        editBtn.appendChild(document.createTextNode('Edit'));
        li.appendChild(editBtn);

        //Delete Button
        var delBtn = document.createElement('button');
        delBtn.appendChild(document.createTextNode("DELETE"));
        li.appendChild(delBtn);     //Child of ul
       
        /*
        //Adding functionalities to buttons
        delBtn.onclick = () => {
            //e.preventDefault();
            localStorage.removeItem(key);
            //var li = e.target.parentElement;
            itemList.removeChild(li);
        }

        editBtn.onclick = () => {
            localStorage.removeItem(key);        //email is the key
            named.value = user.name;
            email.value = user.email;
            phone.value = user.phone;
            itemList.removeChild(li);
        }
*/
        itemList.appendChild(li);
        li = document.createElement("li");          //New li
    });
}
//Hoisting : CallStack Global and Local Execution COntext
// console.log(x1);

// console.log(getName); //undefined ACTs like Variable  TYPE ERROR if function is invoked here
// var x1=7;
// var getName = function(namerr){
//     return('Namaste from JavaScript '+namerr);
// }
// console.log(getName("Aayush"));         //Acts like a function

// console.log('a');

// console.log('b');


// setTimeout(() => console.log('c'), 1000);

// setTimeout(()=>console.log('d'),10000);
// console.log('e');

// let new_arr = [1,5,9,2,8,3];
// let new_arr_out=new_arr.map((element,index)=>{      //forEach returns undefined //map returns value
//     console.log("Element = "+element+"Index"+index);
//     //return (element%2==0?element*2:undefined);
// })
// console.log(new_arr_out);

// var a = 5;
// console.log(a);
// {
//     let a=10;
//     console.log(a);
// }
// console.log(a);
// var a = 50;


// function fun() {

//     var a = 30;

//     let b = 20;

//     let c = 30;

// }

// fun();

// console.log(a);
// const a = 10;
// {
//     var a = 100;
// }
// console.log(a)

// function x(){
//     var a=7;
//     function y(){
//         console.log(a+" inside function y");
//     }
//     return y;
// }
// var z = x();
// z();

// var obj = {

//     val: 100

// }

// function fun(a, b, c) {

//     console.log(this.val + a + b + c)

// }

// const fun2 = fun.bind(obj)


// fun2(1, 2, 3)

//////////////////////////////////////////////////////////////////////////////////////////////Question
/*
for(var i=1;i<=5;i++)
{
    setTimeout(()=>console.log(i),i*1000);          //prints 6 6 6 6 6      ==>> !!!Issue
}
*/

/*
//Fixing issue of logging i with same reference to i 
for (let i = 1; i <= 5; i++) {
    setTimeout(() => console.log(i), i * 1000);
}

//Fix2 Using Closures
for (var i = 1; i <= 5; i++) {
    function close(x)
    {
    setTimeout(() => console.log(x), x * 1000);
    }
    close(i);
}

function y() {
    setTimeout(() => console.log("a"), 0)
    console.log('Done Coding')
}

y();*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//OMaiGaadd!!Use Closures to print different Otputs for same code!!!
/*
const name1 = (arr) => {
    let runs=0;
    function inner(){       //basically function fun() with above variable
        console.log(arr[runs++]);
    }
    return inner;
}

let fun = name1(["Ram", "Shyam"]);
fun()// Print Hello Ram
fun()//print Hello Shyam
*/

// a();
// b();
// var b=()=>{
//     console.log("inside b");
// }

// var b = ()=>{
//     console.log(xyz);
// }
// b(xyz);
// //Hosited xyz - called before declaration
// var c= function xyz(){
//     console.log("Hi I'm inside xyz funtion!");
// }

// function fun1() {
//     console.log('a')
//     return () => {
//         console.log('b')
//     }
// }
// console.log(fun1())

//
// function fun1(a) {
//     const fun2 = (b) => {
//         a = a + b;
//         console.log(a);
//     }
// }
// fun1(10);

//////////////////////// EventListnersQuickie
/*
let counter=0;
document.getElementById("clickMe").addEventListener("click",function xyz(){
console.log("button clicked",++counter);
});
*/

/////////////////CallBack =functions setTimeout - Async Tasks
/*setTimeout(() => console.log('timer1 expired'), 1000);
setTimeout(() => console.log('timer2 expired'), 0);
function x(y) {
    console.log('inside x');
    y();
}
x(function y() {
    setTimeout(() => console.log('inside y'), 0);
})
*/


// var functionExpression=function xm(){
//     return("This is a function expression stored in a variable");
// }
// console.log(functionExpression);

/////////////////////Fat Arrow ES6

///Main Problem that , rather 'this' fat arrow solves
/*
var x = function(){
    this.val=1;
    let that=this;
    // console.log(this);
    setTimeout(()=>{
        // console.log(this);
        console.log(++this.val);
    },10);
}
var Xn = new x();
*/


///////////////Currying in JS
/*
function outer(x)
{
    return (function(y){
        console.log(x+y);
    })
}
const out = outer(5);
out(9);
*/

/////////////////////Student class
/*
class Student {
    constructor(name, age, marks) {
        this.name = name;
        this.age = age;
        this.marks = marks;
        console.log(this,name,age,marks);
    }
    setPlacementAge(minPlacementAge) {
        //return a function which takes in argument -> minMarks
        //returns true if students marks are gretaer than minMarks and age gretaer than minPlacementAge
        //Complete this function only. Do not alter any other thing.
    }
}
const s1= new Student("Aayush",25,98);
*/

// var x = 2;

// let obj =
// {
//     x:4,
//     fun:()=>{
//     console.log(this.x)
//     },
//     fun2(){
//         console.log(this);
//     }
// };
// obj.fun();
// obj.fun2();

///////// WEB APIs CallbackQueue EvntLoop- DOM API - holds document.getElemByID/class etc

//document.getElementById("clickMe").addEventListener("click",()=>console.log("CallBack"));

///////////////////////////////////////////////////////////SPREAD operator 
/*const arr1 = [1,2,3];
const arr2 = [3,4,5];
const arr3 = [...arr1,...arr2];
console.log(arr3); */

/////////////////
// var a = 50;


// function fun() {

//     var a = 30;

//     let b = 20;

//     let c = 30;

// }

// fun();

// console.log(a);