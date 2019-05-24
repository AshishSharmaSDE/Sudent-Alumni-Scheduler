var mongoose = require('mongoose');
const uri ="mongodb+srv://Ashish:<1234>@cluster0-k1koc.mongodb.net/test?retryWrites=true";

mongoose.connect(uri, function(err){
  if(err){
    console.error('MongoDB connection error: ' + JSON.stringify(err, undefined, 2));
  }
});

var db = mongoose.connection;
