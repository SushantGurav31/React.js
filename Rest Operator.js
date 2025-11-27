// Create a function that accept any numbers of arguments and prints their sum 

const sum = (...nums) => {
    return nums.reduce((total,n) => total + n,0);

};

console.log (sum(1,2,3,4));