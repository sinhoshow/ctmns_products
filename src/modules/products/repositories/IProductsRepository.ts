import Product from '../entities/Product';

interface IProductSearch {
    search?: String;
    sort?: 'ASC' | 'DESC'
    page: number,
    perPage: number
}

interface IProductResponse {
    products: Record<string, any>,
    total: number,
    page: number,
    last_page: number
}

interface IProductsRepository {
    list({ search, sort, page, perPage }: IProductSearch): Promise<IProductResponse>;
}

export { IProductsRepository, IProductSearch, IProductResponse };
