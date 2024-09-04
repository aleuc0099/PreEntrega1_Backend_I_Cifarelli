const express = require("express");
const router = express.Router();

const products = [];

router.get("/api/products", (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);
  res.json({ message: "Product added successfully" });
});

module.exports = router;