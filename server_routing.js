const http = require("http"); // 1. http 모듈 불러오기

const server = http.createServer((req, res) => {
    const { method, url } = req; 
    res.setHeader("Content-Type", "text/plain");

    if (method === "GET" && url === "/home") {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end("집인데요");
    } else if (method === "GET" && url === "/about") {
        res.statusCode = 200;
        res.end("ABOUT");
    } else {
        res.statusCode = 404;
        res.end("NOT FOUND");
    }
});

// 2. 서버를 3000번 포트에서 실행
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

/*
서버 실행 방법
**터미널(또는 CMD)**을 엽니다.
해당 파일이 있는 폴더로 이동합니다.
아래 명령어를 입력합니다.
bash
node server.js
코드를 사용할 때는 주의가 필요합니다.

3. 결과 확인
브라우저를 열고 다음 주소들에 접속해 보세요.
http://localhost:3000/home → HOME 출력
http://localhost:3000/about → ABOUT 출력
그 외의 주소 → NOT FOUND 출력

#####

utf-8 인코딩 명시시에

if (method === 'GET' && url === '/home') {
  res.statusCode = 200;
  // 해결 방법: utf-8 인코딩 명시
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.end('집인데요');
}
또는 res.writeHead를 사용할 수도 있습니다. 
javascript
res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
res.end('집인데요');
*/
