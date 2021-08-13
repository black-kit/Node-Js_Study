import http from 'http'
import {URL} from 'url'
import fs from 'fs'

const post = 8080
// http:localhost:8080/index.html <- 먼저 파싱하는 과정이 필요
http.createServer((req, res)=>{

    //console.log(req.url);

    const urlObj = new URL(
        req.url,
        "http://exam.com" //
    )

    console.log(urlObj.pathname);

    let header = {
        'Content-Type' : 'text/plain'
    }

    let _path = './www' + urlObj.pathname;
    console.log(_path);
    let data = fs.readFileSync(_path);
    req.writeHeader(200, header)

    req.end('ok')

}).listen(port);

console.log(`listen port : ${port}`);