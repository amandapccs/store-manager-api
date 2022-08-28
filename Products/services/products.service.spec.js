const { describe, it } = global;
const { ProductsService } = require("./products.service");
const { fakeData, fakeCreatedData, fakeProductsRepository, rejectProductsRepository } = require("../__mocks__/products.repository.mock");

const productsService = new ProductsService(fakeProductsRepository);
const rejectProductsService = new ProductsService(rejectProductsRepository);

describe('ProductsService', () => {
  describe('getAll', () => {
    it('should return a value that equals fakeData', async () => {
      const result = await productsService.getAll();
      expect(result).toEqual(fakeData);
    });
    it('should call getAll method', async () => {
      const spy = jest.spyOn(fakeProductsRepository, 'getAll');
      await productsService.getAll();
      expect(spy).toHaveBeenCalled();
    });
    it('should accept a promise', async () => {
      await expect(productsService.getAll()).resolves.toBeDefined();
    });
    it('should reject a promise', async () => {
      await expect(rejectProductsService.getAll()).rejects.toThrowError();
    });
  });

  describe('getById', () => {
    it('should return a value that equals fakeData', async () => {
      const result = await productsService.getById(1);
      expect(result).toEqual(fakeData);
    });
    it('should call getById method', async () => {
      const spy = jest.spyOn(fakeProductsRepository, 'getById');
      await productsService.getById(1);
      expect(spy).toHaveBeenCalled();
    });
    it('should accept a promise', async () => {
      await expect(productsService.getById(1)).resolves.toBeDefined();
    });
    it('should reject a promise', async () => {
      await expect(rejectProductsService.getById(1)).rejects.toThrowError();
    });
  });

  describe('create', () => {
    it('should return a value that equals fakeData', async () => {
      const result = await productsService.create('Blahblah');
      expect(result).toEqual(fakeCreatedData);
    });
    it('should call create method', async () => {
      const spy = jest.spyOn(fakeProductsRepository, 'create');
      await productsService.create('Blahblah');
      expect(spy).toHaveBeenCalled();
    });
    it('should accept a promise', async () => {
      await expect(productsService.create('Blahblah')).resolves.toBeDefined();
    });
    it('should reject a promise', async () => {
      await expect(rejectProductsService.create('Blahblah')).rejects.toThrowError();
    });
  });

  describe('update', () => {
    it('should return a value that equals fakeData', async () => {
      const result = await productsService.update('Blahblah', 1);
      expect(result).toEqual(fakeCreatedData);
    });
    it('should call update method', async () => {
      const spy = jest.spyOn(fakeProductsRepository, 'update');
      await productsService.update('Blahblah', 1);
      expect(spy).toHaveBeenCalled();
    });
    it('should accept a promise', async () => {
      await expect(productsService.update('Blahblah', 1)).resolves.toBeDefined();
    });
    it('should reject a promise', async () => {
      await expect(rejectProductsService.update('Blahblah', 1)).rejects.toThrowError();
    });
  });

  describe('remove', () => {
    it('should return a value that equals undefined', async () => {
      const result = await productsService.remove(1);
      expect(result).toEqual(undefined);
    });
    it('should call remove method', async () => {
      const spy = jest.spyOn(fakeProductsRepository, 'remove');
      await productsService.remove(1);
      expect(spy).toHaveBeenCalled();
    });
    it('should accept a promise', async () => {
      await expect(productsService.remove(1)).resolves.toEqual(undefined);
    });
    it('should reject a promise', async () => {
      await expect(rejectProductsService.remove(1)).rejects.toThrowError();
    });
  });
});