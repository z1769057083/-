const fs = require("fs");
const express = require("express");
let app = express();
console.log(2)
app.get("/",(req,res)=>{
	console.log(1)
	fs.readFile("./dist/index.html",(err,stat)=>{
		if(err){
			console.log(err);
		}else{
			console.log(stat)
			res.render(stat);
		}
	})
})
app.listen(6666)
