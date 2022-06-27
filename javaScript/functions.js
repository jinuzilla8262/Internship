// program to add two numbers

// declaring a function
function add(x, y) {
    return x + y;
}

// take input from the user
let number1 = parseFloat(prompt("Enter first number: "));
let number2 = parseFloat(prompt("Enter second number: "));

// calling function
let result = add(number1,number2);

// display the result

document.write("The sum is " + result + "\n");
document.write(typeof result);