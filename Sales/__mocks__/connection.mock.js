const fakeSales = [
	{
		saleId: 1,
		date: "2022-08-18T01:53:38.000Z",
		productId: 1,
		quantity: 5
	},
	{
		saleId: 1,
		date: "2022-08-18T01:53:38.000Z",
		productId: 2,
		quantity: 10
	},
	{
		saleId: 2,
		date: "2022-08-18T01:53:38.000Z",
		productId: 3,
		quantity: 97
	}
]

const fakeSalesById = [
  {
		saleId: 1,
		date: "2022-08-18T01:53:38.000Z",
		productId: 1,
		quantity: 5
	},
	{
		saleId: 1,
		date: "2022-08-18T01:53:38.000Z",
		productId: 2,
		quantity: 10
	},
]
const result = { insertId: 1 };
const createSaleResult =  { id: result.insertId };
const createdSaleProductResult = { productId: 1, quantity: 15 };
const updateSaleInfo = { productId: 1, quantity: 15 };

const connection = {
  query: () => {
    return Promise.resolve([fakeSales]);
  }
};

const idConnection = {
  query: () => {
    return Promise.resolve([fakeSalesById]);
  }
}

const createdConnection = {
  query: () => {
    return Promise.resolve([result]);
  }
};

const rejectConnection = {
  query: () => Promise.reject(new Error('Something went wrong')),
}

module.exports = { 
  fakeSales,
  fakeSalesById,
	result,
  createSaleResult,
  createdSaleProductResult,
	updateSaleInfo,
  connection,
  idConnection,
  createdConnection,
  rejectConnection
};
