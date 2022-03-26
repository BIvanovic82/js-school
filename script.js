"use strict";

/*
let hasDriversLicence = false;
const passTest = true;

if (passTest) hasDriversLicence = true;
if (hasDriversLicence) console.log(`I can drive :D`);

// const interface = "Audio";
// let if = 235;
// const private = 12;

function logger() {
    console.log(`My name is Boris`);
}

//calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges, plums) {
    const juice = `Juice is made of ${apples} apples, ${oranges} oranges and ${plums} plums`;
    return juice;
}

const applesPlumsJuice = fruitProcessor(5, 0, 7);
const orangesPlumsJuice = fruitProcessor(0, 2, 3);
*/
/*
function calcAge1 (birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);

console.log(age1, age2);
*/
/*
//Arrow function
const calcAge3 = birthYear => 2022 - birthYear;

const age3 = calcAge3(1982);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`
}

console.log(yearsUntilRetirement(1982, `Boris`));
*/
/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges, plums) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const plumPieces = cutFruitPieces(plums);

    return `Juice is made of ${applePieces} apples, ${orangePieces} oranges and ${plumPieces} plums`;
}

const juice2 = fruitProcessor(3, 5, 4);
console.log(fruitProcessor(3, 5, 4));
*/
/*
const calcAge = function (year) { 
    return 2022 - year;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`)
return retirement;
} else {
        console.log(`${firstName} is in retirement.`)
        return -1;
    }
    // return `${firstName} retires in ${retirement} years.`;
}

console.log (yearsUntilRetirement(1982, `Boris`));
console.log (yearsUntilRetirement(1955, `Robert`));
*/
/*
const calcAverage = (a, b, c) => (a + b + c) / 3;

const dolphins = calcAverage(50, 50, 80);
const koalas = calcAverage(50, 70, 90);


function checkWinner (avgDolphins, avgKoalas) {

    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win`);
    } else {
        console.log(`No winner`);
    }
}

checkWinner(dolphins, koalas);
*/
/*
const friend1 = `Mark`;
const friend2 = `Steven`;
const friend3 = `Peter`;

const friends = [`Mark`, `Steven`, `Peter`];
console.log(friends);

const y = new Array(1991, 2562, 7452, 6524);
console.log(y);
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 2]);

friends[1] = `Ron`;
console.log(friends);
friends[3] = `Simon`;
console.log(friends);

const firstName = `Boris`;
const boris = [firstName, `Ivanović`, 1982, `programmer`, friends];
console.log(boris);

//Exercise

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1956, 1982, 2002, 2015];

console.log(calcAge(years));

const age1 = calcAge(years[1]);
const age2 = calcAge(years[years.length - 1]);
const age3 = calcAge(years[years.length - 2]);
console.log(age1, age2, age3);

const ages = [calcAge(years[1]), calcAge(years[years.length - 1]), calcAge(years[years.length - 2])];
console.log(ages);
*/
/*
//ADD ELEMENTS
const friends = [`Mark`, `Steven`, `Peter`];
const newLength = friends.push(`Jay`, `Dot`, `Kita`);
console.log(friends);
console.log(newLength);

const newLength2 = friends.unshift(`Mummy`);
console.log(friends);
console.log(newLength2);

//REMOVE ELEMENTS

friends.pop();//last
const popped = friends.pop();
console.log(friends);
console.log(popped);

const shifted = friends.shift();//first
friends.shift();
console.log(friends);
console.log(shifted);


console.log(friends.indexOf(`Steven`));
console.log(friends.indexOf(`Feta`));

friends.push(`23`);

console.log(friends.includes(`Steven`));
console.log(friends.includes(`Riba`));
console.log(friends.includes(`23`));

if(friends.includes(`Steven`)) {
    console.log(`You have a friend called Steven.`);
}

*/
/*
const bills = [125, 555, 44];
const calcTip = function (bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * .15;
    } else {
        return bill * .2;
    }
}

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

const calcTotals = function (bill, tip){
    return bill + tip;
}

const totals = [calcTotals(bills[0], tips[0]), calcTotals(bills[1], tips[1]), calcTotals(bills[2], tips[2])];
console.log(totals);
*/

const borisArray = [
`Boris`, 
`Ivanović`, 
2022 - 1982, 
`programmer`, 
[`Martin`, `Sonja`, `Jakov`]];

const boris = {
firstName:`Boris`, 
lastName:`Ivanović`, 
job:`programmer`, 
age:2022 - 1982, 
friends:[`Martin`, `Sonja`, `Jakov`]};

console.log(boris);

const nameKey = `Name`;

console.log(boris.age);
console.log(boris.firstName);
console.log(boris[`last` + nameKey]);
console.log(boris[`first` + nameKey]);