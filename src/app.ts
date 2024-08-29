import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

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
  res.send("상헌짱 GET request to the users");
});

app.post("/users", (req, res) => {
  res.send("다영짱 POST request to the users");
});

app.put("/users", (req, res) => {
  res.json({ message: "User updated" });
});

app.patch("/users", (req, res) => {
  res.send("현영짱 PATCH request to the users");
});

app.delete("/users", (req, res) => {
  res.send("동준짱 DELETE request to the users");
});

app.get("/star.png", (req, res) => {
  res.sendFile(__dirname + "/views/star.png");
});

app.listen(4000, () => {
  console.log(`Server is running on port 4000`);
});
