const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const bodyParser = require("body-parser");
const setData = require("./firebase");
const getData = require("./firebase");
const app = express();

const router = express.Router();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

router.get("/subscribers", (req, res) => {
  //get collection from database

  const data = getData();
  if (data) res.status(200).json(data);
  else res.status(400).json(data);
});

//POST request
router.post("/subscribers", (req, res) => {
  if (req.body) {
    setData(req.body);

    res.status(200).json({ message: "Cadastro realizado com sucesso!" });
  } else {
    res.status(400).json({
      message: "Missing body data from request",
    });
  }
});

app.use("/.netlify/functions/server", router);

module.exports.handler = serverless(app);
