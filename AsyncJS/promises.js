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
Promise.all([createPost({ title: "Post Three", body: "this is post three" }),updateLastUserActivityTime()])
.then(([cpres,updtLastUsrAct])=>{
    console.log(updtLastUsrAct);
    posts.forEach((post)=>console.log(post));
})
.then(deletePost).then(()=>{
    posts.forEach((post)=>console.log(post));
})
.catch(err=>console.log(err));


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
         