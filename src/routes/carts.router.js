const express = require("express");
const router = express.Router();

const carts = [];

router.get("/api/carts", (req, res) => {
  const newProduct = req.body;
  carts.push(newProduct);
  res.json({ message: "Cart created successfully" });
});

module.exports = router;
