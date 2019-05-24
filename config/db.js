var mongoose = require('mongoose');
const uri ="mongodb+srv://Ashish:1234@cluster0-k1koc.mongodb.net/student-alumni-scheduler?retryWrites=true";

mongoose.connect(uri, function(err){
  if(err){
    console.error('Error while connecting to mongodb: ', err);
  } else {
    console.log('connected successfully!');
  }
});


