const { describe, it } = global;
const { fakeData, fakeCreatedData, productsService, rejectProductsService, mockRequest, mockResponse } = require('../__mocks__/products.service.mock');
const { ProductsController } = require('../controllers/products.controller');

const productsController = new ProductsController(productsService);
const rejectProductsController = new ProductsController(rejectProductsService);
const res = mockResponse();
const req = mockRequest();

describe('ProductsController', () => {
  describe('getAll', () => {
    it('should call productsService\'s getAll method', async () => {
      const spy = jest.spyOn(productsService, 'getAll');
      await productsController.getAll(req, res);
      expect(spy).toHaveBeenCalled();
    });
    it('should return all products', async () => {
      await productsController.getAll(req, res);
      expect(res.json).toHaveBeenCalledWith([fakeData]);
      expect(res.json).not.toBeUndefined();
      expect(res.status).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(200);
    });
    it('should return the correct response status: (200)', async () => {
      await productsController.getAll(req, res);
      expect(res.status).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(200);
    })
  });
  
  describe('getById', () => {
    it('should call productsService\'s getById method', async () => {
      const spy = jest.spyOn(productsService, 'getById');
      await productsController.getById(req, res);
      expect(spy).toHaveBeenCalled();
    });
    it('should return a product by id', async () => {
      await productsController.getById(req, res);
      expect(res.json).toHaveBeenCalledWith(fakeData);
      expect(res.json).not.toBeUndefined();
    });
    it('should return the correct response status: (200)', async () => {
      await productsController.getAll(req, res);
      expect(res.status).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(200);
    })
  });
  
  describe('create', () => {
    it('should call productsService\'s create method', async () => {
      const spy = jest.spyOn(productsService, 'create');
      await productsController.create(req, res);
      expect(spy).toHaveBeenCalled();
    });
    it('should create a product', async () => {
      await productsController.create(req, res);
      expect(res.json).toHaveBeenCalledWith(fakeCreatedData);
      expect(res.json).not.toBeUndefined();
      expect(res.status).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(201);
    });
    it('should return the correct response status: (201)', async () => {
      await productsController.getAll(req, res);
      expect(res.status).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(201);
    })
  });
  
  describe('search', () => {
    it('should search for a product', async () => {
      await productsController.search(req, res);
      expect(res.json).toHaveBeenCalledWith(fakeData);
      expect(res.json).not.toBeUndefined();
    });
    it('should return the correct response status: (200)', async () => {
      await productsController.getAll(req, res);
      expect(res.status).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(200);
    })
  });
  
  describe('update', () => {
    it('should call productsService\'s update method', async () => {
      const spy = jest.spyOn(productsService, 'update');
      await productsController.update(req, res);
      expect(spy).toHaveBeenCalled();
    });
    it('should update a product', async () => {
      await productsController.update(req, res);
      expect(res.json).toHaveBeenCalledWith(fakeCreatedData);
      expect(res.json).not.toBeUndefined();
    });
    it('should return the correct response status: (200)', async () => {
      await productsController.getAll(req, res);
      expect(res.status).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(200);
    })
  });
  
  describe('remove', () => {
    it('should call productsService\'s remove method', async () => {
      const spy = jest.spyOn(productsService, 'remove');
      await productsController.remove(req, res);
      expect(spy).toHaveBeenCalled();
    });
    it('should remove a product', async () => {
      await productsController.remove(req, res);
      expect(res.send).toHaveBeenCalled();
      expect(res.json).not.toBeUndefined();
    });
    it('should return the correct response status: (204)', async () => {
      await productsController.getAll(req, res);
      expect(res.status).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(204);
    })
  });
});