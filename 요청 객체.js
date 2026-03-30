/*
express와 nodemon npm으로 설치후에 하기
*/

const http = require("http");
const app = express();

app.get("/", (req, res) => {
    const headers = req.headers;
    res.send(headers);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

/
*
이 코드는 Express.js 프레임워크를 사용해 웹 서버를 만드는 기초적인 예제입니다. 

1. 코드 상세 해석
const app = express();: Express 앱 객체를 생성합니다. (단, 상단에 const express = require("express");가 생략되었습니다.)
app.get("/", ...): 브라우저에서 메인 주소(/)로 접속했을 때 실행될 동작을 정의합니다.
req.headers: 클라이언트(브라우저)가 서버로 보낸 HTTP 헤더 정보를 가져옵니다. (어떤 브라우저인지, 어떤 언어를 쓰는지 등)
만약에 req.body를 사용하면: 서버로 POST 요청할 때, 넘겨준 정보를 받는거(로그인 버튼을 눌렀을 때의 아이디 및 비밀번호 값)
만약에 req.cookies를 사용하면: 클라이언트에 저장된 쿠키 정보를 서버로 함께 넘기는 경우네 쿠키 정보를 담고 있음.
만약에 req.params를 사용하면: URL 뒤에 라우트 파라미터가 포함되어 있을 경우에 파라미터 정보를 담고 있음.
만약에 req.query를 사용하면: 요청 URL에 포함된 질의 매개변수(query)를 담고 있음. 예시로 검색어를 입력 후 검색 버튼을 클릭했을 때, 검색어와 관련된 질의 매개변수가 여기에 담김.

res.send(headers): 가져온 헤더 정보를 다시 브라우저 화면에 그대로 보여줍니다.
app.listen(...): 서버를 3000번 포트에서 대기시킵니다.
*
/
