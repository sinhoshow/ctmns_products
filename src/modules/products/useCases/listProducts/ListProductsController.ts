import { Request, Response } from "express";

import ListProductsUseCase from "./ListProductsUseCase";

class ListProductsController {
    constructor(private listProductsUseCase: ListProductsUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const products = await this.listProductsUseCase.execute();
        return response.status(200).json(products);
    }
}

export default ListProductsController;
