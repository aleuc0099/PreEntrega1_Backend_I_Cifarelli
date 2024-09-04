const express = require("express");
const path = require("path");
const cartsRouter = require("./routes/carts.router.js");
const productsRouter = require("./routes/products.router.js");

const app = express();
const PORT = 2806;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", cartsRouter);
app.use("/", productsRouter);

app.listen(PORT, () => {
  setTimeout(() => {
    console.log(`Server running on port ${PORT}`);
  }, 1000);
});
