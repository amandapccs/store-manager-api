const { describe, it } = global;
const { fakeData, fakeCreatedData, productsService, rejectProductsService, mockRequest, mockResponse } = require('../__mocks__/products.service.mock');
const { ProductsController } = require('../controllers/products.controller');

const productsController = new ProductsController(productsService);
const rejectProductsController = new ProductsController(rejectProductsService);
const res = mockResponse();
const req = mockRequest();

describe('ProductsController', () => {
  describe('getAll', () => {
    it('should return all products', async () => {
      await productsController.getAll(req, res);
      expect(res.json).toHaveBeenCalledWith([fakeData]);
      expect(res.json).not.toBeUndefined();
      expect(res.status).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(200);
    });
  });
  
  describe('getById', () => {
    it('should return a product by id', async () => {
      await productsController.getById(req, res);
      expect(res.json).toHaveBeenCalledWith(fakeData);
      expect(res.json).not.toBeUndefined();
      expect(res.status).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(200);
    });
  });
  
  describe('create', () => {
    it('should create a product', async () => {
      await productsController.create(req, res);
      expect(res.json).toHaveBeenCalledWith(fakeCreatedData);
      expect(res.json).not.toBeUndefined();
      expect(res.status).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(201);
    });
  });
  
  describe('search', () => {
    it('should search for a product', async () => {
      await productsController.search(req, res);
      expect(res.json).toHaveBeenCalledWith(fakeData);
      expect(res.json).not.toBeUndefined();
      expect(res.status).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(200);
    });
  });
  
  describe('update', () => {
    it('should update a product', async () => {
      await productsController.update(req, res);
      expect(res.json).toHaveBeenCalledWith(fakeCreatedData);
      expect(res.json).not.toBeUndefined();
      expect(res.status).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(201);
    });
  });
  
  describe('remove', () => {
    it('should remove a product', async () => {
      await productsController.remove(req, res);
      expect(res.send).toHaveBeenCalled();
      expect(res.json).not.toBeUndefined();
      expect(res.status).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(204);
    });
  });
});