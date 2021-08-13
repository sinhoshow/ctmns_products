import Product from "../../entities/Product";
import { IProductsRepository } from "../../repositories/IProductsRepository";

class ListProductsUseCase {
    constructor(private ProductsRepository: IProductsRepository) { }

    async execute(): Promise<Product[]> {
        const products = await this.ProductsRepository.list();
        return products;
    }
}

export default ListProductsUseCase;
