require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const {SERVER_PORT} = process.env;
app.use(express.static(__dirname + '/../build'))

app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'))
})
app.listen(SERVER_PORT, () => console.log(`port: ${SERVER_PORT}`));