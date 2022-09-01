require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();
const salesRouter = require('./Sales/routes/sales.router');
const productsRouter = require('./Products/routes/products.router');
const errorMiddleware = require('./middlewares/error.middleware');

app.use(express.json());
app.use('/products', productsRouter); 
app.use('/sales', salesRouter);
app.use(errorMiddleware);


app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});