// Inserting data in mongo db
use irfancart
db.items.insertOne({
    name:"Samsung 30s",price:22000,rating:4.5,qty:233,sold:98
})

db.items.insertMany([{
    name:"Samsung 30s",price:22000,rating:4.5,qty:233,sold:98,},{name:"Moto 30S",price:29000,rating:3.5,qty:133,sold:598,},{name:"Realme 30S",price:229000,rating:3.5,qty:533,sold:698,isBig:true}])