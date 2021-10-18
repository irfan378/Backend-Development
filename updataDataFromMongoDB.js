use irfancart
show collections
db.items.updateOne({name:"Moto 30S"},{$set: {price: 2}})
db.items.updateMany({name:"Moto 30S"},{$set: {price: 2,rating: 1}})