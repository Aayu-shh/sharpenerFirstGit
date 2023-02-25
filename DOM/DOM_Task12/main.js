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

        itemList.appendChild(li);   //Append li to ul
        
        let user ={
            name:named.value,
            email:email.value,
            phone:phone.value
        };
        let user_serialize=JSON.stringify(user);
        localStorage.setItem(user.email,user_serialize);
        //console.log(JSON.parse(user_serialize));

        //clear Fields
        named.value = '';
        email.value = '';
        phone.value = '';

        //On click Event on DeleteButton to Remove Item from Screen and LocalStorage
        delBtn.addEventListener('click', onClick);
        
        function onClick(e)
        {
            e.preventDefault();
            localStorage.removeItem(user.email);
            var li = e.target.parentElement;
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