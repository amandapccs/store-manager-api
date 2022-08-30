const CustomError = require("../../middlewares/custom.error");

class SalesService {
  constructor(salesRepository, productRepository) {
    this.salesRepository = salesRepository;
    this.productRepository = productRepository;
  }

  async createSale(saleInfo) {
    const { id } = await this.salesRepository.createSale();
    const sales = await Promise.all(
      saleInfo.map(({ productId, quantity }) =>
        this.salesRepository.createSalesProducts({ saleId: id, productId, quantity })),
    );
    
    return { id, itemsSold: sales };
  }

  async getAll () {
    const sales = await this.salesRepository.getAll();
    return sales;
  };

  async getById (id) {
    const sale = await this.salesRepository.getById(id);
    if (!sale) return null;

    return sale;
  };

  async #checkIfSaleExists (id) {
    const sale = await this.salesRepository.getById(id);
    if (!sale) return JSON.stringify({ error: 'Sale not found', status: 404 });
  };

  async #productExists (productId) {
    const product = await this.productRepository.getById(productId);
    return product;
  };

  async update (id, salesInfo) {
    await this.#checkIfSaleExists(id);
    for (const sales of salesInfo) {
      if (!(await this.#productExists(sales.productId))) {
        throw new CustomError(404, 'Product not found');
      }
      this.salesRepository.update(id, sales);
    }
  };

  async remove (id) {
    await this.salesRepository.remove(id);
  };
}

module.exports = { SalesService };