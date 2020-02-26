import app  from "./app"
import { sum } from "./sum"
import { minus } from "./minus"

describe("api is ready ('/')",()=>{

  test('status is ok', () => {
    expect(sum(1, 2)).toBe(3);
  });


  test('Content-Type is ok', () => {
    expect(minus(2, 1)).toBe(1);
  });

})

describe("response is ok",()=>{
  /*test asyn code*/
  // test('response object', async() => {
  //   await expect(true).toBe(true);
  // });
  test('response object', () => {
     expect(true).toBe(true);
  });

})
