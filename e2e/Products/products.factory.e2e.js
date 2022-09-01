const { ProductsController } = require("../../Products/controllers/products.controller");
const { ProductsRepository } = require("../../Products/repositories/products.repository");
const { ProductsService } = require("../../Products/services/products.service");
const { dbTest } = require("../connection.e2e");

function factory() {
  const productsRepository = new ProductsRepository(dbTest);
  const productsService = new ProductsService(productsRepository);
  const productsController = new ProductsController(productsService);
  return productsController;
}

const products = factory();

module.exports = { products };