const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function startCalc() {


    rl.question('첫 번째 숫자 입력하기:', (num1) => {
        rl.question('연산자 입력하기 (+, -, *, /):', (operator) => {
            rl.question('두 번째 숫자 입력하기:', (num2) => {
                const n1 = parseFloat(num1);
                const n2 = parseFloat(num2);
                let result = 0;
                let valid = true;

                switch (operator) {
                    case '+':
                        result = n1 + n2;
                        break;
                    case '-':
                        result = n1 - n2;
                        break;
                    case '*':
                        result = n1 * n2;
                        break;
                    case '/':
                        if (n2 === 0) {
                            console.log('오류입니다. 0으로 나누는 건 불가능합니다.');
                            valid = false;
                        }
                        else {
                            result = n1 / n2;
                        }
                        break;
                    default:
                        console.log('오류입니다. 연산자를 바르게 입력하세요.');
                        valid = false;
                }

                if (valid) {
                    console.log(`요청 계산 결과: ${n1} ${operator} ${n2} = ${result}`);
                }

                startCalc();
            });
        });
    });
};

startCalc();
