
// const age = 10;
// const price = 500 ;

// if ( age >= 60) {
//     // 50% discount
    
    
//     const discount = price * 50 / 100 ;
//     const payBill = price - discount ;
//     console.log(payBill);
// }
// else if (age <=12) {
//     // 20% discount
    
//     const discount = price * 20 / 100 ;
//     const payBill = price - discount ;
//     console.log(payBill );
// }
// else {
//     console.log("You Should Pay Full Price");
// }


// let score = 75;
// let grade;
// if (score >= 90) {
//   grade = "A";
// } else if (score >= 80) {
//   grade = "B";
// }
// console.log(grade);

// const student = true ;
// // if (student === true )
// if (student){
//     console.log ("Go To The Classroom")
// }
// else {
//     console.log("You Cant Enter School Area");
// }

// Exercise .........................................
// problem one

// const burgerPrice = 450 ;
// if (burgerPrice > 500 ) {
//     console.log("You Give A Free Coke");
// }
// else {
//     console.log("You need to buy a coke BDT 30");
// }


// problem two

// const weight = 60 ;
// const height = 1.83;
// const bmi = weight / (height * height);
// console.log(bmi);

// if (bmi < 18.5 ) {
//     console.log("you are underweight");
// }
// else if (bmi <= 24.9) {
//     console.log("you are normal");
// }
// else if (bmi <= 29.9) {
//     console.log(" you are overweight");
// }
// else {
//     console.log("you are obese");
// }

// problem three....
// const marks = 49 ;

// if ( marks >= 90 ){
//     console.log(" Your Grade Is A ");
// }
// else if ( marks >= 80) {
//     console.log(" Your Grade Is B");
// }
// else if ( marks >= 70) {
//     console.log(" Your Grade Is C");
// }
// else if ( marks >= 60) {
//     console.log(" Your Grade Is D");
// }
// else {
//     console.log("Unfortunately Your Grade Is Fail");
// }

// problem four.....
// const myScore = 90;
// const friendScore = 39;

// if (myScore > 60) {
//     if (friendScore > 80 ) {
//         console.log("Go For A launch");
//     }
//     else if (friendScore > 60) {
//         console.log("Good luck next time");
//     }
//     else if (friendScore > 40) {
//         console.log(" Message unseen");
//     }
//     else {
//         console.log("I Block My Friend");
//     }
// }
// else {
//     console.log("Go to home and sleep and act sad");
// }

// problem five.......
// Ternary
// let price = 1010 ;
// const isLeader = true ;
// if (isLeader === true) {
//     if (price > 1000) {
//         price = price / 2;
//     }
//     else {
//         price = 0;
//     }
// }
// else {
//     price = price + 200
// }
// price = isLeader === true ? price > 1000 ? price / 2 : 0 : price + 200; 
// console.log(price);


// if ( num1 > num2 ) {
//     num1 * 2;
// }
// else {
//    num1 + num2;
// }
// console.log(num);
// const num1 = 50;
// const num2 = 10;
// let total ;
// total = num1 > num2 ? num1 * 2 : num1 + num2;
// console.log(total)


// // Problem Six.....

// const age = 10;
// // const student = true;
// const price = 800;
// if ( age >= 60) {
//     const discount = price * 15 / 100;
//     const discountPrice = price - discount;
//     console.log(discountPrice);
// }
// else if ( student ) {
//     const discount = price * 50 / 100;
//     const discountPrice = price - discount;
//     console.log(discountPrice);
// }
// else if ( age <= 10) {
//     console.log("Free");
// }
// else {
//     console.log(" You Should Pay Full BDT 800");
// }

let age = isStudent; 
let regularFare = 800;
let ticketFare;

if (age < 10) {
    ticketFare = 0;
} 
else if (age >= 60) {
    ticketFare = regularFare * 0.85; 
} 
else if (age === isStudent) {
    ticketFare = regularFare * 0.5; 
} 
else {
    ticketFare = regularFare; 
}

console.log("Ticket Fare: " + ticketFare + " tk");