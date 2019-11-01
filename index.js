const bodyParser = require("body-parser");
const express = require ('express');
const jwt = require("jsonwebtoken");
const app = express();
app.use(bodyParser.json());



app.post('/login',(req,res)=>{
    console.log('login get',req.body);
    let body = req.body;
    if (!req.body.username || !req.body.password) {
        res.status(400).send("Error. Please enter the correct username and password");
    }
    else{
        var data = {
            name:body.username,
            userId : "123456789",
        }
        var token = jwt.sign(data, "jwtSecreteKey", { expiresIn: '1d' });
        var response={
            email:body.username,
            token: token
        }
        res.send(response)
    }
})

app.post('/verify',(req,res) =>{
    var token = req.body.token;
    var isVerify= jwt.verify(token, "jwtSecreteKey");

    console.log(isVerify)
    res.send(isVerify)
})



const port = 3005;
app.listen(port,(req,res) =>{
    console.log("server is running on ",`${port}`)
})

