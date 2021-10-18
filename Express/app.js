const express = require("express");
const path = require("path");
const app = express();
const port = 80;
//For serving static files

app.use("/static", express.static("static"));

// Set the template engine for pug

app.set("view engine", "pug");

//Set the views directory
app.set("views", path.join(__dirname, "views"));

//Our pug demo endpoint
app.get("/demo", (req, res) => {
  res
    .status(200)
    .render("demo", {
      title: "Hey Harry",
      message: "Hello there and thanks !",
    });
});

app.get("/", (req, res) => {
  res.status(200).send("This is my homepage in my first app in express");
});

app.get("/about", (req, res) => {
  res.send("This is my about page in my first app in express");
});

app.post("/about", (req, res) => {
  res.send("This is my post request about page in my first app in express");
});

app.get("/this", (req, res) => {
  res.status(400).send("This page is not found");
});

app.listen(port, () => {
  console.log(`The application started sucessfully on port ${port}`);
});
