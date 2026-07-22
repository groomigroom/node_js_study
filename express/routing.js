const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('김구름이');
});

app.post('/', (req, res) => {
    res.send('post 방식');
});

app.put('/user', (req, res) => {
    res.send('/user에서의 put 방식');
});

app.delete('/user', (req, res) => {
    res.send('/user에서의 delete 방식');
});

app.listen(port, () => {
    console.log(`${port}번에서 앱 실행됩니다.`);
});

//npm install express 하기
