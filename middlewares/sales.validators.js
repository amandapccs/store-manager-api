const Joi = require('joi');
const CustomError = require('./custom.error');

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

const salesValidators = { checkRequiredFields, checkMinimunQuantity };

module.exports = { salesValidators };