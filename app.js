const express = require('express')


const app  = express();
const router = express.Router();


app.listen(3000);

app.get('/',function(req,res) {
    res.sendFile('/home/yogesh/Desktop/datescheduler/hello.html');
  });