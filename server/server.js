require("dotenv").config();
const express = require("express");
const app = express();
const port = 8000;
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));
app.listen(port, () => {
  console.log("server is running at port ", port);
});
