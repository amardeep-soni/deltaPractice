import express from "express";

var app = express();
const port = 3000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use((req, res) => {
  console.log("New incomming request");
  // console.log(req);
  
  res.send("This is string response");

  // res.send("<h1>This is html response");

  // res.send(['apple', 'orange', 1, 50]);

  // res.send({
  //   fruit: 'apple',
  //   color: "red",
  // })

  // res.status(404).send('Sorry, we cannot find that!');
  // res.status(500).send('Internal Server Error!');
  // res.status(200).send('All thing is working!');
})