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

    let method = req.method; // GET,POST 인지 구분
    
    if(method === 'GET'){
        if(urlObj.pathname === '/echo')// 에코 요청 처리
        {
            let _title = urlObj.searchParams.get('title');
            let _msg = urlObj.searchParams.get('msg');

            result._title = _title
            result.msg = _msg
        }
    }
                //포스트 처리
    else if(method === 'POST'){
        if(urlObj.pathname === '/echo')// 에코 요청 처리
        {
            res.on('data',(playload)=>{ // string 버퍼 데이터 // 요청 측, 데이터를 받는 부분, 데이터가 한번에 오지 않을 수도 있다.
                body_data += playlod
            })
            res.on('end',()=>{
                result.data = body_data
                res.end(JSON.stringify(result));
            })
        }
    }
    //api가 많은 경우에는 switch case로 하는 것이 좋다. else if 하나가 스택이기 때문이다.


    res.end(JSON.stringify(result));
}).listen(port);

console.log(`listen : ${port}`);