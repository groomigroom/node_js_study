const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("구름이");
});

app.listen(port, () => {
    console.log(`${port}에서 앱이 실행됨`);
});
