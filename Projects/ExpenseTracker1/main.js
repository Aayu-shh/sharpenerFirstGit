//Fetch Nodes

const myForm = document.querySelector("#my-expense-form");
const amt = document.querySelector("#amount");
const desc= document.querySelector("#description");
const exType = document.querySelector("#expenseType");
const subBtn = document.querySelector(".btn-dark");

//console.log(subBtn);

document.addEventListener('submit',onSubmit);

function onSubmit(e){

    const deets = `${amt.value} - ${desc.value} - ${exType.value}`;
    const expense={
        amount:amt.value,
        desc:desc.value,
        exType:exType.value
    };

    e.preventDefault();
    const ul = document.querySelector(".items");
    const li = document.createElement("li");
    
    //Buttons
    const editBtn = document.createElement("button");
    editBtn.classList="btn btn-primary mx-2";
    editBtn.appendChild(document.createTextNode("Edit Expense"));

    const delBtn = document.createElement("button");
    delBtn.classList = "btn btn-danger mx-2"
    delBtn.appendChild(document.createTextNode("Delete Expense"));

    //Each List Item ppended with vlues and Buttons
    li.append(document.createTextNode(deets));
    li.append(editBtn);
    li.append(delBtn);

    localStorage.setItem(`Item${exType.value}_${amt.value}`,deets);
    ul.append(li);
    
    let key=(`Item${exType.value}_${amt.value}`);           //Coz Item${key} gets changed inside funtion delBtn
    //console.log(deets);

    delBtn.addEventListener('click',onDel);
    function onDel(e){
        e.preventDefault();
        localStorage.removeItem(key);
        //console.log(li);      //Check
        ul.removeChild(li);
    }

    editBtn.addEventListener('click', onEdit);
    function onEdit(e) {
        e.preventDefault();
        localStorage.removeItem(key);
        ul.removeChild(li);
        amt.value=expense.amount;
        desc.value=expense.desc;
        exType.value=expense.exType;
    }
    //Clear Feilds after use
    amt.value = "";
    desc.value = "";
    exType.value = "";
}
localStorage.clear();


//console.log(myForm);