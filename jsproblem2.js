// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// const jim = 3390;
// const tim = 150;
// const mim = 360;

// function get_big () {
//     if (jim > tim) {
//         if (jim > mim) {
//             console.log( "JIm is big");
//         }
//     }
//     if (tim > mim) {
//         if (tim > jim) {
//             console.log( "TIm is big");
//         }
//     }
//     if (mim > jim) {
//         if (mim > tim) {
//             console.log( "mim is big");
//         }
//     }
// }
// const result = get_big (jim,tim,mim);

// function get_big () {
//     if (jim > tim && jim > mim) {
//         console.log("Jim Is Big");
//     }
//     if (tim > mim && tim > jim) {
//             console.log( "TIm is big");
//     }
//     if (mim > jim && mim > tim) {
//             console.log( "mim is big");
//     }
// }

// const result = get_big (jim,tim,mim);
// console.log(result);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// const heights = [10,20,30,40,50,60,70,80,90];

// function tallestPerson (heights) {
//     let tall = heights[0] ;
//     for (const height of heights) {
//         if (height > tall) {
//            tall = height;
//         }
//     }
//     return tall
// }

// const result = tallestPerson(heights);
// console.log(result);


// const heights = [10,20,30,40,50,60,70,80,90];

// function smallestPerson (heights) {
//     let small = heights[0] ;
//     for (const height of heights) {
//         if (height <  small) {
//             small = height;
//         }
//     }
//     return small
// }

// const result = smallestPerson(heights);
// console.log(result);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// const shirtPrice = 500;
// const pantPrice = 800;
// const shoePrice = 100;

// function shoppingPrice ( shirtQuantity , pantQuantity , shoeQuantity ) {
//     const shirtCost = shirtPrice * shirtQuantity;
//     const pantCost = pantPrice * pantQuantity;
//     const shoeCost = shoePrice * shoeQuantity;

//     const totalCost = shirtCost + pantCost + shoeCost;
//     return totalCost

// }

// const totalPrice = shoppingPrice(10 , 5, 1 );
// console.log((totalPrice));


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// const phones = [
//     { Name: "Samsung", Price : 120000 },
//     { Name: "Apple", Price : 160000 },
//     { Name: "Xiaomi", Price : 30000 },
//     { Name: "Vivo", Price : 20000 },
//     { Name: "Walton", Price : 10000 },
//     { Name: "Symphony", Price : 9000 },
// ]
// function expensive_Phones (totalPhones) {
//     let expensiveMobile = totalPhones[0];
//     for(const phone of totalPhones) {
//         if (phone.Price > expensiveMobile.Price) {
//             expensiveMobile = phone
//         }
//     }
//     return expensiveMobile;
// }

// const result = expensive_Phones(phones);
// console.log(result);


// const phones = [
//     { Name: "Samsung", Price : 120000 },
//     { Name: "Apple", Price : 160000 },
//     { Name: "Xiaomi", Price : 30000 },
//     { Name: "Vivo", Price : 20000 },
//     { Name: "Walton", Price : 10000 },
//     { Name: "Symphony", Price : 9000 },
// ]

// function cheapMobile (phones) {
//     let cheapPhone = phones[0];
//     for(const phone of phones) {
//         if (phone.Price < cheapPhone.Price ) {
//             cheapPhone = phone
//         }
//     }
//     return cheapPhone
// }
// const result = cheapMobile (phones);
// console.log(result);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// const products = [
//     {name: "shampoo" , price : 300, quantity : 2},
//     {name: "shirt" , price : 100 , quantity : 3},
//     {name: "pant" , price : 700 , quantity : 5},
//     {name: "chiruni" , price : 1200 , quantity : 1},
// ]
// function productsTotal (products) {
//     let sum = 0;
//     for(const product of products ) {
//         sum = sum + (product.price*product.quantity);
//     }
//     return sum
// }

// const result = productsTotal (products);
// console.log(result);



// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// function add ( num1 , num2 ) {
//     return num1 + num2 ;
// }
// function minus ( num1 , num2 ) {
//     return num1 - num2 ;
// }
// function multiply ( num1 , num2 ) {
//     return num1 * num2 ;
// }
// function divided ( num1 , num2 ) {
//     return num1 / num2 ;
// }

// function calculator ( digit1 , digit2 , operator) {
//     switch (true) {
//         case (operator === "add"):
//            return add (digit1,digit2);

//         case (operator === "minus"):
//            return minus (digit1,digit2);

//         case (operator === "multiply"):
//            return multiply (digit1,digit2);

//         case (operator === "divided"):
//            return divided (digit1,digit2);

