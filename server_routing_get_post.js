const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.status(200);
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.send("구름이 안녕");
});

app.get("/contacts", (req, res) => {
    res.status(200);
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.send("구름이네 콘텐츠");
});

app.post("/contacts", (req, res) => {
    res.status(201);
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.send("콘텐츠가 추가됨");
});


app.listen(port, () => {
    console.log(`${port}번 포트에서 구름이가 나타나요`);
});


/*
Node.js(특히 Express 프레임워크)에서 라우팅(Routing)은 클라이언트의 요청(URL 경로 및 HTTP 메서드)을 보고, 해당 요청에 맞는 적절한 함수(핸들러)로 연결해주는 "요청 경로 정의 및 응답 방식"을 의미합니다. 이는 서버가 도메인 뒤에 오는 주소(/, /login, /about 등)에 따라 다른 컨텐츠를 보여주게 하는 핵심 기능입니다.

vscode 썬더 클라이언트로 라우팅해보기

특징 	                GET	                          POST
데이터 위치	URL 쿼리 스트링 (?a=1)	HTTP Body
노출 여부	노출됨	숨겨짐 (암시적)
목적	데이터 조회/검색	데이터 생성/수정/삭제
처리 미들웨어	불필요	body-parser 등 필요
Node.js 접근	req.query	req.body
데이터 길이	제한 있음	제한 없음

HTTP 상태 코드 201 (Created)은 요청이 성공적으로 처리되어 새로운 리소스가 생성되었음을 의미합니다.
이 코드에서 GET과 POST의 상태 코드가 다른 이유는 다음과 같습니다.
GET (/contacts): 단순히 기존의 데이터를 조회하는 동작이므로, "성공"을 뜻하는 가장 일반적인 코드인 200 (OK)을 사용합니다. 
POST (/contacts): 새로운 연락처(콘텐츠)를 서버에 추가(생성)하는 동작입니다. [4] REST API 설계 원칙에 따라, 단순히 성공했다는 의미를 넘어 "새로운 데이터가 만들어졌다"는 것을 명확히 알리기 위해 201을 사용하는 것이 표준입니다.
결론적으로, 클라이언트에게 "요청하신 대로 새로운 데이터가 서버에 잘 저장되었습니다"라고 구체적으로 알려주기 위해 201 코드를 사용한 것입니다.

#####

HTML <form> 태그 활용하기 
POST 요청은 주로 웹 페이지의 폼(Form)을 통해 전달될 수도 있습니다.
테스트용 HTML 파일을 만들어 확인해 볼 수 있습니다. 

다음 내용을 담은 간단한 HTML 파일을 만들어 실행하거나, 서버에서 응답하는 페이지에 포함시킵니다.
html
<form action="/contacts" method="POST">
  <button type="submit">연락처 추가 테스트</button>
</form>
코드를 사용할 때는 주의가 필요합니다.



*/
