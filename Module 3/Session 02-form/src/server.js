var http = require('http');
var url = require('url');
// tải thư viện http có sẵn trong nodejs
var port = 8080;
var server = http.createServer(function (req, res) {
    console.log("111111", req.url);
    var domain = `http://localhost:8080${req.url}`;
    var link = url.parse(domain, true);
    var name = link.pathname;
    var result = name.split('/')
    console.log("aaa", result);
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.write(`<h1>Đây là trang: ${result}</h1>`);
    res.end(); // Kết thúc việc gọi server
}).listen(port, function (params) {
    console.log(`Server đang gọi trên port: http://localhost:${port}`);
})