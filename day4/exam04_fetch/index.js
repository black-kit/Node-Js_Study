// 노드 JS에서 서버에 접근할 수 있는 코드

import fetch from 'node-fetch'

/*
// fetch는 비동기 함수이다. 
fetch('http://localhost:8090/echo?title-hello&msg=nodejs')

// 다시 돌아온다는 약속 promise 코드
.then((res)=>{
     //console.log(res.json())
     return res.json()
}) 

.then((jsonObj)=>{
    console.log();
})
*/

async (function(){
    let res = await (await fetch('http://localhost:8090/echo?title-hello&msg=nodejs')).json();
    console.log('res');
})();