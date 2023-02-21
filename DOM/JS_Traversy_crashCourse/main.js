// // // console.log(window);

// // // //console.log(document.getElementById('my-form'));
// // // console.log(document.querySelectorAll('.item'));
// // // const items = document.querySelectorAll('.item');
// // // items.forEach((item)=>{console.log(item)});

// // // console.log(document.getElementsByClassName('item')); //Collection , non-traversable

// // const ul = document.querySelector('.items');

// // // ul.lastElementChild.remove();       //remove item1
// // // ul.firstElementChild.remove();      //remove item3

// // //////////////////////

// // // ul.firstElementChild.textContent = 'Hello';
// // // ul.children[1].innerText='Brad';

// // // ul.lastElementChild.innerHTML = '<h1>Header</h1>';


// // // const btn = document.querySelector('.btn');
// // // btn.style.background='blue';


// // ////**********//////////////////************/////////////


// // const btn = document.querySelector('.btn');


// // //Events - Click, Hover(mouseOVer), InputEvents -- MDN docs for more deeets
// // btn.addEventListener('click',(e)=>{
// //     e. Default();
// //     document.querySelector('#my-form').style.background = '#ccc';   //changes form color to DARKER grey on CLICK
// //     document.querySelector('body').classList.add('bg-dark');
    
// //     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Heeeellloo</h1>';




    
// //     console.log(e.target.className);                //Details of Event ie Submit button Printed, //here btn class NAme
// // });

// const myForm = document.querySelector('#my-form');
// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');
// const msg = document.querySelector('.msg');
// const userList = document.querySelector('.items');

// //myForm.addEventListener('submit',onSubmit);

// // function onSubmit(e){
//     // e.preventDefault();
//     // //Form Validation - putting condition to submit form
    
//     // if(nameInput.value == ''|| emailInput.value=='')
//     // {
//     //     //alert('Please enter both Fields!');           LOOKS Ugly 
//     //     msg.classList.add('error');                     //error - CSS style added RED BG

//     //     msg.innerHTML = 'Please Enter All Fields';      //Comes inside FORM in msg division
        
//     //     setTimeout(() => { msg.remove()}, 3000);            //1st Param - Function ;; 2nd Param -- 3000ms = 3Secs  // MSG disappears in 3 seconds

//     // }
//     // else{
//     //     const li = document.createElement('li');
//     //     li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
//     //     userList.appendChild(li);

//     //     //Clear Fields
//     //     nameInput.value='';
//     //     emailInput.value='';
    
//     // }
// //}

// // const items = document.querySelectorAll('.item');

// // items.forEach((item)=>console.log(item));

// const ul = document.querySelector('.items');

// ul.firstElementChild.innerHTML = "<h1>Hello</h1>"
// ul.lastElementChild.style.color = "red";

// const btn = document.querySelector('.btn');
// btn.addEventListener('mouseover',(e) =>{                //mouseover mouseout click - events 
//     e.preventDefault();
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('#my-form').style.background='#ccc';
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
// });

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');          //#name id
const emailInput = document.querySelector('#email');        //#email id
const msg = document.querySelector('.msg');                 //msg class DIV
const userList = document.querySelector('#users');      //empty ul
var counter = 0;                //userInLocalStorageCounter

myForm.addEventListener('submit',onSubmit);

function onSubmit(e){
    e.preventDefault();

    //Show msg on top of name (DIV ) when both inputs arent full

    if(nameInput.value==''||emailInput.value=='')
    {
        msg.style.color = 'red';
        msg.textContent = 'Please Enter all fields'; //OR msg.innerHTML

        setTimeout(()=>msg.remove(),2000);
    }
    else{
        counter++;
        //add the input pair as List Item 
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);
        
        //DOM Task10 Adding to local storage
        //localStorage.setItem(nameInput.value,emailInput.value);

        //Task 11 Adding to Local Storage as an Object
        let user = {
            name : nameInput.value,
            email : emailInput.value
        };

        let user_serialized = JSON.stringify(user);
        localStorage.setItem(`user ${counter}`,user_serialized);
        console.log(JSON.parse(user_serialized));

        //clearInputField After Submit
        nameInput.value = '';
        emailInput.value = '';
        
    }
}

/////Storage Local Session Cookies  //

// localStorage.setItem('name','Aashu');
// console.log(localStorage.getItem('name'));

// //localStorage.removeItem('name');
// sessionStorage.setItem('name','Aayush');
// sessionStorage.removeItem('name1');

// document.cookie = 'name=Aayusshhhh; expires=' + new Date(9999,0,1).toUTCString();
// document.cookie = 'lastName=Agrawal; expires=' + new Date(9999,9,9).toUTCString();

// console.log(document.cookie);

//  ***RUN once to clear-up everything
//localStorage.clear();