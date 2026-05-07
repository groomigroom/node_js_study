const fs = require('node:fs/promises');
//require('node:fs/promises')는 파일 시스템(File System) 작업을 비동기 Promise 기반 API로 가져오는 방식입니다. 콜백(callback) 헬을 피하고 async/await를 사용하여 가독성 높은 비동기 파일 입출력(읽기, 쓰기, 삭제 등)을 처리할 때 사용합니다.


async function readFile() {
    //async 함수는 비동기 작업을 다루는 핵심 키워드로, 해당 함수가 Promise를 반환함을 명시하며 코드 흐름을 멈추지 않고 비동기적(Asynchronous)으로 동작하게 합니다. 내부적으로 await를 사용해 콜백 헬을 해결하고, 비동기 코드를 동기식 코드처럼 직관적이고 깔끔하게 작성할 수 있게 합니다.
    //비동기(Asynchronous)는 쉽게 말해 "한 작업이 끝날 때까지 기다리지 않고 다음 작업을 먼저 시작하는 방식"입니다.
    try {
        //try 블록 내에서 발생한 네트워크 오류, 데이터베이스 에러 등을 catch에서 캡처하여 로그를 남기거나 사용자에게 응답합니다.
        const data = await fs.readFile('new.txt', 'utf8');
        //async 함수 내에서 await는 프로미스(Promise)가 완료(resolve/reject)될 때까지 함수 실행을 일시 중지하고, 완료 시 결과값을 반환받아 다음 코드를 순차적으로 실행합니다.
        //fs.readFile은 파일 시스템(fs) 모듈을 사용하여 로컬 파일의 전체 내용을 비동기적으로 읽어오는 메서드입니다.
        console.log(data);
    } catch (err) {
        console.error('파일을 읽는 중 에러 발생:', err);
        //catch (err): "만약 try 블록 안에서 에러가 발생하면, 그 에러 정보를 err이라는 이름의 변수에 담아서 이 중괄호({ }) 안으로 들어오라"는 뜻입니다.console.error(...): 일반적인 console.log보다 심각한 상황(에러)임을 알리기 위해 사용하는 출력 함수입니다. 보통 터미널에 빨간색 텍스트로 표시되거나 에러 로그로 분류됩니다.'파일을 읽는 중 에러 발생:': 에러가 어디서 왜 발생했는지 사람이 읽기 편하도록 적어준 설명 문구입니다., err: 실제 시스템에서 발생한 구체적인 에러 메시지(예: 파일이 없다, 권한이 없다 등)를 함께 출력합니다.
    }
}

readFile();

//new.txt 파일을 준비하고, 이 js 파일과 같은 폴더에 넣은 뒤에 실행하기
