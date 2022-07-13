const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
const { userInfo } = require("os");
const { equal } = require("assert");
require('dotenv').config();

// BODY PARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded({extended: true}));

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory


// ENDPOINTS
app.get('/en', (req, res)=>{
    res.render('home-en.pug');
})

app.get('/home-en', (req, res)=>{
    res.render('home-en.pug');
})

app.get('/gallery-en', (req, res)=>{
    res.render('gallery-en.pug');
})

app.get('/contact-en', (req, res)=>{
    res.render('contact-en.pug');
})

app.post('/contact-en', (req, res)=>{
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth : {
            user: process.env.emailAddress,
            pass: process.env.emailpassword
        }
    })
    
    var mailOptions = {
        from: 'rakshit.dev02@gmail.com',
        to: 'dhaneshtiwari04@gmail.com',
        subject: `${req.body.name} Want's to Contact You!`,
        text: `${req.body.name},
                ${req.body.Email},
                ${req.body.phone},
                ${req.body.query}.`
    };

    console.log(req.body)
    transporter.sendMail(mailOptions, function(error,info){
        if (error){
            console.log('Error Occurs');
        } else{
            console.log('Email Sent : '+ info.response);
        }
    });
    res.render('contact-en.pug');
})
app.get('/', (req, res)=>{
    res.render('home-hi.pug');
})

app.get('/home-hi', (req, res)=>{
    res.render('home-hi.pug');
})

app.get('/gallery-hi', (req, res)=>{
    res.render('gallery-hi.pug');
})

app.get('/contact-hi', (req, res)=>{
    res.render('contact-hi.pug');
})

app.post('/contact-hi', (req, res)=>{
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth : {
            user: process.env.emailAddress,
            pass: process.env.emailpassword
        }
    })
    var mailOptions = {
        from: 'rakshit.dev02@gmail.com',
        to: 'harshtiwari867@gmail.com',
        subject: `${req.body.name} Want's to Contact You!`,
        text: `${req.body.name},
                ${req.body.Email},
                ${req.body.phone},
                ${req.body.query}.`
    };
    console.log(req.body)
    transporter.sendMail(mailOptions, function(error,info){
        if (error){
            console.log('Error Occurs');
        } else{
            console.log('Email Sent : '+ info.response);
        }
    });
    res.render('contact-hi.pug');
})
app.get('/about-hi', (req, res)=>{
    res.render('about-hi.pug');
})
app.get('/about-en', (req, res)=>{
    res.render('about-en.pug');
})
app.get('/admin', (req, res)=>{
    res.render('admin.pug');
})
app.post('/admin', (req, res)=>{
    
})


// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});