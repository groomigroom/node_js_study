const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('3000번에 연결됨');
});

app.get('/', (req, res) => {
    console.log('루트 요청옴');
    res.send('루트의 요청');
});

app.get('/about', (req, res) => {
    console.log('about 요청옴');
    res.send('about의 요청');
});
