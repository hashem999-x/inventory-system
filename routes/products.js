import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Products route works!" });
});

export default router;
