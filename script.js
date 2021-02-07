/*'use strict';

let hasDriversLicense = false
const PassTest = true

if (PassTest) hasDriversLicense = true
if (hasDriversLicense) console.log(`I can drive :D`);

//const interface = 'Audio'
const private = 543


//Functions

function logger() {
    console.log(`My name is kalen`);
}

logger()

function fruitProcessor(apples, oranges) {
    const juice = `juice with ${apples} apples and ${oranges} oranges.`
    return juice
}

const applejuice = fruitProcessor(5, 0)
console.log(applejuice)

const appleOrange = fruitProcessor(3, 4)
console.log(appleOrange)


//functinon declaration


function calcAge1(birthYear) {
    const age = 2020 - birthYear
    return age
}

const age = calcAge1(1993)
console.log(age)
// Both the top or the bottom are doing the exact same thi6ng. 

function calceAge11(birthYeat) {
    return 2020 - birthYeat
}

const age1 = calceAge11(1993)
console.log(age1)


//Function experession 
const calcAge2 = function (birthYear) {
    return 2020 - birthYear
}

const age2 = calcAge2(1993)
console.log(age, age1, age2);

// use function expression to call the function before calling the value or variable. Makes the code much more cleaner. 




//Arrow function =>
const calcAge3 = birthYear => 2020 - birthYear
const age3 = calcAge3(1993)
console.log(age3)

const RetirementYear = (birthYear, firstName) => {
    const age4 = 2020 - birthYear
    const retirement = 65 - age4
    //  return retirement
    return `${firstName} retire in ${retirement} years`
}

console.log(RetirementYear(1993, 'Kalen'))
console.log(RetirementYear(1993, 'KAi'))

// Arrow function does not get a keyword. 



//function calling another functions 

function cutFruitPieces(fruit) {
    return fruit * 4
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples)
    const orangePieces = cutFruitPieces(oranges)

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} Piceces of  oranges.`
    return juice
}

console.log(fruitProcessor(2, 3))




//Reviewing Functions 

const calcAge = function (birthYear) {
    return 2037 - birthYear
}

const yearsUntilretirement = function (birthYear, firstName) {
    const age = calcAge(birthYear)
    const retirement = 65 - age

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`)
        return retirement
    } else {
        console.log(`${firstName} has already retired`)
        return -1;
    }
    return retirement
    //  return `${firstName} retire in ${retirement} years`
}

console.log(yearsUntilretirement(1993, `Kalen`))
console.log(yearsUntilretirement(1969, `Kai`))
*/


//Test for Functions


const CalcAverage = (a, b, c) => (a + b + c) / 3 //Arrow function that that is generic using a varibale then a name
console.log(CalcAverage(3, 4, 5))  // test Arrow functions


let scoreDolphins = CalcAverage(44, 23, 71) // Calling data for Dolphins
let scoreKoalas = CalcAverage(65, 54, 49); //Calling data for Koalas 

const checkwinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(` Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(` Koalas win (${avgDolphins} vs. ${avgKoalas})`)
    } else {
        console.log(`No team wins`)
    }

}
checkwinner(scoreDolphins, scoreKoalas)

//const score 

scoreDolphins = CalcAverage(85, 54, 41)
scoreKoalas = CalcAverage(23, 34, 27)
console.log(scoreDolphins, scoreKoalas)
checkwinner(scoreDolphins, scoreKoalas)

