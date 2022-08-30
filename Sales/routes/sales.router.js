const express = require('express');
const { sales } = require('../factories/sales.factory');
const { salesValidators } = require('../../middlewares/sales.validators');
const salesRouter = express.Router();

salesRouter.get('/', sales.getAll.bind(sales));

salesRouter.get('/:id',
  // salesValidators.checkSale,
  sales.getById.bind(sales)
  );

salesRouter.post('/',
  salesValidators.checkRequiredFields,
  salesValidators.checkMinimunQuantity,
  // salesValidators.checkId,
  sales.create.bind(sales)
  );

salesRouter.delete('/:id',
  // salesValidators.checkSale,
  sales.remove.bind(sales)
  );

salesRouter.put(
    '/:id',
    // salesValidators.salesValidations.checkProductById.bind(salesValidators.salesValidations),
    salesValidators.checkRequiredFields,
    salesValidators.checkMinimunQuantity,
    // salesValidators.salesValidations.checkSaleById,
    sales.update.bind(sales),
  );

module.exports = salesRouter;