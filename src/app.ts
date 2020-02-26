// require("@babel/core").transform("code", {
//   presets: ["@babel/preset-typescript"],
// });
import express from "express";
const app = express()
const port = 8888

function home(req : any, res : any){
	res.status(200).json({succes:`Welcome api running at port:${port}`})
}
app.get("/", home)

app.listen(port, ()=>{
   console.log("server listening on port " + port)
 })

export default app
