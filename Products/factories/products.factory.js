const { connection } = require("../../db/connection");
const { ProductsController } = require("../controllers/products.controller");
const { ProductsService } = require("../services/products.service");
const { ProductsRepository } = require("../repositories/products.repository");

function productsFactory () {
  const productRepository = new ProductsRepository(connection);
  const productService = new ProductsService(productRepository);
  const productController = new ProductsController(productService);

  return productController;
}

const products = productsFactory();

module.exports = { products };