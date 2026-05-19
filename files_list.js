import { readdir } from 'node:fs/promises';
//Node.js에서 import { readdir } from 'node:fs/promises'; 문장은 비동기적으로 디렉토리 내의 파일 및 폴더 목록을 읽어오는 함수를 가져오는 ES 모듈(ESM) 구문입니다.상세한 의미는 다음과 같습니다.1. 코드 상세 분석import { readdir } ...: 내장된 파일 시스템(fs) 모듈에서 readdir (Read Directory) 함수 하나만 선택해서 가져옵니다(Named Import).from 'node:fs/promises':node:: Node.js 내장 모듈임을 명시하는 접두사입니다./promises: 콜백 기반이 아닌 Promise 기반의 fs API를 사용하겠다는 의미입니다.이 방식을 통해 async/await 또는 .then() 구문을 사용하여 가독성 높은 비동기 코드를 작성할 수 있습니다.2. 주요 기능 및 특징디렉토리 내용 목록화: 지정한 경로에 있는 파일과 폴더의 이름을 배열 형태로 반환합니다.비동기 동작: 파일을 읽는 동안 Node.js의 메인 스레드를 멈추지 않아(Non-blocking), 고성능 I/O 처리가 가능합니다.Promise 반환: 결과값을 Promise로 반환하므로, await를 사용하여 동기 코드처럼 직관적으로 작성할 수 있습니다

const testFolder = './data';

async function logFiles() {
    //async function은 함수가 비동기적(Asynchronous)으로 동작하며, 항상 Promise 객체를 반환함을 의미합니다. 이 함수는 내부에서 await 키워드를 사용하여 프로미스의 결과를 기다리며, 복잡한 비동기 코드를 동기식 코드처럼 읽기 쉽게 작성하게 해줍니다.핵심 의미 및 특징자동 Promise 반환: async가 붙은 함수는 결과값이 일반 값이라도 암시적으로 Promise.resolve(값) 형태로 반환됩니다.await 사용 가능: async 함수 내부에서만 await를 사용할 수 있습니다. await는 프로미스가 완료(Settled)될 때까지 함수의 실행을 일시 중지하고 결과를 반환합니다.비동기 처리(비차단): 메인 스레드를 차단하지 않고, 파일을 읽거나 네트워크 요청을 처리하는 등 긴 작업이 완료될 때까지 기다리지 않고 다음 코드를 먼저 실행합니다.가독성 및 유지보수: 기존의 콜백 헬(Callback Hell)이나 긴 .then() 체이닝을 해결하여, 코드가 순차적으로 실행되는 것처럼 보입니다.
  try {
    //async 함수에서 try...catch는 비동기 코드(await)에서 발생하는 오류를 동기식 코드처럼 직관적으로 처리(예외 처리)하기 위한 안전장치입니다. await로 대기 중인 프로미스가 rejected 상태가 되면 에러를 던지고, catch 블록이 이를 잡아 프로그램 중단을 막고 에러를 처리합니다.
    const filelist = await readdir(testFolder);
    //await는 비동기 작업(Promise)이 완료될 때까지 코드 실행을 일시 중지하고, 결과값(성공 시 resolve, 실패 시 throw)을 기다리는 키워드입니다.
    //fs.readdir은 지정된 디렉토리(폴더) 내의 파일과 폴더 목록을 배열 형태로 읽어오는 비동기 함수입니다.
    console.log(filelist);
  } catch (error) {
    console.error('디렉터리 읽기 실패:', error);
  }
}

logFiles();
