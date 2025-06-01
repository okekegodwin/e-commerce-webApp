const express = require("express");
const router = express.Router();

const productController = require("../controllers/admin.controller");

router.post("/product", productController.addProduct);
router.get("/product", productController.getProducts);

module.exports = router;