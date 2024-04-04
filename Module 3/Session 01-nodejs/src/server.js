console.log("Hello nodejs");
// alert("xin chao nodejs");

var http = require('http');// cú pháp của ES5
// import http from "http"
var fs = require('fs');

var port = 8080;
var server = http.createServer(function (req, res) {
    let dataUser=[
        {
            userId: 1,
            name: "hoa",
            address:"hà nội"
        },
        {
            userId: 2,
            name: "minh thu",
            address:"hà nội"
        },
        {
            userId: 3,
            name: "linh",
            address:"hà nội"
        }
    ]
    let html = ""
    dataUser.forEach((item, index)=>{
        html +=`
            <tr>
                <th>${index + 1}</th>
                <th>${item.name}</th>
                <th>${item.address}</th>
            </tr>
        `
    })
    let file = fs.readFileSync("test.html", "utf8");
    file = file.replace("binh", html);
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.end(file);
})
server.listen(8080, function name(params) {
    console.log(`Tạo server ở port: http://localhost:${port}`);
})
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello World!');
// }).listen(8080);