import { Request, Response } from "express";

import { container } from "tsyringe";
import ListProductsUseCase from "./ListProductsUseCase";

class ListProductsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const search = request.query.search as string
        const sort = request.query.sort as 'ASC' | 'DESC'
        const pageRequest = request.query.page as string || '1';
        const perPageRequest = request.query.per_page as string || '9';
        const page = parseInt(pageRequest);
        const perPage = parseInt(perPageRequest);



        const listProductsUseCase = container.resolve(ListProductsUseCase)

        const products = await listProductsUseCase.execute({ search, sort, page, perPage });


        return response.status(200).json({ status: "success", data: products });
    }
}

export default ListProductsController;
