const { SalesController } = require("../../Sales/controllers/sales.controller");
const { SalesRepository } = require("../../Sales/repositories/sales.repository");
const { SalesService } = require("../../Sales/services/sales.service");
const { dbTest } = require("../connection.e2e");

function factory() {
  const salesRepository = new SalesRepository(dbTest);
  const salesService = new SalesService(salesRepository);
  const salesController = new SalesController(salesService);
  return salesController;
}

const sales = factory();
module.exports = { sales };