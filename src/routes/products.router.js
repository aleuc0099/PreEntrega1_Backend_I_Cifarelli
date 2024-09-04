const express = require("express");
const router = express.Router();

const products = [];

router.get("/api/products", (req, res) => {
  res.json(products);
});

router.get("/api/products/:pid", (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find((p) => p.id === productId);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: "product not found" });
  }
});

router.post("/api/products", (req, res) => {
  const { title } = req.body;
  const { description } = req.body;
  const { code } = req.body;
  const { price } = parseInt(req.body);
  const { stock } = parseInt(req.body);
  const { category } = req.body;
  const newProduct = {
    id: products.length + 1,
    title: title,
    description: description,
    code: code,
    price: price,
    status: true,
    stock: stock,
    category: category,
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});



module.exports = router;
