import { Factory, Seeder } from 'typeorm-seeding';
import Product from '../../modules/products/entities/Product';
import Image from '../../modules/products/entities/Image';
import { image } from 'faker';
import { productsRouter } from '../../routes/products.routes';

export default class CreateImageProducts implements Seeder {
    public async run(factory: Factory): Promise<any> {
        await factory(Product)().map(async (product: Product) => {
            const images: Image[] = await factory(Image)().createMany(4);
            product.images = images;
            return product;
        }).createMany(30)
    }
}
