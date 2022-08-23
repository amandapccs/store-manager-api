const CustomError = require('../../middlewares/custom.error');

class SalesService {
  constructor(repository) {
    this.repository = repository;
  }

  async createSale(saleInfo) {
    const { id } = await this.repository.createSale();
    const sales = await Promise.all(
      saleInfo.map(({ productId, quantity }) =>
        model.createSalesProducts({ saleId: id, productId, quantity })),
    );
    
    return { id, itemsSold: sales };
  }

  async getAll () {
    const sales = await this.repository.getAll();
    return sales;
  };

  async getById (id) {
    const sale = await this.repository.getById(id);
    if (!sale) return null;

    return sale;
  };

  async checkIfExists (id) {
    const sale = await this.repository.getById(id);
    if (!sale) throw new CustomError(404, 'Sale not found');
  };

  async remove (id) {
    await this.repository.remove(id);
  };
}

module.exports = { SalesService };