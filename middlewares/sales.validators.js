const Joi = require('joi');
const CustomError = require('./custom.error');
const { productsService } = require('../Products/services/products.service');
const { salesService } = require('../Sales/services/sales.service');
const { salesModels } = require('../Sales/repositories/sales.repository');

const checkRequiredFields = async (req, _res, next) => {
  const sales = req.body;

  const schema = Joi.object({
    productId: Joi.required(),
    quantity: Joi.required(),
  });

  sales.forEach((sale) => {
    const { error } = schema.validate(sale);
    if (error) throw new CustomError(400, error.message);
  });

  next();
};

const checkMinimunQuantity = async (req, _res, next) => {
  const sales = req.body;

  const schema = Joi.object({
    productId: Joi.number(),
    quantity: Joi.number().min(1).required(),
  });

  sales.forEach((sale) => {
    const { error } = schema.validate(sale);
    if (error) throw new CustomError(422, error.message);
  });

  next();
};

const checkId = async (req, _res, next) => {
  const sales = req.body;

  await Promise.all(
    sales.map((sale) => productsService.checkIfExists(productsModel, sale.productId)),
  );

  next();
};

const checkSale = async (req, res, next) => {
  const { id } = req.params;
  await salesService.checkIfExists(salesModels, id);
  next();
};

const salesValidators = { checkRequiredFields, checkMinimunQuantity, checkId, checkSale };

module.exports = { salesValidators };