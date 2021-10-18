const express = require("express");
const path = require("path");
const app = express();
const port = 8000;
var mongoose = require('mongoose');
const bodyParser = require("body-parser");
var mongoDB = 'mongodb://localhost/contactCricket';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

// Defining moongoose schema
var contactSchema= new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    adress: String,
    desc: String
  });
  var contact = mongoose.model('Contact',contactSchema);  

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use('/static/img', express.static('static/img')) // For serving static files
 // For serving static files

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory
 
// ENDPOINTS
app.get('/', (req, res)=>{
    const params = {}
    res.status(200).render('home.pug', params);
})
app.get('/contact', (req, res)=>{
    const params = {}
    res.status(200).render('contact.pug', params);
})  

app.post('/contact', (req, res)=>{
    var myData=new contact(req.body);
    myData.save().then(()=>{
        res.send("This item has been saved to the database")
    }).catch(()=>{
        res.status(400).send("Item was not saved to the database")
    });
    // res.status(200).render('contact.pug');
})

// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});