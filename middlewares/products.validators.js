const Joi = require('joi');
const CustomError = require('./custom.error');

const validateProducts = async (req, res, next) => {
  const schema = Joi.object({ name: Joi.string().min(5).required() });
  
  const { error } = schema.validate(req.body);

  if (error) {
    throw new CustomError(error.message.includes('required') ? 400 : 422, error.message);
  }

  next();
};

const productsValidators = { validateProducts };

module.exports = { productsValidators };