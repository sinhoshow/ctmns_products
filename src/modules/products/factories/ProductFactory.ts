import Product from "../entities/Product";
import * as Faker from "faker"
import { define } from "typeorm-seeding";

define(Product, (faker: typeof Faker) => {
    const productName = faker.commerce.productName();
    const description = faker.lorem.text();
    const price = faker.random.number();

    const product = new Product()
    product.name = productName
    product.description = description
    product.price = price
    return product
})
