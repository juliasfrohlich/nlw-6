const request = require("supertest");
const server = require('../../src/server')

describe("Test the root path", () => {
  test("It should response the GET method", async () => {
    const response = await request(server).get("/");
    expect(response.statusCode).toBe(200);
  });
});
