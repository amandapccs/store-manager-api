class SalesRepository {
  constructor(connection) {
    this.connection = connection;
  }

  async createSale() {
      const query = 'INSERT INTO StoreManager.sales (date) VALUES (NOW())';
      const [{ insertId }] = await this.connection.query(query);
    
      return { id: insertId };
    }

  async createSalesProducts(saleProduct) {
      const { saleId, productId, quantity } = saleProduct;
      const query = `INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity)
      VALUES (?, ?, ?)`;
    
      await this.connection.query(query, [saleId, productId, quantity]);
      return { productId, quantity };
    }

  async getAll() {
      const query = `SELECT sale_id AS saleId, date, product_id AS productId, quantity 
        FROM StoreManager.sales_products as sp
        JOIN StoreManager.sales as s
        ON sp.sale_id = s.id`;
      const [result] = await this.connection.query(query);
      return result;
    }
    
  async getById(id) {
    const query = `SELECT date, product_id AS productId, quantity 
      FROM StoreManager.sales_products as sp
      JOIN StoreManager.sales as s
      ON sp.sale_id = s.id
      WHERE sp.sale_id = ?`;
      const [result] = await this.connection.query(query, [id]);
    
    if (result.length === 0) return null;
    return result;
    }
    
  async remove (id) {
      await this.connection.query('DELETE FROM StoreManager.sales WHERE id = ?', [id]);
    }
}

module.exports = { SalesRepository };
