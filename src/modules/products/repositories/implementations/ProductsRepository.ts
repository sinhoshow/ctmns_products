import { getRepository, Repository } from 'typeorm';
import AppError from '../../../../errors/AppError';
import { classToPlain } from "class-transformer";

import Product from '../../entities/Product';
import { IProductsRepository, IProductSearch, IProductResponse } from '../IProductsRepository';

class ProductsRepository implements IProductsRepository {
    private repository: Repository<Product>;

    constructor() {
        this.repository = getRepository(Product);
    }

    async list({ search, sort, page, perPage }: IProductSearch): Promise<IProductResponse> {
        const builder = this.repository.createQueryBuilder('products').leftJoinAndSelect("products.images", "images");
        const offset = (page - 1) * perPage;

        if (search) {
            builder.where("products.name LIKE :s OR products.description LIKE :s", { s: `%${search}%` });
        }
        if (sort) {
            builder.orderBy("products.price", sort);
        }

        builder.offset(offset).limit(perPage);
        const total = await builder.getCount();

        const products = classToPlain(await builder.getMany());


        if (products.length == 0) {
            throw new AppError("Products not found!", 404);
        }

        const response = {
            products,
            total,
            page,
            last_page: Math.ceil(total / perPage)
        }

        return response;
    }
}

export default ProductsRepository;
