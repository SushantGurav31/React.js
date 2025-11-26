// Create a function greet (name) that prints "Hello, Guest" if no name is given. 

const greet = (name = "Guest") => {
    console.log(`Hello, ${name}`);
};

greet();
greet("Sushant");