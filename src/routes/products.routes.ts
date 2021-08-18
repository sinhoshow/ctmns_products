import { Router } from 'express';
import ListProductsController from '../modules/products/useCases/listProducts/ListProductsController';

const productsRouter = Router();

const listProductsController = new ListProductsController();

productsRouter.get('/', listProductsController.handle);

export { productsRouter };
