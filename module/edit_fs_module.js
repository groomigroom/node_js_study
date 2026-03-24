const fs = require("fs");

/*
Node.js의 내장 fs(File System) 모듈은 로컬 파일 및 디렉터리 조작(읽기, 쓰기, 삭제)을 담당합니다. 주로 비동기 방식(fs.promises 또는 콜백)을 사용하여 서버 성능을 유지하며, readFileSync 같은 동기 함수는 초기화 시 사용합니다. 파일을 다룰 때는 'utf8' 인코딩을 지정해야 문자열로 받아볼 수 있습니다. 
1. 파일 쓰기 (Write File - 비동기)
javascript
const fs = require('fs').promises;

// 파일 생성 및 내용 기록
fs.writeFile('example.txt', 'Hello, Node.js!', 'utf8')
  .then(() => console.log('파일이 성공적으로 작성되었습니다.'))
  .catch(err => console.error(err));
2. 파일 읽기 (Read File - 비동기)
javascript
const fs = require('fs').promises;

// 파일 읽기
fs.readFile('example.txt', 'utf8')
  .then(data => console.log(data)) // 내용 출력
  .catch(err => console.error(err));
3. 파일 추가 (Append File - 비동기)
javascript
const fs = require('fs').promises;

// 기존 파일 내용에 추가
fs.appendFile('example.txt', '\n새로운 내용 추가', 'utf8')
  .then(() => console.log('데이터가 추가되었습니다.'))
  .catch(err => console.error(err));
4. 동기 방식으로 파일 읽기 (readFileSync) 
javascript
const fs = require('fs');

try {
  // 동기식은 'Sync'가 붙음, 인코딩 미지정 시 Buffer 반환 [7]
  const data = fs.readFileSync('example.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error(err);
}
5. 파일/디렉토리 존재 여부 확인 및 삭제
javascript
const fs = require('fs').promises;

async function manageFile() {
  try {
    // 파일 존재 여부 확인 후 삭제 [9]
    await fs.access('example.txt');
    await fs.unlink('example.txt');
    console.log('파일이 삭제되었습니다.');
  } catch (err) {
    console.log('파일이 존재하지 않거나 에러가 발생했습니다.');
  }
}
manageFile();
*/
