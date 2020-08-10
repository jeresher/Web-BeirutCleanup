var mongoose = require("mongoose");

var postSchema = new mongoose.Schema({
    eventName: String,
    eventDate: {type: Date, default: Date.now},
    eventLocationDescription: String,
    eventDescription: String,
    eventLongLat: [ Number ], // [ Longtitude, Latitude ]
    eventComments: [ String ]
});

var Post = mongoose.model('Post', postSchema);

module.exports = {
  Post: Post
};