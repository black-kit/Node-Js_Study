import axios from "axios";

axios({
    type : 'POST',
    url : 'http://localhost:8090/echo',
    data : 'hello axios',
    params :{
        title:'',
        msg:''
    }
})