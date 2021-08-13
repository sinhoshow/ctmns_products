import { getRepository, Repository } from 'typeorm';

import Product from '../../entities/Product';
import { IProductsRepository } from '../IProductsRepository';

class ProductsRepository implements IProductsRepository {
    private repository: Repository<Product>;

    constructor() {
        this.repository = getRepository(Product);
    }

    async list(): Promise<Product[]> {
        const products = await this.repository.find();
        return products;
    }
}

export default ProductsRepository;
