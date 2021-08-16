import Product from "../../entities/Product";
import { IProductsRepository } from "../../repositories/IProductsRepository";
import { classToPlain } from "class-transformer";

interface IRequest {
    search?: string,
    sort?: 'ASC' | 'DESC',
    page: number,
    perPage: number
}

class ListProductsUseCase {
    constructor(private ProductsRepository: IProductsRepository) { }

    async execute({ search, sort, page, perPage }: IRequest): Promise<Product[]> {
        const products = await this.ProductsRepository.list({ search, sort, page, perPage });
        return classToPlain(products);
    }
}

export default ListProductsUseCase;
