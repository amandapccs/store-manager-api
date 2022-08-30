const { db } = require("../../db/connection");
const { productRepository } = require("../../Products/factories/products.factory");
const { SalesController } = require("../controllers/sales.controller");
const { SalesRepository } = require("../repositories/sales.repository");
const { SalesService } = require("../services/sales.service");

function salesFactory() {
  const salesRepository = new SalesRepository(db);
  const salesService = new SalesService(salesRepository, productRepository);
  const salesController = new SalesController(salesService);

  return { salesController, salesService };
}


const { salesController, salesService } = salesFactory();
const sales = salesController;
module.exports = { sales, salesService };