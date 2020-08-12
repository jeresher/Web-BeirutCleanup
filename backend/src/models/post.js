var mongoose = require("mongoose");

var postSchema = new mongoose.Schema({
    eventName: String,
    eventDate: Date,
    eventDescription: String,
    eventLongLat: [ Number ], // [ Longtitude, Latitude ]
    eventComments: [ String ]
});

var Post = mongoose.model('Post', postSchema);

module.exports = {
  Post: Post
};