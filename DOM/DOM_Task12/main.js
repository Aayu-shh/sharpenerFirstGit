const myForm = document.querySelector("#myForm");
const named = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const msg = document.querySelector(".msg");
const itemList = document.querySelector(".items");
// localStorage.clear();

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
        itemList.appendChild(li);

        let user ={
            name:named.value,
            email:email.value,
            phone:phone.value
        };
        let user_serialize=JSON.stringify(user);
        localStorage.setItem(user.email,user_serialize);
        console.log(JSON.parse(user_serialize));

        //clear Fields
        named.value='';
        email.value = '';
        phone.value = '';

    }
}