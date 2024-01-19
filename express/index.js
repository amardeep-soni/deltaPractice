import express from "express";

var app = express();
const port = 3000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// it send the response 

// app.use((req, res) => {
//   console.log("New incomming request");
//   // console.log(req);

//   res.send("This is string response");

//   // res.send("<h1>This is html response");

//   // res.send(['apple', 'orange', 1, 50]);

//   // res.send({
//   //   fruit: 'apple',
//   //   color: "red",
//   // })

//   // res.status(404).send('Sorry, we cannot find that!');
//   // res.status(500).send('Internal Server Error!');
//   // res.status(200).send('All thing is working!');
// })

// sending response with post or get

// app.get("/", (req, res) => {
//   res.send("You contacted Root path");
// });

// app.get("/search", (req, res) => {
//   res.send("You contacted Search path");
// });

// app.get("/user", (req, res) => {
//   res.send("You contacted User path");
// });

// // when no any route matches
// app.get("*", (req, res) => {
//   res.send("Page doesn't exists");
// });

// // we can also send post request
// app.post("/", (req, res) => {
//   res.send("You send post request to root path");
// });

// getting parameters from path 

// app.get("/user", (req, res) => {
//   res.send("Hello")
// })

// app.get("/user/:username", (req, res) => {
//   let { username } = req.params;
//   res.send(`Hello, @${username}`)
// })

// app.get("/user/:username/:id", (req, res) => {
//   let { username, id } = req.params;
//   res.send(`Hello, @${username}, your Id is ${id}`)
// })


// search query
// single query
// app.get("/search", (req, res) => {
//   let { q } = req.query;
//   res.send(`You searched for ${q}`);
// })

// double query
app.get("/search2", (req, res) => {
  let { q, id } = req.query;
  res.send(`You searched for ${q} and id is ${id}`);
})

// handling the search quey when query is not send
app.get("/search", (req, res) => {
  let { q } = req.query;
  if (!q) {
    res.send(`You didnot send query`);
  }
  res.send(`You searched for ${q}`);
})