//todo: Router de visualización  de lista de productos
// endpoint => /realtimeproducts

import express from "express";
const router = express.Router();

router.get("/realtimeproducts", (req, res) => {
  res.render("index", {});
});

export default router;