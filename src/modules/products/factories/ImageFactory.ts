import Image from "../entities/Image";
import * as Faker from "faker"
import { define } from "typeorm-seeding";

define(Image, (faker: typeof Faker) => {
    const url = faker.image.imageUrl();

    const image = new Image()
    image.url = url
    return image
})
