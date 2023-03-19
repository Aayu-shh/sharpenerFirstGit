// before reading this , refer preAwait.js//

console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async()=>{
    
    //MAKING promises
    const promiseWifeBringingTickets = new Promise((resolve, reject) => {
        setTimeout(() => resolve('tickets'), 3000);                            //Wife brings ticket after 3Secs
    });

    const getPopcorn =  new Promise((resolve, reject) => resolve(`popcorn`));
    const getCandy = new Promise((resolve, reject) => resolve(`candy`));
    const getCoke = new Promise((resolve, reject) => resolve(`coke`));


    const getButter = new Promise((resolve, reject) => resolve(`Butter`));

    
    const getColdDrink = new Promise((resolve, reject) =>resolve(`coldrinks!`));

    let ticket= await promiseWifeBringingTickets;                   //Resolves promiseWifeBringingTickets

    console.log(`wife: i have the ${ticket}`);
    console.log("husband: we should go in");
    console.log("wife: no i'm hungry");

    let popcorn = await getPopcorn;                                 //Resolves getPopcorn
    console.log(`husband: i have the ${popcorn}`);
    console.log("husband: we should go in");
    console.log('wife: i want butter on my popcorn');
    
    let butter = await getButter                                   //Resolves getButter
    console.log(`huband: got the ${butter}, anything else darling`);
    console.log('wife: lets gooo we are getting late');
    console.log('husband: thanks for the reminder baby *grins*');
    console.log("husband: i want some coldrink with this butter popcorn *smirks*");
    console.log("wife: baby we are gonna be late");
    
    //Sharpener Demands
    let coldDrink = await getColdDrink;
    console.log('husband: ahhh, they had campacola');
    console.log('wife: lets gooooooooooooooo');
    

    return `person3: shows ${ticket} ${butter} ${popcorn} and ${coldDrink}`;
}

//returns a Promise
preMovie().then((t)=>console.log(t));
























//Husband's turn - BUT has to WAIT

// const promiseWifeBringingTickets = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('tickets'), 3000);                            //Wife brings ticket after 3Secs
// });
// ``
// //Wife Hungry Now :{
// const getPopcorn = promiseWifeBringingTickets.then((t) => {
//     console.log("wife: i have the tikets");
//     console.log("husband: we should go in");
//     console.log("wife: no i'm hungry")
//     return new Promise((resolve, reject) => resolve(`${t} popcorn`))
// });


// //Now She wants Butter
// const getButter = getPopcorn.then((p) => {
//     console.log("husband: i have the popcorn");
//     console.log("husband: we should go in");
//     console.log('wife: i want butter on my popcorn');
//     return new Promise((resolve, reject) => {
//         resolve(` ${p} Butter`);
//     })
// })

// getButter.then((o) => {
//     console.log('husband: got the butter, anything else darlin?');
//     console.log('wife: lets gooo we are getting late');
//     console.log('husband: thanks for the reminder baby *grins*');
//     console.log(`person3: shows${o}`)
// });


//Resolving is Done using .then()
//promiseWifeBringingTickets.then((m)=>console.log(`person3: shows ${m}`));

console.log('person4: shows ticket');
console.log('person5: shows ticket');