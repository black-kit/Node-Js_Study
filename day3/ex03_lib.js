function 중요한함수1(){
    console.log("hello")
}
function 중요한함수2(){
    console.log("es5")
}

function foo(){
    return {
        foo1: 중요한함수1,
        foo2: 중요한함수2
    }
}

module.exports = foo