import { Router } from 'express';
import listProductsController from '../modules/products/useCases/listProducts';

const productsRouter = Router();

productsRouter.get('/', (request, response) => {
    return listProductsController().handle(request, response);
});

export { productsRouter };
