const express = require("express");
const fibonachi = require("./get_fibonachi");
const app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const hello_world = require("bindings")("test");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.post("/get_fibonachi", (req, res) => {
  const result = fibonachi.get_fibonachi(req.body.data);
  res.send(String(result));
});

app.listen(3000, () => {
  console.log("Server starting", 3000);
  console.log(hello_world.sumCount(5));
});
