const express = require('express');
const app = express();

app.use(express.static(__dirname + '/pages'));

app.listen(3000, () => {
    console.log('3000번에 연결됨');
});

app.get('/', (req, res) => {
    console.log('루트 요청옴');
    res.sendFile(__dirname + '/pages/index.html');
});

app.get('/about', (req, res) => {
    console.log('about 요청옴');
    res.sendFile(__dirname + '/pages/about.html');
});

app.get('/working', (req, res) => {
    console.log('working 요청옴');
    res.sendFile(__dirname + '/pages/working.html');
});
