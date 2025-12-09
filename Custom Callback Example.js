// Function that accepts a value and a callback function
function calculate (num1, num2, operationCallback){
    const result = num1 + num2;    // core task 

    operationCallback(result);
}


//1. Define the callback function (what to do with the result )
function displayResult(finalValue) {

    console.log(`The final answer is : ${finalValue}`);
}


//2. Call the main function, passing the callback
calculate(10, 5, displayResult);
// Output: The final answer is : 15


// You can also use an anonymous (unnamed) arrow function as a callback:
calculate(20,3,(res) =>{
    console.log (`The sum double is : ${res * 2}`);
});
// Output : The Sum double is : 46
