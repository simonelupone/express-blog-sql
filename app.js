const express = require("express");
const app = express();
const port = 3000;

const postRouter = require("./routers/post");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/posts", postRouter);

app.listen(port, () => {
  console.log(`Example app listening on port -> ${port}`);
});
