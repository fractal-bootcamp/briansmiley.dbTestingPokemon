import { describe, it, expect } from "vitest";
import superRequest from "supertest";
import app from "./index.ts";
import "dotenv/config";
const expressPort = process.env.PORT;

describe("Superrequests", () => {
  it("GET / should return 200 and 'Hello' ", () => {
    superRequest(app)
      .get("/api/")
      .expect(200)
      .expect(response => {
        const body = response.body;
        expect(body).toEqual("Hello");
      });
  });
});

describe("Express server localhost", () => {
  it("GET / should return 200 and 'Hello'", async () => {
    const res = await fetch(`http://localhost:${expressPort}/api/`);
    expect(res.status).toEqual(200);
    const body = await res.json();
    expect(body).toEqual("Hello");
  });
});
