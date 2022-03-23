const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const PORT = 5000;

const app = express();

app.use(bodyParser.json())
app.use(cors)

app.get('/', function(req,res){
    res.send('hello from server')
})

// app.post('/enroll', (req,res)=>{
// console.log(req.body);
// res.status(200).send({"message":"Data Recieved"})
// })

app.listen(PORT,()=>{
    console.log(`server is running at ${PORT} port`);
})