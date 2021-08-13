// 비동기 객체를 쓰지 않는 것이다. 

import axios from "axios";


axios.get('http://localhost:8090/echo?title=hell0&msg=nodejs')
.then((res)=>{
    console.log(res.status);
    console.log(res);

})
.catch((err)=>{
    console.log(err);
})

