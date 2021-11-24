// function randomNum(){
//     console.log(Math.floor(Math.random()*6 + 1))
// }

//create a function that greets a user

// function greet(name){
//     console.log("Hello " + name)
// }

// let lsname = prompt ("What is your first name");

// function greetUser(name){
//     // console.log("Hello " + name)
//     console.log(`Hello ${name}`)
// }

// greetUser(lsname);
// let fname = prompt ("What is your first name");
// let lname = prompt ("What is your last name");

// function greetUser(firstname,lastname){
//     // console.log("Hello " + name)
//     console.log(`Hello ${firstname} ${lastname}`)
// }

// greetUser(fname,lname);

// let number = prompt("Enter a number between 0 and 3")
// function less(value){
// console.log(`The number ${value} is less than 3`)
// }

// less(number)

let weight= prompt("Enter your weight in Kg");
let rawheight= prompt("Enter your height in cm");
let height =rawheight /100 ;

function bmi(weight,height){
    console.log(Math.floor(weight / Math.pow(height,2)))
    return("You are obese")
}

bmi(weight, height)