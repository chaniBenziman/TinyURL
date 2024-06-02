import mongoose from "mongoose";

const ClickSchema = new mongoose.Schema({
  insertedAt: {
    type: Date,
    default: Date.now,
    required: true
  },
  ipAddress: {
    type: String,
    required: true
  },
  targetParamValue: {
    type: String,
    default: ""
  }
}, { _id: true });

const TargetValueSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  }
}, { _id: true });

const LinkSchema = new mongoose.Schema({
  originalUrl: {
    type: String,
    required: true
  },
  clicks: [ClickSchema],
  targetParamName: {
    type: String,
    default: "t"
  },
  targetValues: [TargetValueSchema]
});

const Link = mongoose.model("links", LinkSchema);
export default  Link;