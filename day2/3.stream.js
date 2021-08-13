// # 파일을 읽어서 콘솔로 입출력할 때
const fs=require('fs')
const src = fs.createReadStream('out.txt')
const dest = process.stdout

src.pipe(dest); //file -> console