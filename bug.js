const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might fail
  doSomethingAsync().then(() => {
    res.send('Hello World!');
  }).catch(err => {
    // Error handling is missing here! 
  });
});

function doSomethingAsync() {
  return new Promise((resolve, reject) => {
    // Simulate a random failure
    const random = Math.random();
    if (random < 0.5) {
      reject(new Error('Something went wrong!'));
    } else {
      resolve();
    }
  });
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});