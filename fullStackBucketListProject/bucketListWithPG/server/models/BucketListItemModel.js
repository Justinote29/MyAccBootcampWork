// we need to require mongoose here too
const mongoose = require("mongoose");

//Build Schema
const bucketListItemSchema = mongoose.Schema({
  description: {
    type: String,
    required: [true, "Must have a description"],
    maxLength: 40,
  },
  isComplete: {
    type: Boolean,
    default: false,
  },
});
//Build Model and export it

exports.BucketListItemModel = mongoose.model(
  "bucket_items",
  bucketListItemSchema
);
