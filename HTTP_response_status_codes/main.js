const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendStatus(200);
    //200은 일이 잘 처리되었다고 해주는거?
    // res.sendStatus(400);
    //400은 bad request??
    // 403 : forbidden
    // 404 : not found
    // 500 : internal server error
    // 503 : service unavailable
    //HTTP response status codes 보기!!!!!!!
});

app.listen(3000, () => {
    console.log('3000번에서 시작');
});
