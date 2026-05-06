const http = require('http');
//웹 서버 및 클라이언트 기능을 수행하는 내장 HTTP 모듈을 불러와서(import) http 변수에 할당하는 코드입니다. 
const fs = require('fs');
//파일 시스템(File System) 모듈을 불러오는 구문으로, 서버 컴퓨터의 파일에 접근하여 읽기, 쓰기, 삭제, 폴더 관리 등 입출력 작업을 수행하는 내장 라이브러리를 가져오는 것을 의미합니다.

const app = http.createServer((request, response) => {
    //http.createServer()는 HTTP 요청을 처리할 수 있는 서버 객체(http.server)를 생성하는 핵심 함수
    // Request(req)는 클라이언트의 요청 정보(URL, 헤더, 데이터)를 담은 객체이며, Response(res)는 서버가 클라이언트에게 응답을 전송하는 데 사용하는 객체
    const baseURL = `http://${request.headers.host}`;
    //request는 Node.js HTTP 모듈의 http.IncomingMessage 객체입니다..headers.host는 HTTP 요청 헤더 중 Host 필드 값을 가져옵니다.이 값에는 보통 클라이언트가 요청한 도메인 이름 (예: example.com) 또는 IP 주소 (예: 127.0.0.1:3000)가 포함됩니다.
    //request.headers.host는 클라이언트가 HTTP 요청을 보낼 때 명시한 서버의 도메인 이름(또는 IP 주소)과 포트 번호를 의미합니다.


    const myUrl = new URL(request.url, baseURL);
    //new URL()은 WHATWG URL 표준을 기반으로 문자열 주소를 구조화된 URL 객체로 변환하는 생성자입니다. 
    // request.url은 클라이언트가 서버에 요청한 HTTP 요청의 경로(Path)와 쿼리 문자열(Query String)을 담고 있는 문자열 프로퍼티
    //request.url: 서버로 들어온 HTTP 요청의 상대 경로 (예: /users?id=10).baseURL: 프로토콜과 호스트를 포함한 기본 주소 (예: http://localhost:3000).결과 (new URL(...)): 이 둘을 결합하여 프로토콜, 호스트, 경로, 쿼리 파라미터 등을 분리하여 다룰 수 있는 URL 객체를 생성합니다.

    const queryData = myUrl.searchParams;
    //.searchParams는 URL의 쿼리 스트링(Query String, ? 뒷부분)을 쉽게 다룰 수 있게 해주는 특별한 객체입니다.
    const id = queryData.get('id');
    //:id와 같은 동적 라우팅 경로를 사용할 때, 해당 파라미터 값을 가져오는 데 사용됩니다.

    console.log(id);

    if (request.url === '/favicon.ico') {
        response.writeHead(404);
        //response.writeHead(404);는 서버가 클라이언트(브라우저)의 요청을 받았으나, 해당 리소스(페이지, 파일 등)를 찾을 수 없을 때 HTTP 404 Not Found 상태 코드와 함께 응답 헤더를 보내는 메서드입니다. 주로 존재하지 않는 URL 접근 시 에러 페이지를 표시하거나 리소스를 찾지 못했음을 알리기 위해 사용됩니다.
        return response.end();
        //return response.end();는 HTTP 응답을 즉시 종료하고 클라이언트와의 연결을 끊으며, 실행 중인 함수를 빠져나가기 위해 사용됩니다. 
    }

    response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    //response.writeHead(200);은 HTTP 서버 응답의 헤더(Header)를 설정하는 메서드로, 클라이언트(브라우저)에게 요청이 성공(OK, 상태 코드 200)했음을 알리는 역할을 합니다. 이는 서버가 요청을 올바르게 처리했으며, 응답 본문(Body)을 보낼 준비가 되었음을 명시합니다.
    //res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });와 같이 설정하는 것은 서버가 클라이언트(브라우저 등)에게 "지금 보내는 데이터는 일반 텍스트이며, UTF-8 방식으로 인코딩되어 있다"고 알려주는 HTTP 응답 헤더 설정입니다.

    // id가 없을 경우를 대비해 기본값 설정하기
    response.end(id || "안녕하세요");
    //id가 뜨게 하려면, http://localhost:3000/?id=구름이 이런식으로 입력해서 들어가야 함.
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
