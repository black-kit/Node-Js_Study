//# 키보드 입력을 받아서 파일로 출력하는 프로그램

const fs = require('fs') // 파일 시스템을 가져오는 것
const dest = fs.createWriteStream('out.txt')
const src = process.stdin
src.pipe(dest);