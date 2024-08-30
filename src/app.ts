import express from "express";
import path from "node:path";
import morgan from "morgan";
const app = express();

// /admin-api

// function sampleMiddleware(message: string) {
//   return (
//     req: express.Request,
//     res: express.Response,
//     next: express.NextFunction
//   ) => {
//     console.log(message);

//     next();
//   };
// }

// app.use(sampleMiddleware("미들웨어 동작"));

// view 파일들 모아놓는 위치 설정
app.set("views", path.join(__dirname, "views"));
// view engine 세팅
app.set("view engine", "ejs");

app.use(morgan("dev")); // 클로져
app.use("/static", express.static(path.join(__dirname, "../public")));

app.get(
  "/",
  (req, res, next) => {
    console.log("홈 페이지 조회 요청 미들웨어");
    next();
  },
  (req, res) => {
    // res.sendFile(__dirname + "/views/index.html");
    res.render("index", {
      title: "홈",
    });
  }
);

app.post("/", (req, res) => {
  res.send("POST request to the homepage");
});

app.put("/", (req, res) => {
  res.send("PUT request to the homepage");
});

app.patch("/", (req, res) => {
  res.send("PATCH request to the homepage");
});

app.delete("/", (req, res) => {
  res.send("DELETE request to the homepage");
});

app.get("/users", (req, res) => {
  res.render("users", {
    title: "유저 목록",
    users: [
      {
        name: "다영짱",
        age: 27,
      },
      {
        name: "현영짱",
        age: 26,
      },
      {
        name: "동준짱",
        age: 27,
      },
    ],
  });
});

app.post("/users", (req, res) => {
  res.send("다영짱 POST request to the users");
});

app.put("/users", (req, res) => {
  console.log("/users put");
  res.json({ message: "User updated" });
});

app.patch("/users", (req, res) => {
  res.send("현영짱 PATCH request to the users");
});

app.delete("/users", (req, res) => {
  res.send("동준짱 DELETE request to the users");
});

// 이제 더이상 안녕 안써도돼 express.static과 함께니까
// app.get("/star.png", (req, res) => {
//   res.sendFile(__dirname + "/views/star.png");
// });

app.listen(4000, () => {
  console.log(`Server is running on port 4000`);
});
