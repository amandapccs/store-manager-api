const { describe, it } = global;
const { salesService, rejectSalesService, mockRequest, mockResponse } = require("../__mocks__/sales.service.mock");
const { fakeSales, fakeSalesById, updateSaleInfo, createdSaleProductResult } = require("../__mocks__/connection.mock");
const { SalesController } = require("../controllers/sales.controller");

const salesController = new SalesController(salesService);
const rejectSalesController = new SalesController(rejectSalesService);
const res = mockResponse();
const req = mockRequest();

describe("SalesController", () => {
  describe("getAll", () => {
    it('should call salesService\'s getAll method', async () => {
      const spy = jest.spyOn(salesService, 'getAll');
      await salesController.getAll(req, res);
      expect(spy).toHaveBeenCalled();
    });
    it("should return all sales", async () => {
      await salesController.getAll(req, res);
      expect(res.json).not.toBeUndefined();
      expect(res.json).toHaveBeenCalledWith(fakeSales);
    });
    it('should return the correct response status: (200)', async () => {
      await salesController.getAll(req, res);
      expect(res.status).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(200);
    })
  });

  describe("getById", () => {
    it('should call salesService\'s getById method', async () => {
      const spy = jest.spyOn(salesService, 'getById');
      await salesController.getById(req, res);
      expect(spy).toHaveBeenCalled();
    });
    it("should return a sale by id", async () => {
      await salesController.getById(req, res);
      expect(res.json).toHaveBeenCalledWith(fakeSalesById);
      expect(res.json).not.toBeUndefined();
    });
    it('should return the correct response status> (200)', async () => {
      await salesController.getById(req, res);
      expect(res.status).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(200);
    })
  });

  describe("create", () => {
    it('should call salesService\'s create method', async () => {
      const spy = jest.spyOn(salesService, 'createSale');
      await salesController.create(req, res);
      expect(spy).toHaveBeenCalled();
    });
    it("should create a sale", async () => {
      await salesController.create(req, res);
      expect(res.json).not.toBeUndefined();
      expect(res.json).toHaveBeenCalledWith({id: 1, itemsSold: [{ productId: 1, quantity: 15}] });
    });
    it('should return the correct response status: (201)', async () => {
      await salesController.create(req, res);
      expect(res.status).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(201);
    })
  });

  describe("update", () => {
    it('should call salesService\'s update method', async () => {
      const spy = jest.spyOn(salesService, 'update');
      await salesController.update(req, res);
      expect(spy).toHaveBeenCalled();
    });
    it("should update a sale", async () => {
      await salesController.update(req, res);
      expect(res.json).not.toBeUndefined();
      expect(res.json).toHaveBeenCalled();
    });
    it('should return the correct response status: (201)', async () => {
      await salesController.update(req, res);
      expect(res.status).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(201);
    })
  });

  describe("remove", () => {
    it('should call salesService\'s remove method', async () => {
      const spy = jest.spyOn(salesService, 'remove');
      await salesController.remove(req, res);
      expect(spy).toHaveBeenCalled();
    });
    it("should delete a sale", async () => {
      await salesController.remove(req, res);
      expect(res.send).toHaveBeenCalled();
    });
    it('should return the correct response status: (204)', async () => {
      await salesController.remove(req, res);
      expect(res.status).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(204);
    })
  })
})