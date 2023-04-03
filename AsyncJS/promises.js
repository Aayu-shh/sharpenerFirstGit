const posts = [
    {
        title: 'Post One',
        body: 'This is post one'
    }
    ,
    {
        title: 'Post Two',
        body: 'This is post two'
    }
];

const user={
    username:'Aayush',
    lastActivityTime:'19th March'
}

async function convertToAwait(){
function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
            document.body.innerHTML = output;         //Output 2 Li element into page AFTER 1 sec 
        });
    }, 1000);
}


function createPost(post)
{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            posts.push(post);           //Pushing new POST into PoSTS list
            resolve();
        }, 1000);
    });
}
function updateLastUserActivityTime() {
    return new Promise((resolve,reject) => {
        user.lastActivityTime = new Date().getTime();
        resolve(user.lastActivityTime);
    });
}

function deletePost(){          //To delete Last post
    return new Promise((res,rej)=>{
        if(posts.length>0)
        {
            let p = posts.pop();
            res(p);
        }
        else
        {
            rej(new Error("ERROR"));
        }
        
    })
}

let [cpres, updtLastUsrAct] = await Promise.all([createPost({ title: "Post Three", body: "this is post three" }),updateLastUserActivityTime()])
console.log(updtLastUsrAct);
let poppedPost = await deletePost();
posts.forEach((post)=>console.log(post));
//getPosts();       To view on screen
}

//Run ASYNC funtion to run AWAIT codes
convertToAwait().catch (err=> console.log(err));;





/////////////////////////////////////////////////////////////////////
// then(new Promise((resolve,reject)=>{
//      posts.pop();
//      resolve();
//  })).then(()=>{
//     posts.forEach((post)=>console.log(post.title));
//  });
// .then(getPosts)
// .catch(err=>console.log(err));        //Wont Print Post3 -- Post created 1sec AFTER Post1AndPost2 Printed 

//Asnc/Await        -- Cleaner than callbacks and much than PROMISE
// async function init(){
//     await createPost({ title: "Post Three", body: "this is post three" });      //call createPost which has to wait for callback fxn setTimeout
//     getPosts();             //Waits like Synchronous Program
// }
// init();
 
//  ASYNC/AWAIT/Fetch
/*
async function fetchUsers(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(res);
}
fetchUsers();
*/

// //Promise All
// const promise1 = Promise.resolve("Hello World"); //Finished Promise
// const promise2 = 10;
// const promise3 = new Promise((resolve,reject)=>{
//     setTimeout(resolve,2000,'Goodbye');
// });
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json());

// Promise.all([promise1,promise2,promise3,promise4]).then((values)=>console.log(values));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
Yash Bhaiya Tutorial Task13

Promises are what they sound like => Are for FUTURE  ==> Are Asynchronous

May be fulfilled or May not be ==> resolved OR rejected

Promise class in JS
async function dadMakesPromise(){
    try {
    const dadsPromise = await new Promise((resolve, reject) => {
        //After 10 Days -- Business me u can have what u NEED whenever u NEED       // Can't wait 10 days hence timeout 1000ms
        
            let salary = 34000;
            let salaryCredited = true;
            let costOfPS5 = 40000;
            let costOfPS4 = 30000;
            setTimeout(() => {
                if (salaryCredited && salary > costOfPS5) {
                    resolve('Buy a PS5');
                }
                else if (salaryCredited == true && salary > costOfPS4) {
                    reject('Buy a PS4')
                }
                else {
                    reject("Sorry Son, I'll try next month");
                }
            }, 1000);

        });
        console.log(dadsPromise);           //Gives Promise <pending>   -- 
    }
catch(err){
    console.log(`*Sad* ${err}`);
}}

dadMakesPromise()//.catch((err)=>console.log(err));
//dadsPromise.then((x)=>console.log(x));
*/