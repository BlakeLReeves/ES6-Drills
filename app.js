//Template Literals and Default Parameters Value
let favMovie = (name = 'world', movie = 'The Room') => console.log(`My name is ${name}, and my favorite movie is ${movie}.`);

favMovie('Blake', 'Where the Red Fern Grows');

//Arrow Functions
let getFirstName = fullName => {
    console.log(fullName.split(' ')[0]);
;}

let getFirstName2 = fullName => console.log(fullName.split(' ')[0]);

getFirstName('Blake Reeves');
getFirstName2('Robin Reeves');

let getResult = (a, b = 2) => ({
    exponentResult: (a ** b),
    productResult: (a * b)
});

let result = getResult(2, 3);
console.log(`${result.exponentResult}`);
console.log(`${result.productResult}`);

//Spread Syntax
let information = ['Blake', 'Spring Hill', 'Chinese'];

let myInfo = (name, location, favFood) =>{
    console.log(`My name is ${name}. I live in ${location}. My favorite food is ${favFood}.`);
};

myInfo(...information);

let myName = 'Blake';

let spreadArray = str => {
    let spreadStr = [...str];
    for (i = 0; i < 5; i++) {
        console.log(spreadStr[i]);
    }
};

spreadArray(myName);



