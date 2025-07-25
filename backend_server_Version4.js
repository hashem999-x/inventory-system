import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import userRoutes from "./routes/users.js";
import branchRoutes from "./routes/branches.js";
import productRoutes from "./routes/products.js";
import inventoryRoutes from "./routes/inventory.js";
import vendorRoutes from "./routes/vendors.js";
import purchaseOrderRoutes from "./routes/purchaseOrders.js";
import auditLogRoutes from "./routes/auditLogs.js";
import reorderRequestsRoutes from "./routes/reorderRequests.js";
import returnsRoutes from "./routes/returns.js";
import priceHistoryRoutes from "./routes/priceHistory.js";
import messagesRoutes from "./routes/messages.js";

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/inventory", { useNewUrlParser: true, useUnifiedTopology: true });

app.use("/api/users", userRoutes);
app.use("/api/branches", branchRoutes);
app.use("/api/products", productRoutes);
app.use("/api/inventory", inventoryRoutes);
app.use("/api/vendors", vendorRoutes);
app.use("/api/purchaseOrders", purchaseOrderRoutes);
app.use("/api/auditLogs", auditLogRoutes);
app.use("/api/reorderRequests", reorderRequestsRoutes);
app.use("/api/returns", returnsRoutes);
app.use("/api/priceHistory", priceHistoryRoutes);
app.use("/api/messages", messagesRoutes);

app.listen(3001, () => {
  console.log("Backend running on http://localhost:3001");
});