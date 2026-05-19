import http from 'http';
import fs from 'fs/promises';
import path from 'path';

// 파일 목록 생성 함수 (중복 제거)
function createTemplateList(filelist) {
    return `<ul>${filelist.map(file => `<li><a href="/?id=${file}">${file}</a></li>`).join('')}</ul>`;
}

// HTML 템플릿 생성 함수
function createHTML(title, list, description) {
    return `
    <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      ${list}
      <h2>${title}</h2>
      <p>${description}</p>
    </body>
    </html>
  `;
}

const app = http.createServer(async (request, response) => {
    try {
        const serverUrl = new URL(request.url, `http://${request.headers.host}`);
        const pathname = serverUrl.pathname;
        const queryId = serverUrl.searchParams.get('id');

        if (pathname !== '/') {
            response.writeHead(404);
            return response.end('Not found');
        }

        // 1. data 디렉토리에서 파일 목록 읽기
        const filelist = await fs.readdir('./data');
        const listTemplate = createTemplateList(filelist);

        // 2. 쿼리 스트링 id 유무에 따른 분기 처리
        let title = 'Welcome';
        let description = 'Hello, Node.js';

        if (queryId) {
            title = queryId;
            // 보안을 위한 상위 디렉토리 접근 방지 처리
            const safePath = path.join('./data', path.basename(queryId));
            description = await fs.readFile(safePath, 'utf8');
        }

        // 3. 응답 전송
        const html = createHTML(title, listTemplate, description);
        response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        response.end(html);

    } catch (error) {
        console.error(error);
        response.writeHead(500);
        response.end('Internal Server Error');
    }
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
