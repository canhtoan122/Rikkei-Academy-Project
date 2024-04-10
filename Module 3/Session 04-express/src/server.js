const express = require('express');
const bodyParser = require('body-parser');
const fs = require("fs");
const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const server = app.get("/", (req, res)=>{
    let getData = JSON.parse(fs.readFileSync("../data/db.json", "utf-8"));
    // getData vẫn là định dạng JSON
    // tiến hành parse dữ liệu về dang JSON
    res.send(getData)
})
app.get("/app/v1/users/:id", (req, res)=>{
    
})
server.listen(port, ()=>{
    console.log("Đang gọi server");
})
