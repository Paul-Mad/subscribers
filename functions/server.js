const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const bodyParser = require("body-parser");
const convertCollectionSnapshotToMap = require("./firebase");
const setData = require("./firebase");
const getData = require("./firebase");
const app = express();

const router = express.Router();

app.use(bodyParser.urlencoded(***REMOVED*** extended: false }));
app.use(bodyParser.json());

app.use(cors());

router.get("/subscribers", (req, res) => ***REMOVED***
  //get collection from database

  const ref = getData();

  //convert the collection and return the GET request
  ref.onSnapshot(async (snapshot) => ***REMOVED***
    try ***REMOVED***
      res.status(200).json(convertCollectionSnapshotToMap(snapshot));
    } catch (error) ***REMOVED***
      res.status(400).json("Error writing data to database");
    }
  });
});

//POST request
router.post("/subscribers/post", (req, res) => ***REMOVED***
  if (req.body) ***REMOVED***
    setData(req.body);

    res.status(200).json(***REMOVED*** message: "Cadastro realizado com sucesso!" });
  } else ***REMOVED***
    res.status(400).json(***REMOVED*** message: "Missing body data from request" });
  }
});

app.use("/.netlify/functions/server", router);

module.exports.handler = serverless(app);
