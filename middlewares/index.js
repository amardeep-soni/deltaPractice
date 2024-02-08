var express = require("express");
var app = express();

// it get's stuck as it is not sending any thing
// app.use(() => {
//   console.log("I am middleware");
// });

// it will executed but we don't go to specified route as it sended the response to client
// app.use((req, res) => {
//   console.log("I am middleware");
//   res.send("Middleware Executed")
// });

// to know that middleware can have access of our request
// app.use((req, res) => {
//   let { q } = req.query;
//   res.send(q + " Middleware Executed");
// });

// we can have middleware channing
// app.use((req, res, next) => {
//   console.log("I am 1st middleware");
//   return next();
// });

// app.use((req, res, next) => {
//   console.log("I am 2nd middleware");
//   return next();
// });

// logger
// app.use((req, res, next) => {
//   req.time = new Date(Date.now());
//   console.log(req.method, req.path, req.hostname, req.time);
//   next();
// });
  
// middleware for single route
// app.use("/random",(req, res, next) => {
//   console.log("I am middleware for random");
//   next();
// });

// middleware for protecting /api route
// app.use("/api", (req, res, next)=>{
//    let { token } = req.query;
//    if (token == "giveaccess") {
//     next();
//    } else {
//      res.send("ACCESS DENIED!")
//    }
// });

// app.get("/api", (req, res) => {
//   res.send("Hlo I am protected route");
// });

//  middleware for specific route with variable
const checkToken = (req, res, next) => {
  let { token } = req.query;
  if (token == "giveaccess") {
    next();
  } else {
    res.send("ACCESS DENIED!")
  }
}
app.get("/api", checkToken, (req, res) => {
  res.send("Hlo I am protected route");
});

app.get("/", (req, res) => {
  res.send("Hlo I am root");
});

app.get("/random", (req, res) => {
  res.send("Hlo I am Random");
});

//  404

// as this middleware will not execute when we run /random as it match path beforee middleware and return response
// so at end we define (404) as it execute when no route matched
app.use((req, res, next) => {
  res.send("Page not found");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
