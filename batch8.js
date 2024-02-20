// <<<<<<<<<<<<<<<<<<<<<<< Problem One >>>>>>>>>>>>>>>>>>>>>>>

// function cubeNumber(number) {
//     if (typeof number === "number") {
//         const cube = number * number * number
//         return cube
//     }
//     else {
//         return "You Input A Invalid Data"
//     }
// }
// const cubeResult = cubeNumber(3);
// console.log(cubeResult);

// <<<<<<<<<<<<<<<<<<<<<<< Problem Two >>>>>>>>>>>>>>>>>>>>>>>

// function matchFinder(str1, str2) {

//     if (typeof str1 === "string" && typeof str2 === "string") {
//         const findMatch = str1.includes(str2);
//         return findMatch
//     }
//     else {
//         return" Provide A Valid Input"
//     }

// }

// const matchResult = matchFinder("john Doe", "Doe");
// console.log(matchResult);

// <<<<<<<<<<<<<<<<<<<<<<< Problem Three >>>>>>>>>>>>>>>>>>>>>>>

// function sortMaker(array) {

//     let [a, b] = array;

//     if (a < 0 || b < 0) {
//         return "invalid input";
//     }
//     else if (a == b) {
//         return "equal";
//     }
//     else if (a > b ) {
//         return [a , b];
//     }
//     else {
//         return [b,a]
//     }
// }

// const result = sortMaker([9,-5]);
// console.log(result);

// <<<<<<<<<<<<<<<<<<<<<<< Problem Four >>>>>>>>>>>>>>>>>>>>>>>

// const obj = {
//     street : 10,
//     house : "15A",
// }

// function findAddress(obj) {
//     const street = obj.street || "__";
//     const address = obj.house || "__";
//     const society = obj.society || "__";

//     const str = `${street},${address},${society}`
//     return str
// }

// const result = findAddress(obj);
// console.log(result);


// <<<<<<<<<<<<<<<<<<<<<<< Problem Five >>>>>>>>>>>>>>>>>>>>>>>

function canPay (tk , chips) {
    sum = 0;
   for (const element of tk ) {
        sum = sum + element
   }
   if  (tk.length === 0 ) {
    return "Wrong Input Entered"
   }
   else {
    if (chips === sum || chips < sum) {
        return true
   }
   else {
    return false
   }
   }
}

console.log(canPay([],10));