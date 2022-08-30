class ProductsRepository {
  constructor(db) {
    this.db = db;
  }

  async getAll() {
    const [result] = await this.db.query('SELECT * FROM StoreManager.products ORDER BY id');
    return result;
  }
  
  async getById(requestedId) {
    const [[result]] = await this.db
      .query('SELECT * FROM StoreManager.products WHERE id = ?', [requestedId]);
  
    if (!result) return null;
    return result;
  }
  
  async create(productName) {
    const [result] = await this.db
      .query('INSERT INTO StoreManager.products (name) VALUES (?)', [productName]);
  
    return { id: result.insertId, name: productName };
  }
  
  async update(name, id) {
    await this.db
      .query('UPDATE StoreManager.products SET name = ? WHERE id = ?', [name, id]);
    return { id, name };
  }
  
  async remove(id) {
    await this.db.query('DELETE FROM StoreManager.products WHERE id = ?', [id]);
    return JSON.stringify({ message: `Product with ${id} has been removed from the DB` });
  }
}

module.exports = { ProductsRepository };