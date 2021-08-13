console.log('step 1');

// 1초 있다가 보여줘! 이게 대표적인 비동기 
// setTimeout(()=> {
//     console.log('step 2');
// },1000)


new (Promise((resolve)=>{
    console.log('step1');
    setTimeout(()=> {
        console.log('step 2');
    },1000)
}))
.then(()=>{
    console.log('step3');
})

// console.log('step 3');