const request = require("supertest");

const server = require("./server");

describe("GET /", () => {
  describe("check if api is up", () => {
    it("sends back it works", () =>
      request(server)
        .get("/")
        .then(res => expect(res.body).toBe("it works!")));
  });
});
