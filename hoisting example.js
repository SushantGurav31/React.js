// 1. Calling the function Decleration Before its definition 
console.log(greetDeclaration());

// 2. Calling the function Expression before its definition 
console.log(greetExpression());

// 3. Typing to access the age cariable before its assignment
console.log(age);


// Declaration Section 

// Function Decleration 
function greetDeclaration () {
    return "Hello form the Decleration!";
}


// Function Expression 
var greetExpression = function() {
    return "Hello From the Expression!";
}


// Variable decleration (using var)
var age = 30;




