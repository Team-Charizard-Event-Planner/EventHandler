const express = require('express');
const path = require('path');

const app = express();

app.use('/', (req, res) => {
  console.log('sending html');
  return res.sendFile(path.resolve(__dirname, '../index.html'));
});

app.listen(3000, () => {
  console.log('eventHandler knows your secrets :)');
})