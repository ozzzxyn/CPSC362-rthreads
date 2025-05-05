const request = require("supertest");
const express = require("express");
const app = require("./index"); // Adjust if exported differently

// Mock Firebase Admin
jest.mock("firebase-admin", () => {
  const data = [
    { id: "1", data: () => ({ Name: "Shirt A", cat: "shirt" }) },
    { id: "2", data: () => ({ Name: "Pants B", cat: "pants" }) },
  ];

  return {
    initializeApp: jest.fn(),
    credential: {
      cert: jest.fn(),
    },
    firestore: () => ({
      collection: jest.fn().mockReturnValue({
        get: jest.fn().mockResolvedValue({ docs: data }),
        where: jest.fn().mockReturnThis(),
        doc: jest.fn().mockImplementation((id) => ({
          get: jest.fn().mockResolvedValue({
            exists: id === "1",
            data: () => ({ Name: "Updated", cat: "updated" }),
          }),
          update: jest.fn(),
          delete: jest.fn(),
        })),
        add: jest.fn().mockResolvedValue({ id: "newId" }),
      }),
    }),
  };
});

describe("Backend API Tests", () => {
  it("GET /api/products - returns all products", async () => {
    const res = await request(app).get("/api/products");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it("GET /api/products?category=shirt - filters by category", async () => {
    const res = await request(app).get("/api/products?category=shirt");
    expect(res.statusCode).toBe(200);
    expect(res.body[0].cat).toBe("shirt");
  });

  it("POST /api/products - adds a product", async () => {
    const res = await request(app)
      .post("/api/products")
      .send({ Name: "Hat", cat: "accessory" });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("id");
  });

  it("PUT /api/products/:id - updates a product", async () => {
    const res = await request(app)
      .put("/api/products/1")
      .send({ Name: "Updated", cat: "updated" });
    expect(res.statusCode).toBe(200);
    expect(res.body.Name).toBe("Updated");
  });

  it("DELETE /api/products/:id - deletes a product", async () => {
    const res = await request(app).delete("/api/products/1");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("message", "Product deleted successfully");
  });

  it("GET /products - returns admin page", async () => {
    const res = await request(app).get("/products");
    expect(res.statusCode).toBe(200);
    expect(res.header["content-type"]).toMatch(/html/);
  });

  it("GET /shop - returns shop page", async () => {
    const res = await request(app).get("/shop");
    expect(res.statusCode).toBe(200);
    expect(res.header["content-type"]).toMatch(/html/);
  });
});
