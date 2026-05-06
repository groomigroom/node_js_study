import http from 'node:http';
//import http from 'node:http';는 ES 모듈(ESM) 구문을 사용하여 Node.js의 내장 HTTP 서버 및 클라이언트 기능을 불러오는 최신 방식입니다.
import { URL } from 'node:url';
//import { URL } from 'node:url';은 ES 모듈(ESM) 방식으로 Node.js의 내장 url 모듈에서 WHATWG URL 표준 API를 불러오는 문장입니다.
//WHATWG URL 표준 API는 웹 브라우저와 Node.js 환경에서 일관되게 URL을 처리하기 위해 제정된 국제 표준 스펙(URL 클래스)을 구현한 것입니다. 과거 Node.js의 내장 url.parse() 방식이 가지던 보안 취약점과 구식 명세 문제를 해결하기 위해 도입되었습니다.

// 템플릿 생성 로직을 함수로 분리했습니다. (유지보수 용이)
function createTemplate(title, content) {
  return `
    <!doctype html>
    <html lang="ko">
    <head>
      <title>구름이의 서버 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">김구름 페이지</a></h1>
      <nav>
        <ul>
          <li><a href="/?id=김구름">김구름</a></li>
          <li><a href="/?id=김멍멍">김멍멍</a></li>
          <li><a href="/?id=김비숑">김비숑</a></li>
        </ul>
      </nav>
      <main>
        <h2>${title}</h2>
        ${content}
      </main>
    </body>
    </html>
  `;
}

const DEFAULT_CONTENT = `
  <p><a href="#" target="_blank" title="김구름은 비숑입니다.">김구름 멍멍멍</a> 구름이는 오늘도 멍멍멍</p>
  <p style="margin-top:45px;">구름이의 서버입니다.</p>
`;

const server = http.createServer((req, res) => {
  // 최신 URL API 사용
  const baseURL = `http://${req.headers.host}`;
  const { pathname, searchParams } = new URL(req.url, baseURL);
  /*
  구조 분해 할당
  new URL(req.url, baseURL) 객체 안에는 -------------
  href: 전체 URL 문자열
  protocol: 프로토콜 (예: https:)
  host: 호스트 전체 (예: example.com:8080)
  hostname: 포트를 제외한 도메인 (예: example.com)
  port: 포트 번호 (예: 8080)
  pathname: 경로 (예: /p/a/t/h)
  search: 쿼리 스트링 전체 (예: ?query=string)
  searchParams: 쿼리 스트링을 다루는 전용 객체. URL 뒤의 쿼리 스트링(?id=123)을 다루기 쉬운 URLSearchParams 객체로 가져옵니다. 이 객체를 통해 .get('id')와 같은 메서드로 값을 쉽게 추출할 수 있습니다.
  hash: 해시/앵커 (예: #hash)
  */

  // 파비콘 요청 무시
  if (pathname === '/favicon.ico') {
    res.writeHead(404);
    return res.end();
  }

  // 라우팅 및 데이터 추출
  let title = searchParams.get('id') || 'Welcome';

  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  const html = createTemplate(title, DEFAULT_CONTENT);
  res.end(html);
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

/*

// 1. 각 ID에 맞는 콘텐츠를 객체로 정리
const contentMap = {
  'home': `<h1>Welcome Home</h1><p>Home content...</p>`,
  'about': `<h1>About Us</h1><p>Company info...</p>`,
  'default': DEFAULT_CONTENT // 미리 정의한 기본값
};

// 2. ID에 따라 가져오는 로직 (예: URL 파라미터가 'home'인 경우)
const id = searchParams.get('id') || 'default';
const currentContent = contentMap[id] || contentMap['default'];

*/
