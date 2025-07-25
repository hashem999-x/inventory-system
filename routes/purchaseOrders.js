import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Purchase Orders route works!" });
});

export default router;
