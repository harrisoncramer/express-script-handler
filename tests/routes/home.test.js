const app = require("../../app");
const request = require("supertest");
require("../setup")();

describe("Fetch HTML", () => {
  test("Successful call to home route", async done => {
    let res = await request(app).get("/home/");
    expect(res.type).toBe("text/html");
    expect(res.text).toEqual(
      '<!doctype html><html lang="en"><head><meta charset="utf-8"><title>How to set up React, Webpack, and Babel</title></head><body><div id="app"></div><script src="bundle.js"></script></body></html>'
    );
    done();
  });
  test("Fetch JS Bundle", async done => {
    let res = await request(app).get("/home/bundle.js");
    expect(res.type).toBe("application/javascript");
    done();
  });
});
