
const request = require("supertest");
const app = require("../index"); // Adjust the path as necessary

beforeAll(done => {
  done()
})

it("should return 200 for GET /api", async () => {
  const response = await request(app).get("/api");
  expect(response.statusCode).toBe(200);
  expect(response.body).toEqual({ message: "API is working" });
});

it("should return 200 for GET /api", async () => {
  const response = await request(app).get("/ii");
  expect(response.statusCode).toBe(404);
});

it("should return 200 for GET /api", async () => {
  const response = await request(app).get("/ii");
  expect(response.statusCode).toBe(404);
});

afterAll(done => {
  // Closing the DB connection allows Jest to exit successfully.
//   mongoose.connection.close()
  done()
})