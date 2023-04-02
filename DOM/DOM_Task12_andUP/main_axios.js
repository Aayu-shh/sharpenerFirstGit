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

        axios.post("https://crudcrud.com/api/28f35207949c4cf7bacc37854ed7da12/appointments",user).then(res=>showOutputPost(res));
        //clear Fields
        named.value = '';
        email.value = '';
        phone.value = '';
    }
}
function onloaded(e) {
    axios.get("https://crudcrud.com/api/28f35207949c4cf7bacc37854ed7da12/appointments").then(resp => {
        showOutputGet(resp);            //Show arrau of user objects
    });
}

function showOutputPost(res){
    let li = document.createElement('li');
    li.append(document.createTextNode(`${(res.data.name)} : ${(res.data.email)} : ${(res.data.phone)}`))
    let delBtn=document.createElement('button');
    delBtn.append(document.createTextNode("Delete User"));
    let editBtn = document.createElement('button');
    editBtn.append(document.createTextNode("Edit User"));

    editBtn.onclick = () => {
            named.value = res.data.name;
            email.value = res.data.email;
            phone.value = res.data.phone;
            axios.delete(`https://crudcrud.com/api/28f35207949c4cf7bacc37854ed7da12/appointments/${res.data._id}`)
            .then((editRes)=>{
                console.log(`Editing User ${ named.value }'s Details`);
                li.remove();
            })
            .catch(err=>console.log('Failed to edit the details'+err))
    }

    delBtn.onclick = () => {
        let userName=res.data.name;
        axios.delete(`https://crudcrud.com/api/28f35207949c4cf7bacc37854ed7da12/appointments/${res.data._id}`)
            .then(res => {
                console.log(`${userName}'s data was deleted sucessfully`);
                li.remove();
            }).catch(err => console.log("Failed to delete User", err));

    }

    li.append(editBtn);
    li.append(delBtn);
    itemList.append(li);
    
    console.log(res);
    };

function showOutputGet(resObj){
    (resObj.data).forEach((res)=>
    {
        let userName = res.name;
        let li1 = document.createElement('li');
        li1.append(document.createTextNode(`${(res.name)} : ${(res.email)} : ${(res.phone)}`))
        let delBtn = document.createElement('button');
        delBtn.append(document.createTextNode("Delete User"));

        let editBtn = document.createElement('button');
        editBtn.append(document.createTextNode("Edit User"));

        editBtn.onclick = () => {
            axios(`https://crudcrud.com/api/28f35207949c4cf7bacc37854ed7da12/appointments/${res._id}`).then((res)=>{
                named.value=res.data.name;
                email.value=res.data.email;
                phone.value=res.data.phone;
                axios.delete(`https://crudcrud.com/api/28f35207949c4cf7bacc37854ed7da12/appointments/${res.data._id}`)
                .then((editRes)=>{
                    console.log(`Editing User ${named.value}'s Details`);
                    li1.remove();
                })
                
            })
            .catch(err => console.log('Failed to edit the details' +err))
        }
        
        delBtn.onclick=() => {
            axios.delete(`https://crudcrud.com/api/28f35207949c4cf7bacc37854ed7da12/appointments/${res._id}`)
            .then(res=>{
                console.log(`${userName}'s data was deleted sucessfully`);
                li1.remove();
            }).catch(err=>console.log("Failed to delete User",err));
            
        }

        li1.append(editBtn);
        li1.append(delBtn);
        itemList.append(li1);
    })

    console.log(resObj.data);       //Array of User Objects
}



// //SetTimeout + Delay, Example
// console.log('a')
// console.log('b')
// new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve('c'),3000)
// })
// .then(data=>{
//     console.log(data);
//     new Promise((resolve, reject) => {
//         setTimeout(() => resolve('d'), 1000)
//     })
//         .then(data => {
//             console.log(data);
//             console.log('e')
//         })
// })


