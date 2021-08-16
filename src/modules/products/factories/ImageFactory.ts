import Image from "../entities/Image";
import * as Faker from "faker"
import { define } from "typeorm-seeding";

define(Image, (faker: typeof Faker) => {
    const url = 'https://dgn7v532p0g5j.cloudfront.net/unsafe/products/photos/semi-environment/bdcsnshseruhser2-1625766775357.jpg';

    const image = new Image()
    image.url = url
    return image
})
