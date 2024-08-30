import express from "express";

// prefix

// api 용도는 /api
// 정적파일 요청은 /static
// View (html, ejs, handlebars) 파일 관련 요청

// GET /users - 유저 목록 페이지 조회 API
// GET /api/users - 유저 목록 데이터 조회 API

const appRouter = express.Router();

const BASE_PATH = "";

appRouter.get(`${BASE_PATH}`, (req, res) => {
  res.render("index", {
    title: "홈",
  });
});

appRouter.get(`/api/${BASE_PATH}`, (req, res) => {
  res.send("GET request to the homepage");
});

appRouter.post(`/api/${BASE_PATH}`, (req, res) => {
  res.send(`POST request to the homepage`);
});

appRouter.put(`/api/${BASE_PATH}`, (req, res) => {
  res.send(`PUT request to the homepage`);
});

appRouter.patch(`/api/${BASE_PATH}`, (req, res) => {
  res.send(`PATCH request to the homepage`);
});

appRouter.delete(`/api/${BASE_PATH}`, (req, res) => {
  res.send(`DELETE request to the homepage`);
});

export default appRouter;
