import Product from '../entities/Product';

interface IProductSearch {
    search?: String;
    sort?: 'ASC' | 'DESC'
    page: number,
    perPage: number
}

interface IProductResponse {
    products: Product[],
    total: number,
    page: number,
    last_page: number
}

interface IProductsRepository {
    list({ search }: IProductSearch): Promise<IProductResponse>;
}

export { IProductsRepository, IProductSearch, IProductResponse };
