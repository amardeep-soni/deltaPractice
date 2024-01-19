import express from "express";

var app = express();
const port = 3000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})