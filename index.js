function api(enviroment) {
  require('dotenv').config();
  require('express-async-errors');
  const express = require('express');
  const app = express();
  const salesRouter = require('./Sales/routes/sales.router');
  const productsRouter = require('./Products/routes/products.router');
  const salesRoutere2e = 0;
  const productsRoutere2e = 1;
  const errorMiddleware = require('./middlewares/error.middleware');
  
  if (enviroment === 'production') {
    app.use(express.json());
    app.use('/products', productsRouter); 
    app.use('/sales', salesRouter);
    app.use(errorMiddleware);
    
    
    app.listen(process.env.PORT, () => {
      console.log(`Listening on port ${process.env.PORT}`);
    });
  }
  if (enviroment === 'test') {
    app.use(express.json());
    app.use('/products', productsRoutere2e); 
    app.use('/sales', salesRoutere2e);
    app.use(errorMiddleware);
    
    
    app.listen(process.env.PORT_TEST, () => {
      console.log(`Listening on port ${process.env.PORT_TEST}`);
    });
  }
}
api('production');