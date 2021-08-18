import request from "supertest";
import { app } from '@shared/infra/app';
import { Connection } from 'typeorm';
import createConnection from '@shared/infra/typeorm';
import { factory, runSeeder, useSeeding } from "typeorm-seeding";
import CreateImageProducts from "@shared/infra/typeorm/seeds/CreateImageProducts";
import Product from "../../entities/Product";
import Image from "../../entities/Image";

let connection: Connection;

describe("List Products", () => {

    beforeAll(async () => {
        connection = await createConnection();
        await connection.runMigrations();
        await useSeeding();
        await factory(Product)().map(async (product: Product) => {
            const images: Image[] = await factory(Image)().createMany(4);
            product.images = images;
            return product;
        }).create({ name: "Teste", description: "Descrição teste" });

        await runSeeder(CreateImageProducts);
    });

    afterAll(async () => {
        await connection.dropDatabase();
        await connection.close();
    });

    it("Should be able list all products", async () => {
        const response = await request(app).get("/products");
        expect(response.status).toBe(200);
        expect(response.body.data.total).toBe(31);
    })

    it("Should be set amount of products results", async () => {
        const response = await request(app).get("/products?per_page=2");
        expect(response.status).toBe(200);
        expect(response.body.data.products.length).toBe(2);
    })

    it("Should be able find a product searched", async () => {
        const response = await request(app).get("/products?search=Descrição");
        expect(response.status).toBe(200);
        expect(response.body.data.products[0].name).toEqual('Teste');
    })

    it("Should be able pagination", async () => {
        const response = await request(app).get("/products?page=2");
        expect(response.status).toBe(200);
        expect(response.body.data.page).toBe(2);
    })
});
