import express from 'express';
import config from './config';

import products from './routes/products.routes';

const app = express();

// config
app.set('port', config.port);

// middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.use(products);

export default app;



