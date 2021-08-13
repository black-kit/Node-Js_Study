//

import repl from 'repl'
let repl_context = repl.start(
    {
        prompt: '>',
        input: process.stdin,
        output: process.stdout
    }
).context;

// node 명령어 친 것과 같다.
// 예를 들어 함수를 만들었다 치자.
// 함수의 호출하는 타이밍을 잡아서 디버깅을 해야한다.
// 그리고 밑에 함수를 repl context에 등록 시켜줘야 한다.
// 디버깅 할 때 매우 중요한 부분이다. 
// 서버가 다운되는 타이밍을 찾아야 하는데, 그 상황을 만들어서 디버깅해야 한다. 그럴때 repl을 사용해야 한다.

// 타이밍이 아주 중요한 함수
function foo(){
    console.log('hello world');
}
repl_context.foo = foo;