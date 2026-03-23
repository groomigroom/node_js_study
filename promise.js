let likePizza = false;
const pizza = new Promise((resolve, reject) => {
    if (likePizza)
        resolve('피자를 주문');
    else
        reject('피자 주문 안함');
});

pizza
    .then(result => console.log(result))
    .catch(err => console.log(err));

/*
Node.js(및 JavaScript)에서 new Promise를 생성할 때 전달하는 콜백 함수의 매개변수 2개는 비동기 작업의 최종 상태를 결정하는 함수들로, 주로 resolve와 reject라는 이름을 사용합니다. 
이들은 Promise가 생성될 때 실행 환경(JS 엔진)에 의해 자동으로 주입되며, 각각의 역할은 다음과 같습니다.
1. 매개변수 2개의 의미
resolve (이행/성공)
의미: 비동기 작업이 성공적으로 완료되었음을 알립니다.
결과: Promise 상태가 Pending(대기)에서 Fulfilled(이행)로 변경됩니다.
동작: resolve(value)를 호출하면, .then() 절로 결과 값(value)이 전달됩니다.
reject (거부/실패)
의미: 비동기 작업 중 에러가 발생하거나 실패했음을 알립니다.
결과: Promise 상태가 Pending(대기)에서 Rejected(거부)로 변경됩니다.
동작: reject(error)를 호출하면, .catch() 절로 에러 내용(error)이 전달됩니다.
true일 때에 .then출력
false일 때에 .catch 출력
*/
