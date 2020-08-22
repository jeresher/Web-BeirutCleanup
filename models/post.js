var mongoose = require("mongoose");
const { Decimal128 } = require("bson");

var postSchema = new mongoose.Schema({
  organizationName: {type: String, default: "none"},
  eventName: String,
  eventDate: Date,
  eventDescription: String,
  eventLongLat: [ Decimal128 ], // [ Longtitude, Latitude ]
  eventComments: {type: [ String ], default: []},
  locked: {type: Boolean, default: false}
});

var Post = mongoose.model('Post', postSchema);

module.exports = {
  Post: Post
};