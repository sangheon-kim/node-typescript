import express from "express";

// prefix

// api 용도는 /api
// 정적파일 요청은 /static
// View (html, ejs, handlebars) 파일 관련 요청

// GET /users - 유저 목록 페이지 조회 API
// GET /api/users - 유저 목록 데이터 조회 API

const appRouter = express.Router();

const BASE_PATH = "/api";

appRouter.get(`/${BASE_PATH}`, (req, res) => {
  res.send("GET request to the homepage");
});

appRouter.post(`/${BASE_PATH}`, (req, res) => {
  res.send(`POST request to the homepage`);
});

appRouter.put(`/${BASE_PATH}`, (req, res) => {
  res.send(`PUT request to the homepage`);
});

appRouter.patch(`/${BASE_PATH}`, (req, res) => {
  res.send(`PATCH request to the homepage`);
});

appRouter.delete(`/${BASE_PATH}`, (req, res) => {
  res.send(`DELETE request to the homepage`);
});

export default appRouter;
