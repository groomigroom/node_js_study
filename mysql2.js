//https://www.npmjs.com/package/mysql2

import mysql from 'mysql2/promise';
//Promise 기반의 비동기 API와 async/await 문법을 사용할 수 있도록 제공하는 내장 서브 모듈입니다. readme 참고하기
//Promise(프로미스)는 "지금은 값이 없지만 미래에 완료될 작업의 결과(또는 실패)를 나타내는 객체"입니다. 네트워크 요청이나 파일 읽기 등 시간이 걸리는 비동기 작업을 순차적이고 안정적으로 처리하기 위해 사용됩니다


// Create the connection to database
const connection = await mysql.createConnection({
    //await => readme 참고하기
    //createConnection은 주로 데이터베이스(예: MySQL)와 서버 간의 연결(Connection)을 하나만 생성할 때 사용하는 메서드입니다.
    host: 'localhost',
    user: 'root',
    database: 'test',
});

// A simple SELECT query
try {
    const [results, fields] = await connection.query(
        'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45'
    );

    console.log(results); // results contains rows returned by server
    //results (쿼리 실행 결과 데이터)의미: 데이터베이스가 SQL 쿼리를 처리한 후 서버로 돌려준 실제 데이터(행/Rows)입니다.형태: JavaScript의 배열(Array) 형태로 들어옵니다.
    console.log(fields); // fields contains extra meta data about results, if available
    //조회한 데이터의 실제 내용이 아니라, 데이터가 속한 테이블과 컬럼(필드)에 대한 정보(메타데이터)입니다.형태: 각 컬럼의 이름, 데이터 타입(문자열인지 숫자 인지), 글자 수 제한 등의 정보가 담긴 객체 배열입니다.
} catch (err) {
    console.log(err);
    //try 블록 내부에서 코드를 실행하다가 문제가 발생했을 때 그 원인을 담고 있는 객체입니다.역할: catch (err) 구문으로 전달되며, 에러 메시지나 에러 코드 정보가 들어있습니다.
}

// Using placeholders
try {
    const [results] = await connection.query(
        'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
        ['Page', 45]
    );

    console.log(results);
} catch (err) {
    console.log(err);
}

// Close the connection
await connection.end();
//데이터베이스와의 연결(세션)을 정상적으로 닫아주는 메서드입니다.await가 붙은 이유: 연결을 끊는 작업도 데이터베이스와 신호를 주고받아야 하므로 시간이 걸리는 '비동기 작업'입니다. 따라서 완전히 연결이 끊길 때까지 다음 코드로 넘어가지 않고 기다리겠다는 의미입니다.필요성: 이 명령을 실행하지 않으면 Node.js 프로세스가 데이터베이스와의 연결을 계속 유지한 채 대기 상태로 남아, 프로그램이 종료되지 않고 계속 켜져 있게 됩니다. (메모리 누수 원인이 됩니다.)
