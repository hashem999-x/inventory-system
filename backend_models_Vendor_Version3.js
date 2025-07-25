import mongoose from "mongoose";
const vendorSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String
});
export default mongoose.model("Vendor", vendorSchema);