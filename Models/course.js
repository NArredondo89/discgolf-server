const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const courseSchema = new Schema({
    name : {
      type: String,
      required: true,
    },
    condition: {
      type: String,
    },
    location: {
      type: String,
    },
    LocationUrl : {
      type:  String,
    },
    holes: {
      type: Number, 
    },
    services: {
      type: String, 
    },
    established : {
      type:  Number,
    },
    property: {
      type: String, 
    },
    tees: {
      type: String, 
    },
    availability : {
      type:  String,
    },
    announcements: {
      type: String, 
    },
    weeklyAnnouncements: {
      type: String, 
    }
})

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;