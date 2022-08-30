class SalesController {
  constructor(service) {
    this.service = service;
  }

  async create(req, res) {
    const createProduct = await this.service.createSale(req.body);
    res.status(201).json(createProduct);
  }

  async getAll(req, res) {
    const sales = await this.service.getAll();
    res.status(200).json(sales);
  };

  async getById(req, res) {
    const { id } = req.params;
    const sale = await this.service.getById(id);
    res.status(200).json(sale);
  };

  async update(req, res) {
    const { id } = req.params;
    await this.service.update(id, req.body);
    res.status(200).json({ saleId: id, itemsUpdated: req.body });
  }

  async remove(req, res) {
    const { id } = req.params;
    await this.service.remove(id);
    res.status(204).send();
  };
}

module.exports = { SalesController };