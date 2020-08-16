var mongoose = require("mongoose");
const { Decimal128 } = require("bson");

var postSchema = new mongoose.Schema({
    eventName: String,
    eventDate: Date,
    eventDescription: String,
    eventLongLat: [ Decimal128 ], // [ Longtitude, Latitude ]
    eventComments: [ String ]
});

var Post = mongoose.model('Post', postSchema);

module.exports = {
  Post: Post
};