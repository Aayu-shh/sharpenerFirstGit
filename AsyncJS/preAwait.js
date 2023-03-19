/// Scene from a Movie Theater,Husband Wife , Husband reaches early, Stopped at gate ,
/// makes PROMISE that wife Bringing tickets ==> Has to wait till it resolves
/// People AFTER him in Queue are allowed passed BEFORE him
console.log('person1: shows ticket');
console.log('person2: shows ticket');

//Husband's turn - BUT has to WAIT

const promiseWifeBringingTickets = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve('tickets'),3000);                            //Wife brings ticket after 3Secs
});
``
//Wife Hungry Now :{
const getPopcorn = promiseWifeBringingTickets.then((t)=>{
    console.log("wife: i have the tikets");
    console.log("husband: we should go in");
    console.log("wife: no i'm hungry")
    return new Promise((resolve,reject)=>resolve(`${t} popcorn`))
});


//Now She wants Butter!!
const getButter = getPopcorn.then((p)=>{
    console.log("husband: i have the popcorn");
    console.log("husband: we should go in");
    console.log('wife: i want butter on my popcorn');
    return new Promise((resolve,reject)=>{
        resolve(` ${p} Butter`);
    })
});

//Sharpener Demands ColdDrink ,, FML
const getColdrinks = getButter.then((b)=>{
    console.log('huband: got the butter, anything else darling');
    console.log('wife: lets gooo we are getting late');
    console.log('husband: thanks for the reminder baby *grins*');
    console.log("husband: i want some coldrink with this butter popcorn *smirks*");
    console.log("wife: baby we are gonna be late");
    //Husband Walks away to bring coldDroinks
    return new Promise((resolve,reject)=>{
        resolve(`${b} and coldrinks!`);
    })
});

getColdrinks.then((c)=>{
    console.log('husband: ahhh, they had campacola');
    console.log('wife: lets gooooooooooooooo');
    console.log(`person3: shows${c}`)
});


//Resolving is Done using .then()
//promiseWifeBringingTickets.then((m)=>console.log(`person3: shows ${m}`));

console.log('person4: shows ticket');
console.log('person5: shows ticket');