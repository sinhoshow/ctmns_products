import request from "supertest";
import { app } from '../../src/app';


describe("List Products", () => {
    it("Should be able list all products", async () => {
        const response = await request(app).get("/products").expect(200);
    })
});
