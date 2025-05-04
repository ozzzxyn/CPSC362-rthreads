const request = require("supertest");
const express = require("express");
const path = require("path");
const admin = require("firebase-admin");

// Mock Firebase for test (optional but avoids real DB access)
jest.mock("firebase-admin", () => {
  const firestore = {
    collection: jest.fn().mockReturnThis(),
    doc: jest.fn().mockReturnThis(),
    where: jest.fn().mockReturnThis(),
    get: jest.fn().mockResolvedValue({ docs: [] }),
    add: jest.fn().mockResolvedValue({ id: "mocked-id" }),
    update: jest.fn(),
    delete: jest.fn(),
  };
  return {
    credential: { cert: jest.fn() },
    initializeApp: jest.fn(),
    firestore: () => firestore,
  };
});

// Import the app after mocking
let app;
let server;

beforeAll(() => {
  app = require("./index"); // ensure you export `app` from index.js
  server = app.listen(5001); // Start the server manually
});

afterAll((done) => {
  server.close(done); // Close the server after tests
});

describe("Backend API routes", () => {
  it("should respond to GET /admin", async () => {
    const res = await request(app).get("/admin");
    expect(res.statusCode).toBe(200);
    expect(res.headers["content-type"]).toMatch(/html/);
  });

  it("should respond with empty product list on GET /api/products", async () => {
    const res = await request(app).get("/api/products");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("should respond with 201 on POST /api/products", async () => {
    const res = await request(app)
      .post("/api/products")
      .send({ name: "Test Product", price: 100 });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("id");
  });
});

