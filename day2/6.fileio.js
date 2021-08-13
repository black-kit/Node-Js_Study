// 파일을 읽어오는 프로그램
import fs from "fs";

let data = fs.readFileSync('text2.txt',
    {
        encoding: 'utf-8'
    }
);
console.log(data);


// 비동기 방식
// call-back 함수 사용
fs.readFile('text2.txt',
    {
        encoding: 'utf-8'
    },
    function(err, data){
        if(err){
            console.log(err);
        }
        else{
            console.log('ok')
            console.log(data);
        }
    }
);
