const Product = require("../models/Product");

exports.addProduct = async (req, res) => {
  try {
    const { name, image, price, description } = req.body;

    const product = new Product({
      name,
      image, 
      price, 
      description
    });

    if (!product) {
      await product.save();
      res.status(201);
      res.json({
        message: "Product added successfully!"
      })
    } else {
      res.status(409)
      res.json({
        message: "product already exist!"
      })
    }

    console.log(product);
  } catch (error) {
    res.status(500);
    res.json({
      message: "Unable to create product",
      err: error.message
    })

  }
}

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find({ });
    console.log(products);

    if (products) {
      res.json({
        message: "Here are the products available",
        prods: products
      });
      res.status(200);
    } else {
      res.send("No available product!")
    }

  } catch (error) {
    res.status(500);
    res.json({
      message: "Unable to get products",
      err: error.message
    })
  }
}