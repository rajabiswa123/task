const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));


var nodemailer = require("nodemailer");



app.get("/", function(req ,res){
    res.sendFile(__dirname + "/home.html");
});


app.post("/signup",function(req,res){

    var num1 = req.body.name;
    var num2 = req.body.email;
    var num3 = req.body.Street;
    var num4 = req.body.City;
    var num5 = req.body.State;
    var num6 = req.body.zip;
    var num7 = req.body.aup;
    
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'biswaranjanroutray765@gmail.com',
          pass: 'Biswa@123'
        }
      });
      
      var mailOptions = {
        from: 'pradhanbiswajit167@gmail.com',

        to: 'biswaranjanroutray765@gmail.com',
        subject: 'Sending Email using Node.js',
        html: '<a href ="http://localhost:3000/signup1?id="'+num1+' > Verify your email </a>'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    
    
    

    
});


app.get("/signup1", function(req ,res){
    res.sendFile(__dirname + "/index2.html");
});



app.post("/signIn",function(req,res){

  var num9 = req.body.psw;
  var num10 = req.body.confirmpassword;
  
  if(num9 === num10){
    res.sendFile(__dirname + "/signin.html");
  }
 

});

app.get("/reg",function(req,res){
    res.sendFile(__dirname+"/reg.html")
});
 
app.get("/sign",function(req,res){
    res.sendFile(__dirname+"/signin.html")
});

app.get("/pubg",function(req,res){
    res.sendFile(__dirname+"/task.html")
});

app.get("/change",function(req,res){
    res.sendFile(__dirname+"/index2.html")
});

app.get("/home",function(req,res){
    res.sendFile(__dirname+"/home.html")
});

app.get("/pqrs",function(req,res){
    res.sendFile(__dirname+"/signin.html")
});

app.listen(3000,function(){
    console.log("server is running on port 3000.");
});
