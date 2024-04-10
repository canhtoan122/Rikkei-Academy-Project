const express= require("express");
const router = require('../router/todolists.js');
var bodyParser = require('body-parser');
const app= express();
const port=3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res)=>{
    res.send("Hello world!");
})
app.use("/api/v1/todos", router);
app.listen(port, ()=>{
    console.log(`server đang lắng nghe trên cổng http://localhoast:${port}`);
})