const { describe, it } = global;
const { fakeProductsRepository } = require("../../Products/__mocks__/products.repository.mock");
const { fakeSales, fakeSalesById, createSaleResult, createdSaleProductResult, updateSaleInfo } = require("../__mocks__/connection.mock");
const { fakeSalesRepository, rejectSalesRepository } = require("../__mocks__/sales.repository.mock");
const { SalesService } = require("./sales.service");

const salesService = new SalesService(fakeSalesRepository, fakeProductsRepository);
const rejectSalesService = new SalesService(rejectSalesRepository);

describe("SalesService", () => {
  describe('getAll', () => {
    it("should return all sales", async () => {
      const sales = await salesService.getAll();
      expect(sales).toEqual(fakeSales);
    })
    it("should call getAll method", async () => {
      const spy = jest.spyOn(fakeSalesRepository, "getAll");
      await salesService.getAll();
      expect(spy).toHaveBeenCalled();
    })
    it("should accept a promise", async () => {
      await expect(salesService.getAll()).resolves.toBeDefined();
    })
    it("should reject a promise", async () => {
      await expect(rejectSalesService.getAll()).rejects.toThrowError();
    })
  });
  describe("getById", () => {
    it("should return all sales made using the selected saleId", async () => {
      const sale = await salesService.getById(1);
      expect(sale).toEqual(fakeSalesById);
    }),
    it("should call getById method", async () => {
      const spy = jest.spyOn(fakeSalesRepository, "getById");
      await salesService.getById(1);
      expect(spy).toHaveBeenCalled();
    }),
    it("should accept a promise", async () => {
      await expect(salesService.getById(1)).resolves.toBeDefined();
    }),
    it("should reject a promise", async () => {
      await expect(rejectSalesService.getById(99)).rejects.toThrowError();
    })
  })
  describe("createSale", () => {
    it("should return the created sale's id and sold items", async () => {
      const sale = await salesService.createSale([createdSaleProductResult]);
      expect(sale).toEqual({id: 1, itemsSold: [updateSaleInfo] });
    }),
    it("should call createSale method", async () => {
      const spy = jest.spyOn(fakeSalesRepository, "createSale");
      await salesService.createSale([createdSaleProductResult]);
      expect(spy).toHaveBeenCalled();
    }),
    it("should accept a promise", async () => {
      await expect(salesService.createSale([createdSaleProductResult])).resolves.toBeDefined();
    }),
    it("should reject a promise", async () => {
      await expect(rejectSalesService.createSale()).rejects.toThrowError();
    })
  })
  describe("update", () => {
    it("should call update method", async () => {
      const spy = jest.spyOn(fakeSalesRepository, "update");
      await salesService.update(1, [updateSaleInfo]);
      expect(spy).toHaveBeenCalled();
    }),
    it("should accept a promise", async () => {
      await expect(salesService.update(1, [updateSaleInfo])).resolves.toBeUndefined();
    }),
    it("should reject a promise", async () => {
      await expect(rejectSalesService.update(99, [updateSaleInfo])).rejects.toThrowError();
    })
  })
  describe("remove", () => {
    it('should return a value that equals undefined', async () => {
      const result = await fakeSalesRepository.remove(1);
      expect(result).toEqual(undefined);
    });
    it("should call remove method", async () => {
      const spy = jest.spyOn(fakeSalesRepository, "remove");
      await salesService.remove(1);
      expect(spy).toHaveBeenCalled();
    }),
    it("should accept a promise", async () => {
      await expect(salesService.remove(1)).resolves.toBeUndefined();
    }),
    it("should reject a promise", async () => {
      await expect(rejectSalesService.remove(99)).rejects.toThrowError();
    })
  })
})