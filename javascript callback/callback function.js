// // the inner function "LogResult" is the callback
// function process(value, callback) {
//     const result = value * 2;
//     callback (result);     // Executing the callback
// }


// process (5, function LogResult(finalValue){
//     console.log(finalValue);     // Output: 10
// });






// // square 
// function square(number, callback){
//     const result = number * number;
//     callback (result)
// }

// square(10, function result(finalValue){
//     console.log(finalValue);
// });





// const names = ['Alice', 'Bob', 'Charlie'];

// // This function is the callback
// function LogName (name) {
//     console.log(`Hello, ${name}!`);
// }


// // forEach is the higher-order function that accepts LogName as a callback
// names.forEach(LogName);






const cars = ["Inova", "Ertiga", "Swift"];

function CarsName (cars) {
    console.log(`MyCar, ${cars}!`)
}

cars.forEach(CarsName);