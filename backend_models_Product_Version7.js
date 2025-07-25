import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
  name: String,
  barcode: String,
  price: Number,
  minStock: Number,
  image: String,
  vendor: { type: mongoose.Schema.Types.ObjectId, ref: "Vendor" }
});
export default mongoose.model("Product", productSchema);