import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: String,
  name: String,
  branch: { type: mongoose.Schema.Types.ObjectId, ref: "Branch" },
  role: { type: String, enum: ["admin", "manager", "employee"], default: "employee" }
});
export default mongoose.model("User", userSchema);