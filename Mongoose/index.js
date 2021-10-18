// Getting started
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/irfancart", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  // We are connected!
//   console.log("We are connected");
});
const kittySchema = new mongoose.Schema({
  name: String,
});
kittySchema.methods.speak = function () {
  const greeting = "My name is " + this.name;
  console.log(greeting);
};

const Kitten = mongoose.model("harryKitten", kittySchema);


const harryKitty = new Kitten({ name: "harryKitty" });
const harryKitty2 = new Kitten({ name: "harryKitty2" });
// console.log(harryKitty.name);
// harryKitty.speak();

 harryKitty.save();
harryKitty.speak();

harryKitty2.save();
harryKitty2.speak();

const kittens =  Kitten.find();
console.log(kittens); 

Kitten.find({ name: harryKitty });