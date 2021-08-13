// let a = parseInt (process.argv[2])
// let b = parseInt (process.argv[3])



// console.log(a+b);
// a,b가 string 형인데 +를 해도 붙는다.
// 1과 2를 더하면 3이 나오는 것이 아니라 12가 나온다.
// 그렇기 때문에 형변환을 해줘야 한다. parseInt 사용


let a = parseInt (process.argv[2])
let b = parseInt (process.argv[3])
let c = parseInt (process.argv[4])
let d = parseInt (process.argv[5])
let e = parseInt (process.argv[6])

console.log((a+b+c+d+e)/5);
