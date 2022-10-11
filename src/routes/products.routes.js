import { Router } from 'express';
import { createNewCustomer, createNewProduct, getCustomers, getProducts } from '../controllers/products.controllers';

const router = Router();

router.get('/products', getProducts);

router.post('/products',createNewProduct);

router.get('/create', getCustomers);

router.post('/create',createNewCustomer);

//router.get('/products' );

router.delete('/products');

router.put('/products');



export default router;