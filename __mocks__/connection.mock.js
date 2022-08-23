const fakeData = { productId: 1, name: 'Blahblah' };
const result = { insertId: 1 };
const fakeCreatedData = { id: result.insertId, name: 'Blahblah' };

const connection = {
  query: () => {
    return Promise.resolve([[fakeData]]);
  }
};

const createdConnection = {
  query: () => {
    return Promise.resolve([result]);
  }
};

const rejectConnection = {
  query: () => Promise.reject(new Error('Something went wrong')),
}

module.exports = { fakeData, connection, rejectConnection, fakeCreatedData, createdConnection };
