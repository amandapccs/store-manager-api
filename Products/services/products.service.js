const CustomError = require('../../middlewares/custom.error');

class ProductsService {
  constructor(repository) {
    this.repository = repository;
  }

  async getAll() {
    const products = await this.repository.getAll();
    return products;
  }

  async getById(requestedId) {
  const product = await this.repository.getById(requestedId);
  if (!product) throw new CustomError(404, 'Product not found');

  return product;
  }

  async create(productName) {
    const createProduct = await this.repository.create(productName);
    if (!createProduct) return false;

    return createProduct;
  }

 async update({ name, id }) {
    const product = await this.repository.getById(id);
    if (!product) throw new CustomError(404, 'Product not found');

    const updatedProduct = await this.repository.update(name, id);
    return updatedProduct;
  }

  async remove(id) {
    await this.repository.remove(id);
  }
}

module.exports = { ProductsService };