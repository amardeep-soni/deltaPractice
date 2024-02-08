var express = require("express");
var app = express();
const ExpressError = require("./ExpressError");


// it throws amardeep is not definde with whole error html description which is handle by default error handler
// app.get("/wrong", (req, res) => {
//     amardeep = amardeep;
// })

// we can pass our custom message but it is also handle by default error handler
// app.get("/wrong", (req, res) => {
//   let { q } = req.query;
//   if (q) {
//     res.send(`Your query is ${q}`);
//   } else {
//     throw new Error("Please pass query");
//   }
// });

// error handling middleware
// app.get("/err", (req, res) => {
//     amardeep = amardeep;
// })
// app.use((err, req, res, next) => {
//     console.log("------Error-----");
//     next(err);
// });

// app.use((err, req, res, next) => {
//     console.log("------Error2-----");
//     next(err);
// })


app.use("/api", (req, res, next) => {
  let { token } = req.query;
  if (token == "giveaccess") {
    next();
  } else {
    throw new ExpressError(401, "ACCESS DENIED!");
  }
});

app.get("/api", (req, res) => {
  res.send("This is protected API");
});

app.get("/err", (req, res) => {
    amardeep = amardeep;
})

app.get("/admin", (req, res) => {
    throw new ExpressError(403, "Access to admin is forbidden")
})

// middleware for handling error
app.use((err, req, res, next) => {
  //   next(err); -- pass control to default error handler
  //   res.send(err); -- send error object but with code 200

  // send error with status code given with object
  let {status = 500, message} = err;
  res.status(status).send(message);
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
