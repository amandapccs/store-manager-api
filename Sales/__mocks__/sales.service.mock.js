const { fakeSales, fakeSalesById, updateSaleInfo } = require("./connection.mock")

const salesService = {
  getAll: () => Promise.resolve(fakeSales),
  getById: (id) => Promise.resolve(fakeSalesById),
  createSale: (name) => Promise.resolve({id: 1, itemsSold: [updateSaleInfo] }),
  update: (id, salesInfo) => Promise.resolve(undefined),
  remove: (id) => Promise.resolve(undefined)
}

const rejectSalesService = {
  getAll: () => Promise.reject(new Error('Something went wrong')),
  getById: (id) => Promise.reject(new Error('Something went wrong')),
  createSale: (name) => Promise.reject(new Error('Something went wrong')),
  update: (name, id) => Promise.reject(new Error('Something went wrong')),
  remove: (id) => Promise.reject(new Error('Something went wrong'))
}

module.exports = {
  mockRequest: () => {
    const req = {}
    req.body = jest.fn().mockReturnValue(req)
    req.params = jest.fn().mockReturnValue(req)
    req.query = jest.fn().mockReturnValue(req)
    return req
  },
  mockResponse: () => {
    const res = {}
    res.send = jest.fn().mockReturnValue(res)
    res.status = jest.fn().mockReturnValue(res)
    res.json = jest.fn().mockReturnValue(res)
    return res
  },
  salesService,
  rejectSalesService
}