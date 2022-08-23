const fakeData = { productId: 1, name: 'Blahblah' };
const fakeCreatedData = { id: 1, name: 'Blahblah' };

const productsService = {
  getAll: () => Promise.resolve([fakeData]),
  getById: (id) => Promise.resolve(fakeData),
  create: (name) => Promise.resolve(fakeCreatedData),
  update: (name, id) => Promise.resolve(fakeCreatedData),
  remove: (id) => Promise.resolve(undefined)
}

const rejectProductsService = {
  getAll: () => Promise.reject(new Error('Something went wrong')),
  getById: (id) => Promise.reject(new Error('Something went wrong')),
  create: (name) => Promise.reject(new Error('Something went wrong')),
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
  fakeData, fakeCreatedData, productsService, rejectProductsService
}