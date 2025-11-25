// Arry Declaration 
let nums = [1,2,3];
console.log("Original Array:", nums);


// push() Add Element at end 
nums.push(4);
console.log("After push (4):", nums);


// pop () Remove element fromm end 
nums.pop();
console.log("After pop():", nums);


// shit () Remove element from start 
nums.shift();
console.log("After shift():", nums);


// unshift() - add element at start  
nums.unshift(10);
console.log("After unshift (10):", nums);


// map () Create new arry by transformation each value 
let doubled = nums.map(n=>n*2);
console.log("map() double:", doubled);

// Filter () Create arry with values that satisfy condition 
let Filtered = nums.filter(n=>n>2);
console.log("filte() > 2",Filtered);

// reduce() → Combine all values into a single result
let total = nums.reduce ((acc, curr) => acc + curr,0);
console.log("Reduce () Sum:", total);
