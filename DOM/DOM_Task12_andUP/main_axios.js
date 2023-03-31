const myForm = document.querySelector("#myForm");
const named = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const msg = document.querySelector(".msg");
const lMsg = document.querySelector(".listMsg");
const itemList = document.querySelector(".items");

myForm.addEventListener('submit', onSubmit);
window.addEventListener("DOMContentLoaded", onloaded)

function onSubmit(e) {
    e.preventDefault();
    if (named.value == "" || email.value == "" || phone.value == "") {
        msg.style.color = 'red';
        msg.textContent = 'Please fill all the details!';

        setTimeout(() => msg.remove(), 5000);
    }
    else {
        let user = {
            name: e.target.name.value,               //Tryinng stuff 
            email: email.value,
            phone: phone.value
        };

        axios.post("https://crudcrud.com/api/9bd42fcdd4f44a26af8ca021bf23dfd0/appointments",user).then(res=>showOutput(res))
        //clear Fields
        named.value = '';
        email.value = '';
        phone.value = '';
    }
}
function showOutput(res){
    itemList.innerHTML += `<li>${(res.data.name)} : ${(res.data.email)} : ${(res.data.phone)} <button class='edit'>Edit</button> <button class='del'>Delete</button>`;
    console.log(res);

    };

// function showOutputGet(resObj){
//     (resObj.data).forEach((res)=>
//     {
//         itemList.innerHTML += `<li>${(res.name)} : ${(res.email)} : ${(res.phone)} <button class='edit'>Edit</button> <button class='del'>Delete</button>`;
//     })
//     console.log(resObj.data);
// }
