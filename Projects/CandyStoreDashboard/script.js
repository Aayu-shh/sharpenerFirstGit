//Inputs 
const price = document.querySelector('#price');
const quantity = document.querySelector('#quant');
const name = document.querySelector('#name');
const desc = document.querySelector('#desc');
//ul
const candies = document.querySelector("#candyList")


//OnSubmit 
document.addEventListener("submit", (e) => {
    e.preventDefault();
    let candyObj = {
        price: price.value,
        quantity:quantity.value,
        name: name.value,
        desc: desc.value
    };

    //Saving Just taken Orders onSubmit
    let id;             //For Delete use purposes

    axios.post(("https://crudcrud.com/api/0381a1b46eb448f69d10a3317551f296/orders"), candyObj)
        .then(res => {
            console.log(res.data);
            id = res.data._id
            displayOnWindow(candyObj,id);
        });
    // Display on Window
    //console.log(id)
})
document.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault();
    axios.get("https://crudcrud.com/api/0381a1b46eb448f69d10a3317551f296/orders")
        .then(res => displayOnLoad(res.data));
})

function displayOnLoad(resp){
    resp.forEach((candyObj) => {
        displayOnWindow(candyObj, candyObj._id);
    })

}
function displayOnWindow(candyObj,id){
    //console.log(id)
    let candyItem = document.createElement("li");
    candyItem.append(
        document.createTextNode(
            `${candyObj.name}-${candyObj.desc}-${candyObj.price}Rs = > `));

    let quantityNode = document.createTextNode(`${ candyObj.quantity }`)
    candyItem.appendChild(quantityNode);

    buyOneBtn = document.createElement("button");
    buyTwoBtn = document.createElement("button");
    buyThreeBtn = document.createElement("button");

    buyOneBtn.innerText = "Buy One"
    buyTwoBtn.innerText = "Buy Two"
    buyThreeBtn.innerText = "Buy Three"
    candyItem.append(buyOneBtn, buyTwoBtn, buyThreeBtn);
    candies.appendChild(candyItem);
    
    //To ue PUT method W/O id in the object - Else 500 Internal server ERROR is thrown
    let localCandyObj = {
        price: candyObj.price,
        quantity: candyObj.quantity,
        name: candyObj.name,
        desc: candyObj.desc
    }
    
    buyOneBtn.onclick=()=>{
        console.log(candyObj);
        if (localCandyObj.quantity>0){
        localCandyObj.quantity--;

        axios.put(`https://crudcrud.com/api/0381a1b46eb448f69d10a3317551f296/orders/${id}`, localCandyObj)
            .then(res => console.log("One candy reduced for", localCandyObj.name));

        candyItem.removeChild(quantityNode);
        quantityNode = document.createTextNode(`${localCandyObj.quantity}`);

        candyItem.insertBefore(quantityNode, candyItem.children[0]);
        }
        else 
            {
                candyItem.append("          --- Candy Finished")
            }
    }
    buyTwoBtn.onclick = () => {
        if (localCandyObj.quantity > 0) {
        localCandyObj.quantity = localCandyObj.quantity-2 ;
        axios.put(`https://crudcrud.com/api/0381a1b46eb448f69d10a3317551f296/orders/${id}`, localCandyObj)
            .then(res => console.log("Two candy reduced for", localCandyObj.name));

        candyItem.removeChild(quantityNode);
        quantityNode = document.createTextNode(`${localCandyObj.quantity}`);
        
        candyItem.insertBefore(quantityNode, candyItem.children[0]);
        }
        else
        {
            candyItem.append("          --- Candy Finished")
        }
        
    }
    buyThreeBtn.onclick = () => {
        if (localCandyObj.quantity > 0) {
        localCandyObj.quantity = localCandyObj.quantity-3;
        axios.put(`https://crudcrud.com/api/0381a1b46eb448f69d10a3317551f296/orders/${id}`, localCandyObj)
            .then(res => console.log("Three candy reduced for", localCandyObj.name));

        candyItem.removeChild(quantityNode);
        quantityNode = document.createTextNode(`${localCandyObj.quantity}`);
        candyItem.insertBefore(quantityNode, candyItem.children[0]);
        }
        else 
        {
            candyItem.append("          --- Candy Finished")
        }
        
    }
}

    




/*
Doubts:-

Line30 - id shows 'undefined'
*/
