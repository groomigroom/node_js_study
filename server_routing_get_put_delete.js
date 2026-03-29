const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.status(200);
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.send("구름이 안녕");
});

app.get("/contacts", (req, res) => {
    res.status(200);
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.send("구름이네 콘텐츠");
});

app.post("/contacts", (req, res) => {
    res.status(201);
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.send("콘텐츠가 추가됨");
});

//id에 맞는 연락처 가져오기
app.get("/contacts/:id", (req, res) => {
    res.status(200).send(`view Contact for 구름이 이름: ${req.params.id}`);
});

//id에 맞는 연락처 수정하기
app.put("/contacts/:id", (req, res) => {
    res.status(200).send(`updates Contact for 구름이 이름: ${req.params.id}`);
});

//id에 맞는 연락처 삭제하기
app.delete("/contacts/:id", (req, res) => {
    res.status(200).send(`delete Contact for 구름이 이름: ${req.params.id}`);
});

app.listen(port, () => {
    console.log(`${port}번 포트에서 구름이가 나타나요`);
});
