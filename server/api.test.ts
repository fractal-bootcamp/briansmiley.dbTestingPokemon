import { describe, it, expect } from "vitest";
import superRequest from "supertest";
import app from ".";

describe("Tests", () => {
  it("does a superrequest", () => {
    superRequest(app)
      .get("/api/")
      .expect(200)
      .expect(response => {
        const body = response.body;
        expect(body).toEqual("Hello");
      });
  });
});
// describe("test?", () => {
//   it("Runs a test", async () => {
//     const res = await fetch("http://localhost:4040/api/");
//     expect(res.status).toEqual(200);
//     expect(res.body).toContain("Hello");
//   });
// });
