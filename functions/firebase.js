const firebase = require("firebase/app");
require("@firebase/firestore");

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
const firestore = firebase.firestore();

const convertCollectionSnapshotToMap = (collection) => ***REMOVED***
  const collectionObject = collection.docs.map((doc) => ***REMOVED***
    const data = doc.data();
    return ***REMOVED*** id: doc.id, ...data ***REMOVED***
  });
  return collectionObject;
***REMOVED***

const getData = () => firestore.collection("subscribers");

const setData = (body) => ***REMOVED***
  //get the collection reference
  const ref = firestore.collection("subscribers");
  const batch = firestore.batch();
  const newRef = ref.doc();
  batch.set(newRef, body);
  batch.commit();
***REMOVED***

module.exports = firestore;
module.exports = convertCollectionSnapshotToMap;
module.exports = setData;
module.exports = getData;
