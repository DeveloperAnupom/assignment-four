

// Problem One Inch To Feet  >>>>>>>>>>>>>>>>>>>>>>>>>

// function inchToFeet (inch) {
//     const feet = inch / 12 ;
//     const feetResult = parseInt(feet);
//     const inchi = inch % 12 ;
//     const totalresult = `His/Her Heights Is ${feetResult} Feet & ${inchi} Inch`
//     return totalresult
// }
// const result = inchToFeet(76);
// console.log(result);

// Problem Two Calculate Leap year proper way >>>>>>>>>>>>>>>>

// function calc_leapYear (year) {
//     if (year % 100 !== 0 && year % 4 === 0) {
//         return "This Is Leap Year"
//     }
//     else if (year % 400 === 0) {
//         return "This Is Leap Year"
//     }
//     else {
//         return "This Is  Not A Leap Year"
//     }
// }
// const result = calc_leapYear (2054);
// console.log(result);


// Problem Three Get Average Of Odd Number From An Array >>>>>>>>>>

// function getOddAvg (numbers) {
//     let sum = 0;
//     const oddNum = [ ];
//     for (const element of numbers) {
//         if (element % 2 === 1 ) {
//             oddNum.push(element)
//             sum = sum + element;
//         }
//     }
//     const average = sum / oddNum.length;
//     return average

// }

// const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// const result = getOddAvg (numbers);
// console.log(result);


// Problem Four Check Duplicate Element >>>>>>>>>>>>>>>>>

// function get_duplicate(name) {
//     const nameArray = [];
//     for (const element of name) {
//         if (nameArray.includes(element) === false) {
//             nameArray.push(element)
//         }
//     }
//     return nameArray

// }

// const name = ["anupom", "shuvo", "roy", "sojib", "anupom", "roy"];
// const result = get_duplicate(name);
// console.log(result);



// Practice Task >>>>>>>>>>>>>>>>>>

// problem one >>>>>>>>>>

// function calc_temp(clTemp) {
//     const frTemp = ( clTemp * 9/5 )+ 32;
//     return frTemp
// }

// const result = calc_temp(40);
// console.log("After Converting, The Result Of Celsius To Fahrenheit Is" , result);




// problem one >>>>>>>>>>

// const numbers = [5,6,11,12,98, 5]; 

// function findFive (numbers) {
//     const findArray = [];
//     for (const number of numbers) {
//         if ( number === 5 ) {
//             findArray.push(number);   
//         }
//     }
//     const digit = findArray.length;
//     return digit
// }

// const result = findFive (numbers);
// console.log(result);

// const numbers = [5,6,11,12,98, 5]; 

// function findFive (numbers) {
//     const findArray = [];
//     for (const number of numbers) {
//         if ( number === 25 ) {
//             findArray.push(number);   
//         }
//     }
//     const digit = findArray.length;
//     return digit
// }

// const result = findFive (numbers);
// console.log(result);


// Problem Three  >>>>>>>>>

// const str = " my name is anupom roy shuvo. i am a web developer. i want to be developer and earn money with this skill ";
// const strDiv = str.split("");
// console.log(strDiv);

// function getVowel (strDiv) {
//     const vowelArray = [];

//     for (const element of strDiv) {
//         if (element == "a" ||  element == "e" || element == "o" || element == "i" || element == "u") {
//             vowelArray.push(element)
//         }
//     }
//     const vowelLength = vowelArray.length;
//     return vowelLength
// }

// const result = getVowel(strDiv);
// console.log(result);

// Problem Four >>>>>>>>>>>>>>>>>>>>>>>>>

// const str = "I am learning Programming to become a programmer";
// const strDivision = str.split(" ");

// function findBig (strDivision) {
//     let bigWord = "";
//     let bigLength = strDivision[0].length ;
//     for (const word of strDivision) {  
//         if ( word.length > bigLength) {
//             bigWord = word;
//         }     
//     }
//     return bigWord
// }
// const result = findBig(strDivision);
// console.log(result);


// PROBLEM 5 >>>>>>

// const fullNumber = Math.round(Math.random()*10 ) +10
// console.log(fullNumber);
