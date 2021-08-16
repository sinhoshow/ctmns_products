import { Router, Request, Response } from 'express';

import { productsRouter } from './products.routes';

const router = Router();

router.get('/', (request: Request, repsonse: Response) => {
    return repsonse.json({
        status: 'on',
        version: '1.0.0'
    });
});

router.use("/products", productsRouter);
export default router;
