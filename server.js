const express = require('express');
const connectDB = require('./DB/Connetion');
const app = express();
/////
var mongoose = require('mongoose');



connectDB();

var Schema = mongoose.Schema;
app.use(express.json({extended:false}));
app.use('/api/userModel', require('./Api/User'));
app.use('/api/personModel', require('./Api/Person'));



var personSchema = new Schema({
    firstName: String,
    lastName: {type: String, required: true},
    age: {type: Number, min:10},
  });

  personSchema.pre('save', (next)=> {
    console.log(this);  
    this.age = 20;
    next();
    }
    );
  
  var Person = mongoose.model('Person', personSchema);
  
  var david = new Person({ firstName: "David3", lastName: "Smith", age: 25 });
  
  //david.save()
  var bob = new Person({ firstName: "Bob1",lastName: "Cohen2" ,age:10});
  
//   bob.save((error, result) => {
//     if(error){
//         console.log(error.message);
//     }
//     else{
//          console.log(result);
//     }
//     });




var beerSchema = new Schema({
    name: String,
    abv: Number,
    style: String
  });
  
var Beer = mongoose.model('Beer', beerSchema);
var goldstar = new Beer ({ name: "Goldstar", abv: 5, style: "unfiltred" });


//goldstar.save();

///////
const Port = process.env.Port || 3000;

app.listen(Port, () => console.log('Server started'));

// var query = Person.find({age:28},(error, result) => {
// if(error){return console.log(error); }
// console.log(result);
// });

