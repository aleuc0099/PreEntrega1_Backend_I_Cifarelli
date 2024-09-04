const express = require("express");
const router = express.Router();
const fs = require("fs").promises;

let carts = [];
let products = [];

const writeFile = async () => {
  const data = JSON.stringify(carts, null, 2);
  try {
    await fs.writeFile("cart.json", data);
    console.log("file created successfully");
  } catch (error) {
    console.error("Error creating file");
  }
};

const rewriteFile = async () => {
  const data = JSON.stringify(carts, null, 2);
  try {
    await fs.writeFile("cart.json", data);
    console.log("file rewriten successfully");
  } catch (error) {
    console.error("Error rewriting file");
  }
};

router.get("/api/carts", (req, res) => {
  res.json(carts);
});

router.get("/api/carts/:cid", (req, res) => {
  const cartId = parseInt(req.params.cid);
  const cart = carts.find((c) => c.id === cartId);
  if (cart) {
    res.json(cart);
  } else {
    res.status(404).json({ error: "cart not found" });
  }
});

router.post("/api/carts", (req, res) => {
  const newCart = {
    id: carts.length + 1,
    products: products,
  };
  carts.push(newCart);
  writeFile();
  res.status(201).json(newCart);
});

router.post("/api/carts/:cid/product/:pid", (req, res) => {
  const cartId = parseInt(req.params.cid);
  const cart = carts.find((c) => c.id === cartId);
  const productId = parseInt(req.params.pid);
  const product = products.find((p) => p.product === productId);
  let newProduct = {
    product: productId,
    quantity: 1,
  };
  if (cart && !product) {
    products.push(newProduct);
    rewriteFile();
    res.status(201).json(newProduct);
  }
  if (product) {
    products.map((p) => (p.quantity = p.quantity + 1));
    rewriteFile();
    res.json(products);
  }
  if (!cart) {
    res.status(404).json({ error: "cart not found" });
  }
});

module.exports = router;
