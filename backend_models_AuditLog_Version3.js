import mongoose from "mongoose";
const auditLogSchema = new mongoose.Schema({
  action: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  timestamp: { type: Date, default: Date.now },
  details: String
});
export default mongoose.model("AuditLog", auditLogSchema);