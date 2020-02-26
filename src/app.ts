import express from "express";
const app = express()
const port = 8888

function home(req : any, res : any){
	res.status(200).json({succes:`Welcome api running at port:${port}`})
}
app.get("/", home)

app.listen(port, ()=>{
	if (process.env.NODE_ENV) {
		console.log(process.env.NODE_ENV)
		setTimeout(function () {
            console.log("close" in app)
            // TypeError: Object function app(req, res){ app.handle(req, res); } has no method 'close'
        }, 3000)
	}

	if (process.env.NODE_ENV === 'test') {
		console.log("test server listening on port " + port)
	}
 })

export default app
