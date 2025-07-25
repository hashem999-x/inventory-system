import mongoose from "mongoose";
const branchSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: String,
  phone: String
});
export default mongoose.model("Branch", branchSchema);