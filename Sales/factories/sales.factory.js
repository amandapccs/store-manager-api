const { connection } = require("../../db/connection");
const { SalesController } = require("../controllers/sales.controller");
const { SalesRepository } = require("../repositories/sales.repository");
const { SalesService } = require("../services/sales.service");

function salesFactory() {
  const salesRepository = new SalesRepository(connection);
  const salesService = new SalesService(salesRepository);
  const salesController = new SalesController(salesService);

  return salesController;
}

const sales = salesFactory();

module.exports = { sales };