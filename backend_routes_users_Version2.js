import express from "express";
import User from "../models/User.js";
const router = express.Router();

router.get("/", async (req, res) => {
  res.json(await User.find().populate('branch'));
});
router.post("/", async (req, res) => {
  res.json(await User.create(req.body));
});
router.patch("/:id", async (req, res) => {
  res.json(await User.findByIdAndUpdate(req.params.id, req.body, { new: true }));
});
router.delete("/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

export default router;