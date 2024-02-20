
// <<<<<<<<<<<<<<<<<< Number One >>>>>>>>>>>>>>>>>>>>

function calculateMoney(ticketSale) {

    const ticketPrice = 120;
    const totalIncome = ticketPrice * ticketSale;
    const guardBill = 1 * 500;
    const stuffBill = 8 * 50;
    const totalCost = guardBill + stuffBill;

    if (ticketSale < 0) {
        return "You Cant Input A Negative Number";
    }
    else if (typeof ticketSale !== "number") {
        return "You Can Input A Number Only";
    }
    else {
        const remaining = totalIncome - totalCost;
        return remaining;
    }
}


// <<<<<<<<<<<<<<<<<< Number Two >>>>>>>>>>>>>>>>>>>>

function checkName(name) {
    if (typeof name !== "string") {
        return "invalid"
    }
    else {
        const smallName = name.toLowerCase().split('').reverse();
        const validation = "a, y, e, o, u, w ";
        if (validation.includes(smallName[0])) {
            return "Good Name";
        }
        else {
            return "Bad Name";
        }
    }
}

// <<<<<<<<<<<<<<<<<< Number Three >>>>>>>>>>>>>>>>>>>>

function deleteInvalids(array) {
    if (Array.isArray(array) === true) {
        const numberFind = [ ];

        for (const element of array) {
            if (typeof element !== "number") {

            }
            else if (isNaN(element)) {

            }
            else {
                numberFind.push(element)
            }
        }
        return numberFind
    }
    else {
        return "Please Input An Array"
    }
}

// <<<<<<<<<<<<<<<<<< Number Four >>>>>>>>>>>>>>>>>>>>

function password(obj) {

    const name = obj.name;
    const birthYear = obj.birthYear;
    const website = obj.siteName;
    const birthLength = birthYear.toString().length;

    if (! obj.hasOwnProperty("name") || ! obj.hasOwnProperty("birthYear") || ! obj.hasOwnProperty("siteName")) {
        return "invalid"
    }
    else if (birthLength !== 4 ) {
        return "invalid"
    }
    else {
        const siteName = website[0].toUpperCase() + website.slice(1);
        const makePassword = `${siteName}#${name}@${birthYear}`;
        return makePassword
    }
}

// <<<<<<<<<<<<<<<<<< Number Five >>>>>>>>>>>>>>>>>>>>

function monthlySavings(arr, livingCost) {

    if (Array.isArray(arr) === false || typeof livingCost !== "number") {
        return "invalid input"
    }
    else {
        let sum = 0;
        let tax = 0;
        for (const element of arr) {
            if (element >= 3000) {
                tax =(element * 20 / 100);
            }
            sum = sum + element ;  
        }
        const totalIncome = sum - tax;
        const totalSavings = totalIncome - livingCost;

        if (totalSavings >= 0) {
            return totalSavings
        }
        else if (totalSavings < 0) {
            return "earn more"
        }
    }
}