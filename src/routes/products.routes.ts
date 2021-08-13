import { Router } from 'express';

const productsRouter = Router();

productsRouter.get('/', (request, response) => {
    return listProductsController().handle(request, response);
});

export { productsRouter };
