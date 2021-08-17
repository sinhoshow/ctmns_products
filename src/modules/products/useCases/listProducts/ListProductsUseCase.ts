import { IProductResponse, IProductsRepository } from "../../repositories/IProductsRepository";


interface IRequest {
    search?: string,
    sort?: 'ASC' | 'DESC',
    page: number,
    perPage: number
}

class ListProductsUseCase {
    constructor(private ProductsRepository: IProductsRepository) { }

    async execute({ search, sort, page, perPage }: IRequest): Promise<IProductResponse> {
        const products = await this.ProductsRepository.list({ search, sort, page, perPage });
        return products;
    }
}

export default ListProductsUseCase;
