var mongoose = require('mongoose');

mongoose.connect('/users/register', function(err){
  if(err){
    console.error('MongoDB connection error: ' + JSON.stringify(err, undefined, 2));
  }
});

var db = mongoose.connection;
