const request = require("supertest");
const app = require("./index"); // import the app

describe("Product API", () => {
  it("GET /products should return an array", async () => {
    const res = await request(app).get("/products");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("POST /products should add product", async () => {
    const newProduct = {
      id: 3,
      Name: "Test Product",
      price: 50,
      image: "test.jpg",
      cat: "test",
      disc: "This is a test"
    };

    const res = await request(app).post("/products").send(newProduct);
    expect(res.statusCode).toBe(201);
    expect(res.body.Name).toBe("Test Product");
  });
});
