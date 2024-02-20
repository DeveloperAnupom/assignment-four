
// function square(s1, s2, s3) {

//     let sq1 = s1 * s1;
//     let sq2 = s2 * s2;
//     let sq3 = s3 * s3;

//     // console.log("The Square Of Number 1 Is",sq1 , "The Square Of Number 2 Is", sq2, "The Square Of Number 2 Is", sq3);
// }

// square(6, 11)

// function difference(num1, num2) {
//     const minus = num1 - num2;
//     // console.log(num1, num2, "The Difference Between Num1 And Num2 Is" , minus);
// }

// const fatherAge = 55;
// const myAge = 30;

// difference(fatherAge, myAge)

// const person = {
//     name: "Anupom Roy Shuvo",
//     age: 22,
//     study : "Honours 2nd Year",
//     region : "HInduism",

// }

// function personAgeNameStudy (person) {
//     const personAge = person.age;
//     const personName = person.name;
//     const personStudy = person.study;
    
//     // console.log(personAge , personName , personStudy);
// }

// // personAgeNameStudy(person);


// // const age = [10,20,30,40,50,60,70,80,90];

// // function arrayTotal (age) {
// //     let sum;
// //     const i = age[i];
// //     sum = sum + i ;
// //      console.log(sum);
// // }
// // arrayTotal(age)

// const age = [10,20,30,40,50,60,70,80,90];

// function sumOffArray (ageNumbers) {
//     addition = 0;
//     for (element of ageNumbers) {
//        addition = addition + element;
//     }
//     return addition
// }

// const result = sumOffArray(age);
// // console.log("The Total Of Array Is",result);

// const numbers = [1,2,3,4,5,6,7,8,9];

// function sumOffEven (anu) {
//     sum = 0;
//     for (element of anu) {
//         if (element % 2 === 0) {
//             sum = sum + element;
//         } 
//     }
//     return sum
// }

// const results = sumOffEven(numbers);
// // console.log(results);


// const number = [1,2,3,4,5,6,7,8,9];

// function evenNumbersArray (evens) {
//     const evensArray = [];
//     for (evenNum of evens) {
//         if (evenNum % 2 === 0) {
//             evensArray.push(evenNum) ;

//         }
//     }
//     return evensArray;
// }

// const final = evenNumbersArray (number);
// // console.log(final);


// // Practice Task >>>>>>>>>>>>>>>>

// // problem one ............................

// function  fourDigitMultiple (d1,d2,d3,d4) {

//     const multiplication = d1 * d2 * d3 * d4;
//     return multiplication
// }

// const folafol = fourDigitMultiple (2,3,4,5);
// console.log(folafol);

// problem two ........................................

// function oddOrEven (number) {
//     if (number % 2 === 1) {
//          const digit = number  * 2 ;
//          return digit
//     }

//     else {
//         const digit2 = number / 2 ;
//         return digit2
//     }
// }

// const result = oddOrEven(60);
// console.log(result);


// Problem Three .....................

// const totalNumbers = [50,60,70,80,90];

// function make_avg (numbers) {
//     sum = 0 ; 
//     for (number of numbers) {
//         sum = sum + number;
      
//     }
//     const sub = numbers.length;
    
//     const total = sum / sub;
//     return total

// }

// const result = make_avg (totalNumbers);
// console.log( "The Average Number Is ", result);


// Problem Four ...............................................

// const binrayArray = "10001101100"
// function count_zero (array) {
//     const zero = [] ;

//     for (element of array) {
    
//         if (element == 0 ) {
//             zero.push(element)
//         }
//     }
//     const elem = zero.length;
//     return elem

    
// }

// const result = count_zero (binrayArray);
// console.log("The Total Number Of Zero In This String Is" ,result);


// Problem Five >>>>>>>>>>>>>>>>>>>>>>>>>>>>

// function  odd_even (number) {
//     if (number % 2 === 0 ) {
//         return "Even"
//     }
//     else {
//         return "Odd"
//     }
// }

// const result = odd_even (10);
// console.log(result);

