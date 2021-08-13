FROM node:14 

RUN apt-get update && \
apt-get install -y vim nano net-tools openssh-server



#1. 이미지 빌드하기
#2. 도커 파일 만들기


# RUN 커맨드 
# 컨테이너를 실행했을 떄, 기본적으로 위에 커맨드는 실행해주세요 라는 뜻이다.
# 이미지 받아오기
# net-tools : ip주소 얻고 싶을 때 하는 관련 툴이다.
# openssh-server : ssh에 접속하는 것은 일반적인 서버 작업 방식이다. 

# docker build  . -t study/hello-node:step1
# -t는 생성될 도커 이미지 이름과 태그를 지정하는 것이다.

# docker ps -a
# 컨테이너 리스트 확인하기

# docker create -it -p 8080:8080 -p 8022:22 --name doc-node-test study/hello-node:step
# it옵션 tty를 통해서 인터렉티브 하고 가상 머신과 호스트 머신간의 연결 경로를 tty로 하겠다.
# tty와 통신하겠다.

# docker exec -it 컨테이너 아이디(이름) bash - 가상 머신 실행시키기

# SSH 접속을 해보자

# 이미지 만들고
# 컨테이너 만들고
# 컨테이너 실행시키고
# 포트 포딩을 해야 한다. 도커의 8080 포트를 내 도커의 8080으로 포트 포워딩을 해달라.


# --------------------
# SSH 접속을 해보자
# bash에서 서버 돌리기 service ssh start
# ssh root@localhost -p 8022
# localhost에서 현 ip주소를 입력하고 다시 하면 가상 세계에서 가상 세계로 들어가지는 것이다.
# ssh 가서 permission yes하고
# 실행시키고 로컬에서 접속하면 접속된다.
# curl -t 

# create와 start가 합쳐진 명령어는 run이다.

# ---------------------
# 몽고 디피 고유 번호 27017 
# docker run --name mongo_container1 -d -p 27017:27017 -v C:\Users\seok_jin\Desktop\NodeJs_work\database (내 위치) mongo

# db.memo.insert({}) // db에 메모라는 파일을 만들어 안에 데이터를 넣는다.
# 지금은 로컬에서 들어가는 것 이지만 외부시스템에서 접속을 할 줄 알아야 한다.
# docker run --name 
# -w 옵션 -d 옵션
# docker exec -d -w 경로 도커 이름 명령어 -- 