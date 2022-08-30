class SalesRepository {
  constructor(db) {
    this.db = db;
  }

  async createSale() {
      const query = 'INSERT INTO StoreManager.sales (date) VALUES (NOW())';
      const [{ insertId }] = await this.db.query(query);
    
      return { id: insertId };
    }

  async createSalesProducts(saleProduct) {
      const { saleId, productId, quantity } = saleProduct;
      const query = `INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity)
      VALUES (?, ?, ?)`;
    
      await this.db.query(query, [saleId, productId, quantity]);
      return { productId, quantity };
    }

  async getAll() {
      const query = `SELECT sale_id AS saleId, date, product_id AS productId, quantity 
        FROM StoreManager.sales_products as sp
        JOIN StoreManager.sales as s
        ON sp.sale_id = s.id`;
      const [result] = await this.db.query(query);
      return result;
    }
    
  async getById(id) {
    const query = `SELECT date, product_id AS productId, quantity 
      FROM StoreManager.sales_products as sp
      JOIN StoreManager.sales as s
      ON sp.sale_id = s.id
      WHERE sp.sale_id = ?`;
      const [result] = await this.db.query(query, [id]);
    
    if (result.length === 0) return null;
    return result;
    }

  async update (id, salesInfo) {
    const { productId, quantity } = salesInfo;
  
    const query = `UPDATE StoreManager.sales_products
      SET quantity = ?
      WHERE product_id = ? AND sale_id = ?`;
  
    await this.db.query(query, [quantity, productId, id]);
  }
    
  async remove (id) {
      await this.db.query('DELETE FROM StoreManager.sales WHERE id = ?', [id]);
    }
}

module.exports = { SalesRepository };
