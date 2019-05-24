var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Ashish:<1234>@student-alumni-scheduler-k1koc.mongodb.net/test?retryWrites=true', function(err){
  if(err){
    console.error('MongoDB connection error: ' + JSON.stringify(err, undefined, 2));
  }
});

var db = mongoose.connection;
