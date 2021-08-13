process.stdin.resume()
process.stdin.setEncoding('utf-8')
const { exit } = require('process');
const util = require('util')

process.stdin.on('data', function(text){
    console.log(`echo: ${text}`);
    //console.log('echo:' + text);

    //비동기 언어의 특징이다.
    //코드를 실행시키면, 우리가 모르는 곳에 루프가 있다. 계속 루프가 들어가져 있다.
    //이와 같은 경우도 루프를 사용해야 하는데, node js 루프를 안쓰게 되어 있다.

    // 이런 비슷한 문제를 만나면 \r\n을 붙여보면 된다.
    if( text === 'exit\r\n'){
        process.exit();
    }
})