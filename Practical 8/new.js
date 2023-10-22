// Import the fs module
const fs = require('fs');

// Data to be written to the file
let data = 'Hello World!';

// Write data to the file
fs.writeFile('output.txt', data, (err) => {
  // Check for errors
  if (err) throw err;

  console.log('Data written to file');
});
