//const express = require('express')
//import express from "express"
import dotenv from "dotenv"

const app = express()
const port = process.env.PORT || 3000

console.log(process.env.Node_ENV);
console.log(process.env.MONGODB_URL);
console.log(process.env.MONGODB_PORTnp);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  if(process.env.NODE_ENV == "dev") // 개발자 환경인가 클라이언트 환경인가 확인해주는 구문
    console.log(`Example app listening at http://localhost:${port}`)
})