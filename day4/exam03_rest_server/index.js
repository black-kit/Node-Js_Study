// 간단한 rest 서버

import http from 'http'
import {URL} from 'url'

const port = 8090

http.createServer((req,res)=> {

    const urlObj = new URL(
        req.url,
        'http://example.com'
    );

    console.log(`pathname: ${urlObj.pathname}`);
    console.log(`search: ${urlObj.search}`);
    console.log(`hostname : ${urlObj.hostname}`);

    let result = {
        r: 'ok'
    }

    let header = {
        'Content-Type': 'text/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Max-Age': '1000',
        "Access-Control-Allow-Headers": "*" //CORS 정책 허용  * 는 모두 허용 
    }
    res.writeHead(200, header)

    //api가 많은 경우에는 switch case로 하는 것이 좋다. else if 하나가 스택이기 때문이다.
    if(urlObj.pathname === '/echo')// 에코 요청 처리
    {
        let _title = urlObj.searchParams.get('title');
        let _msg = urlObj.searchParams.get('msg');

        result._title = _title
        result.msg = _msg
    }
    else if(urlObj.pathname === '/sum'){
        let a = parseInt( urlObj.searchParams.get('a'));
        let b = parseInt( urlObj.searchParams.get('b'));

        result.cal = a+b
    }
    else if(urlObj.pathname === '/sub'){
        let a = parseInt( urlObj.searchParams.get('a'));
        let b = parseInt( urlObj.searchParams.get('b'));

        result.cal = a-b
    }
    else if(urlObj.pathname === '/avg'){
        let a = parseInt( urlObj.searchParams.get('a'));
        let b = parseInt( urlObj.searchParams.get('b'));
        let c = parseInt( urlObj.searchParams.get('c'));
        let d = parseInt( urlObj.searchParams.get('d'));
        let e = parseInt( urlObj.searchParams.get('e'));


        result.cal = (a+b+c+d+e)/5
    }

    

   

    res.end(JSON.stringify(result));
}).listen(port);

console.log(`listen : ${port}`);