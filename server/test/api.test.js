const request = require("supertest");
const APP = require("../api/");

describe("GET api?value=23", () => {
  test("Should return status 200 and the correct response", async () => {
    const { statusCode, text } = await request(APP).get("/api?value=23");
    const expectedResponse = '["ad","ae","af","bd","be","bf","cd","ce","cf"]';

    expect(statusCode).toBe(200);
    expect(text).toBe(expectedResponse);
  });
});

describe("GET api?value=2d3", () => {
  test("Should return status 400 and message error", async () => {
    const { statusCode, text } = await request(APP).get("/api?value=2d3");
    const expectedResponse = {
      error: true,
      error_code: 400,
      message: "The value only can be a number between 2 and 9"
    };

    expect(statusCode).toBe(400);
    expect(text).toBe(JSON.stringify(expectedResponse));
  });
});