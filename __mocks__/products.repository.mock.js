const fakeData = { productId: 1, name: 'Blahblah' };
const fakeCreatedData = { id: 1, name: 'Blahblah' };

const fakeProductsRepository = {
  getAll: () => Promise.resolve(fakeData),
  getById: (id) => Promise.resolve(fakeData),
  create: (name) => Promise.resolve(fakeCreatedData),
  update: (name, id) => Promise.resolve(fakeCreatedData),
  remove: (id) => Promise.resolve(JSON.stringify({ message: `Product with ${id} has been removed from the DB` }))
}

const rejectProductsRepository = {
  getAll: () => Promise.reject(new Error('Something went wrong')),
  getById: (id) => Promise.reject(new Error('Something went wrong')),
  create: (name) => Promise.reject(new Error('Something went wrong')),
  update: (name, id) => Promise.reject(new Error('Something went wrong')),
  remove: (id) => Promise.reject(new Error('Something went wrong'))
};

module.exports = { fakeData, fakeCreatedData, fakeProductsRepository, rejectProductsRepository };