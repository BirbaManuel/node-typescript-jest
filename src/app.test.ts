import request from "supertest"
import app  from "./app"

function closePromises(pm:any){
  console.log(pm)
};

// afterAll((done) => {
//   closePromises(done);
// });

// describe("api is ready ('/')",()=>{

//   test('status is ok', () => {
//      request(app)
//         .get('/')
//         .expect(200)
//         .end(function(err, res) {
//           if (err) throw err;
//         });
//   });

//   test('Content-Type is ok', () => {
//       request(app)
//         .get('/')
//         .expect('Content-Type', /json/)
//         .end(function(err, res) {
//           if (err) throw err;
//         });
//   });
// });

describe("response object",()=>{
  /*test asyn code*/
  // test('response object', async() => {
  //   await expect(true).toBe(true);
  // });
  test('response object got success property is ok', async (done) => {
    const responseObject = await request(app).get('/')
    expect(responseObject.text).toBe('{"succes":"Welcome api running at port:8888"}')
    done()
  },3000);
})
