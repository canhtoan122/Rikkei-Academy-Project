/*
    1. EJS là viết tắt của từ: embeded javascript. Là 1 template engine dành cho Nodejs
    2. Mục đích sinh ra để có thể nhúng javascript vào bên trong file HTML
    3. Bản chất Nodejs có thể làm fullstack (tức là cả client-giao diện và server)
    4. Bây giờ các thư viện hay framework tính năng mạnh mẽ hơn, xịn xò hơn nên bây giờ ko dùng EJS
    5. Việc sử dụng EJS thì bản chất mình đang render dữ liệu phía server, SSR (server side rendering)
    6. Để dùng cài đặt npm i (install) ejs
 */
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();
const port = 8080;
app.set("view engine", "ejs");
const router = require("../router/users.js");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const text = "Ejs";
// const users = [
//     {
//         "name": "Hồng Vân",
//         "id": 51,
//         "address": "Sài Gòn"
//     },
//     {
//         "name": "Tuyết Anh",
//         "id": 68,
//         "address": "Hà Nội"
//     },
//     {
//         "name": "Minh Phương",
//         "id": 92,
//         "address": "hà Nội"
//     }
// ]
app.use("/", router);
const server = app.get("/home", (req,res)=>{
    let data = JSON.parse(fs.readFileSync("./data/db.json", "utf-8"));
    let users = data.users;
    res.render("index", {text, users})
}
)
server.listen(port,()=>{
    console.log(`server đang lắng nghe trên cổng http://localhost:${port}`);
})