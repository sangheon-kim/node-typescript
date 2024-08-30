import express from "express";

const userRouter = express.Router();

const BASE_PATH = "users";

userRouter.get(`/${BASE_PATH}`, (req, res) => {
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

userRouter.get(`/api/${BASE_PATH}`, (req, res) => {
  res.send("GET request to the users page");
});

userRouter.post(`/api/${BASE_PATH}`, (req, res) => {
  res.send("다영짱 POST request to the users");
});

userRouter.put(`/api/${BASE_PATH}`, (req, res) => {
  console.log("/users put");
  res.json({ message: "User updated" });
});

userRouter.patch(`/api/${BASE_PATH}`, (req, res) => {
  res.send("현영짱 PATCH request to the users");
});

userRouter.delete(`/api/${BASE_PATH}`, (req, res) => {
  res.send("동준짱 DELETE request to the users");
});

export default userRouter;
