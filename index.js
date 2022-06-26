const express = require('express');
const app = express();

app.get('/greet', (req, res) => {
  res.send("HEY THERE!")
})

app.listen(3000, () => {
  console.log("SERVING!")
});