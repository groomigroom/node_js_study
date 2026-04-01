/*
Node.js(특히 Express 프레임워크)에서 라우터(Router)는 클라이언트의 HTTP 요청(URL 경로 및 메소드)을 해석하여 알맞은 핸들러 함수로 연결해 주는 경로 관리자입니다.
*/

const express = require("express");

const app = express();
const router = express.Router();
const port = 3000;

app.get("/", (req, res) => {
    res.status(200).send("안녕하세요");
});

router
    .route("/contacts")
    .get((req, res) => {
        res.status(200).send("콘텍트 페이지");
    })
    .post((req, res) => {
        res.status(201).send("콘텍트 페이지 만들기");
    });

router
    .route("/contacts/:id")
    .get((req, res) => {
        res.status(200).send(`아이디를 보여주세요:${req.params.id}`);
    })
    .put((req, res) => {
        res.status(200).send(`아이디를 업데이트 하세요:${req.params.id}`);
    })
    .delete((req, res) => {
        res.status(200).send(`콘텍트를 id에서 지워요 ${req.params.id}`);
    });
app.use(router);

app.listen(port, () => {
    console.log(`${port}번에서 서버 실행중이에요.`)
});

/*
제공해주신 코드는 Express.js 프레임워크를 사용해 간단한 REST API 서버를 구축한 예시입니다. 전체적인 구조는 기본 경로(/)와 연락처 관리(/contacts)를 위한 라우팅으로 구성되어 있습니다.
주요 부분별 해석은 다음과 같습니다.
1. 기본 설정 및 서버 실행
express(): Express 애플리케이션 객체를 생성합니다.
app.listen(port, ...): 3000번 포트에서 서버를 대기 상태로 만듭니다. 서버가 켜지면 콘솔에 메시지가 출력됩니다.
2. 기본 라우트 (Root)
app.get("/", ...): 브라우저에서 localhost:3000/ 접속 시 "안녕하세요"라는 메시지와 함께 200(성공) 상태 코드를 보냅니다.
3. 연락처 목록 라우트 (/contacts)
router.route()를 사용하여 같은 경로에 대해 다른 HTTP 메서드를 묶어서 처리합니다.
GET: 목록 조회 ("콘텍트 페이지")
POST: 새 연락처 생성 ("콘텍트 페이지 만들기", 201(생성됨) 코드 반환)
4. 개별 연락처 라우트 (/contacts/:id)
경로에 :id라는 파라미터를 사용하여 특정 데이터에 접근합니다.
GET: 특정 ID 조회 (req.params.id로 URL에 입력한 ID 값을 읽어옵니다.)
PUT: 특정 ID 정보 수정
DELETE: 특정 ID 삭제
5. 라우터 연결
app.use(router): 위에서 정의한 router 설정을 실제 애플리케이션에 적용합니다.
참고할 점:
현재 코드는 응답을 단순 텍스트로 보내고 있습니다. 실제 서비스를 만들 때는 보통 res.json()을 사용하여 JSON 데이터를 주고받는 방식으로 발전시키면 좋습니다.
*/
