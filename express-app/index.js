const express = require("express");
const http = require("http");


const app = express();
app.use(express.json());


const serviceCounter = "localhost";

app.get("/", (req, res) => {
  res.status(200).send("CWICS Assessment");
});

const serviceConverter = "localhost";

app.get("/cc", (req, res) => {
  res.status(200).send("POST to this endpoint with JSON to convert to YAML");
});

app.post("/cc", (req, res) => {
  
  const json = req.body;

  //for /count endpoint
  var options = {
    host: serviceCounter,
    path: "/count",
    port: "8081",
    method: "POST",
    body: {},
  };

  //for /convert endpoint
  
  var options_ = {
    host: serviceConverter,
    path: "/convert",
    port: "8080",
    method: "POST",
    body: json,
  };

  try {
    var request = http.request(options, (response) => {
    });

    var request = http.request(options_, (response) => {
      res.status(200).send(response.body);
    });
  } 
  
  catch (error) {
    res.send(error);
  }
});


app.listen(process.env.PORT || 3000, function () {
  console.log("Server starting on port 3000...");
});
