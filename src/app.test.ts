import request from "supertest"
import app  from "./app"
import { doesNotMatch } from "assert";
// let server = request(app);

function closePromises(pm:any){
  console.log(pm)
};

// afterAll((done) => {
//   // closePromises(done);

//   //server.close(done);
// });

describe("api is ready ('/')",()=>{

  test('status is ok', () => {
     request(app)
        .get('/')
        .expect(200)
        .end(function(err, res) {
          if (err) throw err;
        });
  });

  test('Content-Type is ok', () => {
      request(app)
        .get('/')
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) throw err;
        });
  });
});

describe("response object",()=>{
  test('response object got success property is ok', async (done) => {
  await request(app)
  .get('/')
  .expect('Content-Type', /json/)
  .expect(200)
  // .end(function(err, res) {
  //   if (err) throw err;
    done()
  // });
  })
});
