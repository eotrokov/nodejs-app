import express from "express";
var app = express();
  
app.get('/', function (req, res) {
  res.send('Hello, Express!')
})

export default app;