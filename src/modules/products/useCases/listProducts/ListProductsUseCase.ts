import { inject, injectable } from "tsyringe";
import { IProductResponse, IProductsRepository } from "@modules/products/repositories/IProductsRepository";


interface IRequest {
    search?: string,
    sort?: 'ASC' | 'DESC',
    page: number,
    perPage: number
}
@injectable()
class ListProductsUseCase {
    constructor(
        @inject("ProductsRepository")
        private productsRepository: IProductsRepository
    ) { }

    async execute({ search, sort, page, perPage }: IRequest): Promise<IProductResponse> {
        const products = await this.productsRepository.list({ search, sort, page, perPage });
        return products;
    }
}

export default ListProductsUseCase;
