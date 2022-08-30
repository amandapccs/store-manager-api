const { db } = require("../../db/connection");
const { ProductsController } = require("../controllers/products.controller");
const { ProductsService } = require("../services/products.service");
const { ProductsRepository } = require("../repositories/products.repository");

function productsFactory () {
  const productRepository = new ProductsRepository(db);
  const productService = new ProductsService(productRepository);
  const productController = new ProductsController(productService);

  return { productController, productRepository };
}

const { productController, productRepository } = productsFactory();
const products = productController;

module.exports = { products, productRepository };