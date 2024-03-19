const express = require("express");
const app = express();
const authorRoute = require("./authors.route");
const logger = require("./logger");

//Middleware
app.use(express.json());
app.use(logger); 

app.use("/authors", authorRoute);

app.get("/", (req, res) => {
    res.send("Hello World from all our Authors")
});

app.all("*", (req, res) => {
    res.status(404).jsonp({ message: "Page not found" });
  });

app.listen(3500, () => {
    console.log("Server is running on port 3500: Express.Js");
});





