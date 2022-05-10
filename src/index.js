const express = require("express");
require("./db/mongoose");
//const userRouter = require("./routers/user");
const articleRouter = require("./routers/article");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
// app.use(userRouter);
app.use(articleRouter);

app.listen(port, () => {
  console.log("server is running on port " + port);
});
