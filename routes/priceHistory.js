import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Price History route works!" });
});

export default router;
