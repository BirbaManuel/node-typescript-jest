import request from "supertest"
import {app, server}  from "./app"


describe("api is ready ('/')",()=>{

  test('status is ok', async (done) => {
    await request(app)
        .get('/')
        .expect(200)
        done()
  });

  test('Content-Type is ok', async (done) => {
      await request(app)
        .get('/')
        .expect('Content-Type', /json/)
        done()
  });
});

describe("response object",()=>{

    test('response object got success property is ok', async (done) => {
      await request(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200)
      done()
    })
});
