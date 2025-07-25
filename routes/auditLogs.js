import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Audit Logs route works!" });
});

export default router;
