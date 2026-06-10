npm install --save mysql2
로 mysql2 패키지 설치

https://www.npmjs.com/package/mysql2

동기(Synchronous)는 요청한 작업의 결과를 기다린 후 다음 작업을 처리하는 방식이고, 비동기(Asynchronous)는 요청한 작업의 완료 여부와 관계없이 바로 다음 작업을 수행하는 방식

async (비동기 함수 선언)의미: 해당 함수가 항상 Promise를 반환하도록 만듭니다.
특징: 함수 내부에 일반적인 값을 반환하더라도, 자바스크립트는 이를 자동으로 Promise.resolve()로 감싸서 반환합니다.
이 키워드가 붙은 함수 내부에서만 await를 사용할 수 있습니다.

await (기다림)의미: Promise가 처리(이행되거나 거부될 때)될 때까지 함수의 실행을 일시 중지시킵니다.
특징: await는 프로미스가 완료될 때까지 기다린 후, 완료되면 그 결과값(데이터)을 반환합니다.
이 동작은 메인 스레드를 멈추지 않는(non-blocking) 방식으로 작동하여 애플리케이션의 성능을 유지합니다.
