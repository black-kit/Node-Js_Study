import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

const app = express();

// 미들웨어 
app.use(express.static('./www')); // 정적 웹서비스 미들웨어 등록
app.use('/text', express.static('./text'))//텍스트 파일에 대한 미들웨어 등록


// 맨 마지막 단계에서 들어 오는 것이 GET이다.
app.get('/api/v1/hello',(req,res)=>{
    // res.send('hello express');
    res.json({r:'ok',info:'hello backend'})

    // 아래 세줄은 위에 한 코드를 풀어서 쓴 경우이다 
    // res
    // .set('Content-Type', 'application/json')
    // .status(200)
    // .send(JSON.stringify({r:'ok',info:'hello backend'}))
})



app.get('/api/v1/addUser/name/:name/age/:age',(req,res)=>{

    res.json({r:'ok',
    name: req.params.name,
    age: req.params.age,
    })
})

app.get('/help', (req, res)=>{
    res
    .set('Content-Type', 'text/html')
    .status(200)
    .send('<h1>Help</h1>')
})

app.all('*',(req,res)=>{
    res
    .status(404)
    .send(`page not found ${req.url}`);
})

app.listen(process.env.PORT, ()=>{
    console.log(`server start at : ${process.env.PORT}`);
})