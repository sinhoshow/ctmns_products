import Product from '../entities/Product';

interface IProductsRepository {
    list(): Promise<Product[]>;
}

export { IProductsRepository };
