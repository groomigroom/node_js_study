console.log(`현재 폴더는 ${__dirname}`);
console.log(`현재 파일은 ${__filename}`);

let remainingTime = 3000;
const waitingInterval = 500;

const timer = setInterval(() => {
    console.log(`${remainingTime / 1000}초 남음`);
    remainingTime -= waitingInterval;

    if (remainingTime <= 0) {
        console.log("Hi");
        clearInterval(timer);
    }
}, waitingInterval);

/*
clearInterval은 setInterval 함수로 반복 실행하던 것을 멈추는 것
setTimeout은 지정한 시간이 지난 후에 함수 실행하는 것
*/

