const { describe, it } = global;
const {
  fakeSales,
  fakeSalesById,
  createSaleResult,
  createdSaleProductResult,
  updateSaleInfo,
  connection,
  idConnection,
  createdConnection,
  rejectConnection 
} = require("../__mocks__/connection.mock");
const { SalesRepository } = require("./sales.repository");

const salesRepository = new SalesRepository(connection);
const rejectSalesRepository = new SalesRepository(rejectConnection);
const idRepository = new SalesRepository(idConnection);
const createdRepository = new SalesRepository(createdConnection);

describe('SalesRepository', () => {
  describe('getAll', () => {
    it('should call connection.query method', async () => {
      const spy = jest.spyOn(connection, 'query');
      await salesRepository.getAll();
      expect(spy).toHaveBeenCalled();
    }),
    it('should return a value that equals fakeData', async () => {
      const result = await salesRepository.getAll();
      expect(result).toEqual(fakeSales);
    }),
    it('should accept a promise', async () => {
      await expect(salesRepository.getAll()).resolves.toBeDefined();
    }),
    it('should reject a promise', async () => {
      await expect(rejectSalesRepository.getAll()).rejects.toThrowError();
    })
  }),
  describe('getById', () => {
    it('should call connection.query method', async () => {
      const spy = jest.spyOn(connection, 'query');
      await idRepository.getById(1);
      expect(spy).toHaveBeenCalled();
    }),
    it('should return a value that equals fakeData', async () => {
      const result = await idRepository.getById(1);
      expect(result).toEqual(fakeSalesById);
    }),
    it('should accept a promise', async () => {
      await expect(idRepository.getById(1)).resolves.toBeDefined();
    }),
    it('should reject a promise', async () => {
      await expect(rejectSalesRepository.getById(1)).rejects.toThrowError();
    })
  }),
  describe('createSale', () => {
    it('should call connection.query method', async () => {
      const spy = jest.spyOn(connection, 'query');
      await createdRepository.createSale();
      expect(spy).toHaveBeenCalled();
    }),
    it('should return an id for the sale', async () => {
      const result = await createdRepository.createSale();
      expect(result).toEqual(createSaleResult);
    }),
    it('should accept a promise', async () => {
      await expect(createdRepository.createSale()).resolves.toBeDefined();
    }),
    it('should reject a promise', async () => {
      await expect(rejectSalesRepository.createSale()).rejects.toThrowError();
    })
  });
  describe('createSalesProducts', () => {
    it('should call connection.query method', async () => {
      const spy = jest.spyOn(connection, 'query');
      await salesRepository.createSalesProducts({ saleId: 1, productId: 1, quantity: 15 })
      expect(spy).toHaveBeenCalled()
    }),
    it('should return a value that equals fakeData', async () => {
      const result = await createdRepository.createSalesProducts({ saleId: 1, productId: 1, quantity: 15 });
      expect(result).toEqual(createdSaleProductResult);
    }),
    it('should accept a promise', async () => {
      await expect(salesRepository.createSalesProducts({ saleId: 1, productId: 1, quantity: 15 })).resolves.toBeDefined();
    }),
    it('should reject a promise', async () => {
      await expect(rejectSalesRepository.createSalesProducts({ saleId: 1, productId: 1, quantity: 15 })).rejects.toThrowError();
    })
  });
  describe('update', () => {
    it('should call connection.query method', async () => {
      const spy = jest.spyOn(connection, 'query');
      await salesRepository.update(1, updateSaleInfo);
      expect(spy).toHaveBeenCalled();
    }),
    it('should return a value that equals fakeData', async () => {
      const result = await salesRepository.update(1, updateSaleInfo);
      expect(result).toBeUndefined();
    }),
    it('should accept a promise', async () => {
      await expect(await salesRepository.update(1, updateSaleInfo)).resolves;
    }),
    it('should reject a promise', async () => {
      await expect(rejectSalesRepository.update(99, updateSaleInfo)).rejects.toThrowError();
    })
  });
  describe('remove', () => {
    it('should call connection.query method', async () => {
      const spy = jest.spyOn(connection, 'query');
      await salesRepository.remove(1);
      expect(spy).toHaveBeenCalled();
    }),
    it('should return a value that equals fakeData', async () => {
      const result = await salesRepository.remove(1);
      expect(result).toBeUndefined();
    }),
    it('should accept a promise', async () => {
      await expect(await salesRepository.remove(1)).resolves;
    }),
    it('should reject a promise', async () => {
      await expect(rejectSalesRepository.remove(99)).rejects.toThrowError();
    })
  });
});