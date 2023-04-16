//https://meet.google.com/jjd-idtx-wem  --Tuesday 7PM


//Inputs 
const price = document.querySelector('#price');
const quantity = document.querySelector('#quant');
const name = document.querySelector('#name');
const desc = document.querySelector('#desc');
//ul
const candies = document.querySelector("#candyList")



//-------OnSubmit 
document.addEventListener("submit", async (e) => {
    e.preventDefault();
    try 
    {

        let candyObj = {
            price: price.value,
            quantity:quantity.value,
            name: name.value,
            desc: desc.value
        };

        //Saving New Candy Details     
        let responseObj = await axios.post(("https://crudcrud.com/api/e96c3c6ba6e44bb0859f5b6f744fcce9/orders"), candyObj);
        let id = responseObj.data._id;
        
        console.log(responseObj);
        displayOnWindow(candyObj,id);
    
    }

    catch(e){
        console.log(e)
    }

});


//------OnWindowLoaded
document.addEventListener("DOMContentLoaded", async (e) => {
    e.preventDefault();
    try{
    
    let responseObj = await axios.get("https://crudcrud.com/api/e96c3c6ba6e44bb0859f5b6f744fcce9/orders")
    displayOnLoad(responseObj.data);

    }
    catch(e){
    
        console.log(e);
    
    }
});

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
            `${candyObj.name}   -   ${candyObj.desc}    -   ${candyObj.price}Rs  = >     `));

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
    
    //To use PUT method W/O id in the object - Else 500 Internal server ERROR is thrown
    let localCandyObj = {
        price: candyObj.price,
        quantity: candyObj.quantity,
        name: candyObj.name,
        desc: candyObj.desc
    }
    
    buyOneBtn.onclick= async ()=>{
        if (localCandyObj.quantity>0){
            
            localCandyObj.quantity--;
            console.log("One candy reduced for", localCandyObj.name);
            buyCandy();
        }
        else 
            {
                candyItem.append("          --- Candy Finished")
            }
    }
    buyTwoBtn.onclick = async () => {
        if (localCandyObj.quantity > 1) {
           
            localCandyObj.quantity = localCandyObj.quantity-2 ;
            console.log("Two candy reduced for", localCandyObj.name);
            buyCandy();
        }
        else
        {
            candyItem.append("          --- Not Enough Candy for the Order")
        }
        
    }
    buyThreeBtn.onclick = async () => {
        if (localCandyObj.quantity > 2) {
           
            localCandyObj.quantity = localCandyObj.quantity-3;
            console.log("Three candy reduced for", localCandyObj.name);
            buyCandy();
        }
        else 
        {
            candyItem.append("          --- Not Enough Candy for the Order")
        }
        
    }

    async function buyCandy(){
        let resp = await axios.put(`https://crudcrud.com/api/e96c3c6ba6e44bb0859f5b6f744fcce9/orders/${id}`, localCandyObj);
        candyItem.removeChild(quantityNode);
        quantityNode = document.createTextNode(`${localCandyObj.quantity}`);
        candyItem.insertBefore(quantityNode, candyItem.children[0]);
    }
}


    




/*
Doubts:-

Line30 - id shows 'undefined'
*/
