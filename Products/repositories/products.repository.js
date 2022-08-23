class ProductsRepository {
  constructor(connection) {
    this.connection = connection;
  }

  async getAll() {
    const [result] = await this.connection.query('SELECT * FROM StoreManager.products ORDER BY id');
    return result;
  }
  
  async getById(requestedId) {
    const [[result]] = await this.connection
      .query('SELECT * FROM StoreManager.products WHERE id = ?', [requestedId]);
  
    if (!result) return null;
    return result;
  }
  
  async create(productName) {
    const [result] = await this.connection
      .query('INSERT INTO StoreManager.products (name) VALUES (?)', [productName]);
  
    return { id: result.insertId, name: productName };
  }
  
  async update(name, id) {
    await this.connection
      .query('UPDATE StoreManager.products SET name = ? WHERE id = ?', [name, id]);
    return { id, name };
  }
  
  async remove(id) {
    await this.connection.query('DELETE FROM StoreManager.products WHERE id = ?', [id]);
    return JSON.stringify({ message: `Product with ${id} has been removed from the DB` });
  }
}

module.exports = { ProductsRepository };