class ProductsController {
  constructor(service) {
    this.service = service;
  }

  async getAll(req, res) {
    const products = await this.service.getAll();
    res.status(200).json(products);
  }
    
  async getById(req, res) {
    const { id } = req.params;
    const product = await this.service.getById(id);
    
    if (!product) return res.status(404).json({ message: 'Product not found' });
    
    res.status(200).json(product);
  }
    
  async create(req, res) {
    const { name } = req.body;
    const createProduct = await this.service.create(name);
    res.status(201).json(createProduct);
  }
    
  async search(req, res) {
    const { q } = req.query;
    const products = await this.service.getAll();
    const filteredProducts = products.filter((product) => product.name.includes(q));
    res.status(200).json(filteredProducts || []);
  }
    
  async update(req, res) {
    const { id } = req.params;
    const { name } = req.body;
    const updatedProduct = await this.service.update({ name, id });
    res.status(200).json(updatedProduct);
  }
    
  async remove(req, res) {
    const { id } = req.params;
      await this.service.remove(id);
      res.status(204).send();
  }
}

module.exports = { ProductsController };