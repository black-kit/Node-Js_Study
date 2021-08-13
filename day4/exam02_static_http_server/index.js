import http from 'http'
import nodeStatic from 'node-static'

const port = 8080;

const fileServer = new (nodeStatic.Server)('./www')
http.createServer((req,res)=> {

    //1번 예제는 이 함수 안에 들어가는 것을 간단하게 만들었던 것이다.
    fileServer(req,res);

}).listen(port)

console.log(`listen ${port}`);