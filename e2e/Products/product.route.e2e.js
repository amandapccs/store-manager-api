const express = require('express');
const { products } = require('./products.factory.e2e');
const { productsValidators } = require('../../middlewares/products.validators');
const productsRouter = express.Router();

productsRouter.put(
  '/:id',
  productsValidators.validateProducts,
  products.update.bind(products)
);

productsRouter.get(
  '/',
  products.getAll.bind(products)
);

productsRouter.get(
  '/:id',
  products.getById.bind(products)
);

productsRouter.post(
  '/',
  productsValidators.validateProducts,
  products.create.bind(products)
);

productsRouter.delete(
  '/:id',
  products.remove.bind(products)
);

module.exports = productsRouter;