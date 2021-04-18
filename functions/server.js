const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const bodyParser = require("body-parser");
const setData = require("./firebase");
const getData = require("./firebase");
const app = express();

const router = express.Router();

app.use(bodyParser.urlencoded(***REMOVED*** extended: false }));
app.use(bodyParser.json());

app.use(cors());

router.get("/subscribers", (req, res) => ***REMOVED***
  //get collection from database

  const data = getData();
  if (data) res.status(200).json(data);
  else res.status(400).json(data);
});

//POST request
router.post("/subscribers/post", (req, res) => ***REMOVED***
  if (req.body) ***REMOVED***
    setData(req.body);

    res.status(200).json(***REMOVED*** message: "Cadastro realizado com sucesso!" });
  } else ***REMOVED***
    res.status(400).json(***REMOVED***
      message: "Missing body data from request",
    });
  }
});

app.use("/.netlify/functions/server", router);

module.exports.handler = serverless(app);
