const express = require("express");
const path = require("path");
const app = express();
const port = 80;
const fs=require('fs');
// Express Specific stuff
app.use("/static", express.static("static")); //For serving HTML files
app.use(express.static("./static"))
app.use(express.urlencoded());

// PUG specific stuff
app.set("view engine", "pug"); //Set the template engine as pug
app.set("views", path.join(__dirname, "views")); //Set the views directory

// END points
app.get("/", (req, res) => {
    const con="This is the best content on the internet so use it wisely "
    const params={'title':'pubg is the best game','content':con}
  res.status(200).render('index.pug',params);
});
app.post('/',(req,res)=>{
  name=req.body.name;
  age=req.body.age;
  gender=req.body.gender;
  adress=req.body.adress;
  more=req.body.more;
let outputToWrite=`the name of the client is ${name},${age} years old,${gender},residing at ${adress}. More about him/her: ${more}`;
  fs.writeFileSync('output.txt',outputToWrite);
  const params={'message':'Your message has been submitted sucessfully'}
  res.status(200).render('index.pug',params);
})
// Start the server
app.listen(port,()=>{
    console.log(`The application started sucessfully on port  ${port} `);
})