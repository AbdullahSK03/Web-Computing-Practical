// Import the readline module
const readline = require('readline');

// Create an interface for input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask for the first number
rl.question('Enter the first number: ', (num1) => {
  // Ask for the second number
  rl.question('Enter the second number: ', (num2) => {
    // Perform arithmetic operations
    let sum = parseFloat(num1) + parseFloat(num2);
    let difference = parseFloat(num1) - parseFloat(num2);
    let product = parseFloat(num1) * parseFloat(num2);
    let quotient = parseFloat(num1) / parseFloat(num2);

    // Log the results
    console.log(`Sum: ${sum}`);
    console.log(`Difference: ${difference}`);
    console.log(`Product: ${product}`);
    console.log(`Quotient: ${quotient}`);

    // Close the interface
    rl.close();
  });
});
