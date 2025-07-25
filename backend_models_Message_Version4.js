import mongoose from "mongoose";
const messageSchema = new mongoose.Schema({
  from: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  to: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  text: String,
  createdAt: { type: Date, default: Date.now },
  read: { type: Boolean, default: false }
});
export default mongoose.model("Message", messageSchema);