//         default:
//             return ("This Calculator Use Only + - * / Operator");
//     }
// }

// const result = calculator (5,7,"divided");
// console.log(result);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// function fullName (firstName , LastName) {

//     if (typeof firstName !== "string") {
//         return "Wrong Input Entered"
//     }
//     else if (typeof LastName !== "string") {
//         return "Wrong Input Entered"
//     }
//     const name = firstName + " " + LastName;
//     return name;
// }

// const result = fullName ( "Anupom", "Shuvo" );
// console.log(result);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Practice Task Problem One .......................................

// const heights2 = [167, 190, 120, 165, 137];

// function lowestNumber (heights2) {
//     let lowNumber = heights2[0];
//     for (const height of heights2) {
//         if (height < lowNumber) {
//             lowNumber = height;
//         }
//     }
//     return lowNumber
// }
// const result = lowestNumber(heights2);
// console.log(result);

// Practice Task Problem Two .................................

// const names = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

// function smallName(names) {
//     let smallerName = names[0];
//     for (const name of names) {
//         if (name.length < smallerName.length) {
//             smallerName = name;
//         }
//     }
//     return smallerName;
// }
// const result = smallName(names);
// console.log(result);

// Practice Task Problem Three................................

// const laptopPrice = 35000 ;
// const tabletPrice = 15000 ;
// const mobilePrice = 20000 ; 

// function  calculateElectronicsBudget ( laptopQuantity , tabletQuantity , mobileQuantity ) {
//     const laptopTotal = laptopPrice * laptopQuantity;
//     const tabletTotal = tabletPrice * tabletQuantity;
//     const mobileTotal = mobilePrice * mobileQuantity ;
//     const totalPrice =  laptopTotal + tabletTotal + mobileTotal;
//     return totalPrice;
// }
// const result = calculateElectronicsBudget (1 , 1 , 1);
// console.log(result);

// Practice Task Problem Four................................

// const phones = [
//     { model: "PhoneA", brand: "Iphone", price: 95000 },
//     { model: "PhoneB", brand: "Samsung", price: 40000 },
//     { model: "PhoneC", brand: "Oppo", price: 26000 },
//     { model: "PhoneD", brand: "Nokia", price: 35000 },
//     { model: "PhoneE", brand: "Iphone", price: 105000 },
//     { model: "PhoneF", brand: "HTC", price: 48000 },
// ];

// function findAveragePhonePrice(phones) {
//     let total = 0;
//     const phonePrice = []
    
//     for (const phone of phones) {
//         total = total + phone.price;
//         phonePrice.push(phone.price)

//     }
//     const average = total / phonePrice.length;
//     return average
    
// }

// const result = findAveragePhonePrice(phones);
// console.log(result);


// Problem Five >>>>>>>>>>>>>>>>>>>>>>>>

// const employees = [
//     { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
//     { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
//     { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
//     { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
// ];

// function totalAmount (employees) {
//     let total = 0;
//     for(const employ of employees) {
//         const currentSalary = (employ.experience * employ.increment) + employ.starting;
//         total = total + currentSalary;
//     }
//     return total
// }
// const result = totalAmount (employees);
// console.log(result);


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// function discountTotal (quantity) {
//     const first100Price = 100;
//     const first200Price = 90;
//     const first300Price = 70;

//     if (quantity <= 100) {
//         const total = quantity * first100Price;
//         return total;
//     }

//     else if (quantity <=200) {
//         const first100Total = 100 * first100Price;
//         const remainQuantity = quantity - 100;
//         const remainTotal = remainQuantity * first200Price;
//         const total = first100Total + remainTotal;
//         return total
//     }
//     else {
//         const first100Total = 100 * first100Price;
//         const second100Total = 100 * first200Price;
//         const remainQuantity = quantity - 200;
//         const remainTotal = remainQuantity * first300Price;
//         const total = first100Total + second100Total+ remainTotal;
//         return total
//     }
// }

// const result = discountTotal(201);
// console.log(result);


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// function calculateMoney(ticketSell) {

//     const ticketPrice = 120;
//     const totalIncome = ticketPrice * ticketSell;
//     const guardBill = 1 * 500;
//     const stuffBill = 8 * 50;
//     const totalCost = guardBill + stuffBill;

//     if (ticketSell !== "number") {
//         return "You Can Input A Number Only";
//     }
//     else if ( ticketSell < 0 ) {
//         return "You Cant Input A Negative Number";
//     }
//     else {
//         const remaining = totalIncome - totalCost;
//         return remaining;
//     }
// }

// console.log(calculateMoney (60));

