import express from "express";
const app = express()
const port = 8888

function home(req : any, res : any){
	res.status(200).json({succes:`Welcome api running at port:${port}`})
}
app.get("/", home)

var server = app.listen(port, ()=>{
	if (process.env.NODE_ENV === 'test') {
			server.close();
		setTimeout(function () {
            console.log("close in 3 secondes")
		console.log("test server listening on port " + port)
		}, 1000)
	}
})

export default app
