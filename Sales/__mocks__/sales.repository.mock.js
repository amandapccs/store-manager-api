const { fakeSales, fakeSalesById, createSaleResult, result, createdSaleProductResult, updateSaleInfo } = require("./connection.mock");

createSaleResult

const fakeSalesRepository = {
  getAll: () => Promise.resolve(fakeSales),
  getById: (id) => Promise.resolve(fakeSalesById),
  createSale: (name) => Promise.resolve(createSaleResult),
  createSalesProducts: (saleProduct) => Promise.resolve(createdSaleProductResult),
  update: (id, salesInfo) => Promise.resolve(undefined),
  remove: (id) => Promise.resolve(undefined)
}

const rejectSalesRepository = {
  getAll: () => Promise.reject(new Error('Something went wrong')),
  getById: (id) => Promise.reject(new Error('Something went wrong')),
  create: (name) => Promise.reject(new Error('Something went wrong')),
  update: (name, id) => Promise.reject(new Error('Something went wrong')),
  remove: (id) => Promise.reject(new Error('Something went wrong'))
};

module.exports = { fakeSalesRepository, rejectSalesRepository };