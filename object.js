
// const school = {
//     class: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//     students: 450,
//     principal: "Obaydulla Sir",
//     teacher: {
//         RabbaniSir: "Class 10",
//         LilyMam: "Class 09",
//     }
// }
// const propertyKeys = Object.values(school);
//     console.log(propertyKeys)

// const school = {
//     class: 10,
//     students: 450,
//     principal: "Obaydulla Sir",
// }

// for (const result in school) {
//     console.log(result);
//     console.log(school[result]);

// }

// Problem Task  >>>>>>>>>>>>>>>>>>>>>>>>

// Problem One >>>>>>>>>>>>>>
  
// const colors = {
//     red: "#ff0000",
//     green: "#00ff00",
//     blue: "#0000ff",
//     "golden rod": '#daa520'
// };

// const colorValue = Object.values(colors["golden rod"]);
// console.log(colorValue);

// Problem Two >>>>>>>>>>>>>>>>>>>>>>>
// const car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2020
// };

// car["passenger Capacity"] = 5;
// console.log(car);

// Problem Three >>>>>>>>>>>>>>>>>>>>>>>

// const student = {
//     name: "Hamim Sakep",
//     id: 5421,
//     physics: {
//         subject: "HSC Physics",
//         author: "Shahjahan Tapan",
//         marks: 30
//     }
// };

// console.log(student.physics);

// Problem Four >>>>>>>>>>>>>>>>>>>>>>>
// let student = {
//     name: 'Ariana Grande',
//     age: 21,
//     city: 'Gaibandha',
//     isStudent: true
// };

// const count = Object.keys(student);
// const countLength = count.length;
// console.log(countLength);

// Problem Five  >>>>>>>>>>>>>>>>>>>>>>>

// const str = "abcedabcdeabcdeabcdegruryqaABCDABCDABCDAAA";
// let a = 0;
// let A = 0;
// for (let i = 0 ; i < str.length; i++) {
//     if (str[i] === "a") {
//         a ++
//     }
//    if ( str[i] === "A") {
//     A ++
//    }
// }

// console.log(`The letter 'a' appears ${a} times in the given string.`);
// console.log(`The letter 'A' appears ${A} times in the given string.`);
// const str = "abcedabcdeabcdeabcdegruryqaeasgsdgiooooouuu";

// for (let i = 0 ; i < str.length; i++) {
//     if (str[i] === "a" && "e" && "i" && "o"  && "u") {
//         console.log(`The vowel aeiou appears times in the given string.`);
//     }
//     else {
//         console.log("Not Here Vowel");
//     }
// }

// console.log(`The vowel aeiou appears times in the given string.`);

// const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

// const reverseColor = [ ];
// for (let i = 0 ; i < colors.length; i++) {
//     const get = colors[i];
//     reverseColor.unshift(get)
// }
// console.log(reverseColor)

// const numbers = [12, 98, 5, 41, 23, 78, 46];
// for (i = 0; i < numbers.length; i++) {
//    const num =  numbers[i];
//    if ( num % 2 === 0 ) {
//     console.log(num);
//    }
// }

// var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
// for (word of numbers) {
//     const adding = numbers.join();
//     console.log(adding); 
// }

const rev = [ ];
const statement = 'I am a hard working person';
const myArray = statement.split(" ");
for (words of myArray) {
    console.log(words);
    rev.unshift(words)
}
console.log(rev);
