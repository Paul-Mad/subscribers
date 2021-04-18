const firebase = require("firebase/app");
require("firebase/firestore");

const config = ***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***,
***REMOVED***

//Initialize Firebase
firebase.initializeApp(config);
let collection;
const firestore = firebase.firestore();

const getData = () => ***REMOVED***
  const ref = firestore.collection("subscribers");

  //convert the collection and return the GET request
  ref.onSnapshot(async (snapshot) => ***REMOVED***
    try ***REMOVED***
      //Map through the snapshot and return all documents from the collection with the id
      collection = snapshot.docs.map((doc) => ***REMOVED***
        const data = doc.data();
        return ***REMOVED*** id: doc.id, ...data ***REMOVED***
      });
    } catch (error) ***REMOVED***
      return "Error reading data from database";
    }
  });

  return collection;
***REMOVED***

const setData = (body) => ***REMOVED***
  //get the collection reference
  const ref = firestore.collection("subscribers");
  const batch = firestore.batch();
  const newRef = ref.doc();
  //store subscriber in database
  batch.set(newRef, body);
  batch.commit();
***REMOVED***

module.exports = firestore;
module.exports = setData;
module.exports = getData;
