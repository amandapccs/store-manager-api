const { describe, it } = global;
const { connection, fakeData, rejectConnection, fakeCreatedData, createdConnection } = require("../../__mocks__/connection.mock");
const { ProductsRepository } = require("./products.repository");

const productsRepository = new ProductsRepository(connection);
const rejectProductsRepository = new ProductsRepository(rejectConnection);
const createdModel = new ProductsRepository(createdConnection);

describe('ProductsModel', () => {
  describe('getAll', () => {
    it('should return a value that equals fakeData', async () => {
      const result = await productsRepository.getAll();
      console.log('result ---->', ...result);
      expect(...result).toEqual(fakeData);
    });

    it('should call connection.query method', async () => {
      const spy = jest.spyOn(connection, 'query');
      await productsRepository.getAll();
      expect(spy).toHaveBeenCalled();
    });

    it('should accept a promise', async () => {
      await expect(productsRepository.getAll()).resolves.toBeDefined();
    });

    it('should reject a promise', async () => {
      await expect(rejectProductsRepository.getAll()).rejects.toThrowError();
    })
  });

  describe('getById', () => {
    it('should return a value that equals fakeData', async () => {
      const result = await productsRepository.getById(1);
      expect(result).toEqual(fakeData);
    })
    it('should call connection.query method', async () => {
      const spy = jest.spyOn(connection, 'query');
      await productsRepository.getById(1);
      expect(spy).toHaveBeenCalled();
    })
    it('should accept a promise', async () => {
      await expect(productsRepository.getById(1)).resolves.toBeDefined();
    })
    it('should reject a promise', async () => {
      await expect(rejectProductsRepository.getById(1)).rejects.toThrowError();
    })
  });

  describe('create', () => {
    it('should return a value that equals fakeData', async () => {
      const result = await createdModel.create('Blahblah');
      expect(result).toEqual(fakeCreatedData);
    }),
    it('should call connection.query method', async () => {
      const spy = jest.spyOn(connection, 'query');
      await productsRepository.create('Blahblah');
      expect(spy).toHaveBeenCalled();
    }),
    it('should accept a promise', async () => {
      await expect(productsRepository.create('Blahblah')).resolves.toBeDefined();
    }),
    it('should reject a promise', async () => {
      await expect(rejectProductsRepository.create('Blahblah')).rejects.toThrowError();
    })
  });

  describe('update', () => {
    it('should return a value that equals fakeData', async () => {
      const result = await productsRepository.update('Blahblah', 1);
      expect(result).toEqual(fakeCreatedData);
    }),
    it('should call connection.query method', async () => {
      const spy = jest.spyOn(connection, 'query');
      await productsRepository.update('Blahblah', 1);
      expect(spy).toHaveBeenCalled();
    }),
    it('should accept a promise', async () => {
      await expect(productsRepository.update('Blahblah', 1)).resolves.toBeDefined();
    }),
    it('should reject a promise', async () => {
      await expect(rejectProductsRepository.update('Blahblah', 1)).rejects.toThrowError();
    })
  });

  describe('remove', () => {
    it('should return a value that equals fakeData', async () => {
      const result = await productsRepository.remove(1);
      expect(result).toEqual(JSON.stringify({ message: `Product with 1 has been removed from the DB` }));
    }),
    it('should call connection.query method', async () => {
      const spy = jest.spyOn(connection, 'query');
      await productsRepository.remove(1);
      expect(spy).toHaveBeenCalled();
    }),
    it('should accept a promise', async () => {
      await expect(productsRepository.remove(1)).resolves.toBeDefined();
    }),
    it('should reject a promise', async () => {
      await expect(rejectProductsRepository.remove(1)).rejects.toThrowError();
    })
  });
})