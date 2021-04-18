const firebase = require("firebase/app");
require("firebase/firestore");

const config = {
  apiKey: "AIzaSyAjVZJBAal1dtB26X2M51jlpl8mKs3OC8U",
  authDomain: "linx-subscribers-db.firebaseapp.com",
  projectId: "linx-subscribers-db",
  storageBucket: "linx-subscribers-db.appspot.com",
  messagingSenderId: "13058615173",
  appId: "1:13058615173:web:79818722991c261546c6ec",
  measurementId: "G-DCX519T4JZ",
};

//Initialize Firebase
firebase.initializeApp(config);
let collection;
const firestore = firebase.firestore();

const getData = () => {
  const ref = firestore.collection("subscribers");

  //convert the collection and return the GET request
  ref.onSnapshot(async (snapshot) => {
    try {
      //Map through the snapshot and return all documents from the collection with the id
      collection = snapshot.docs.map((doc) => {
        const data = doc.data();
        return { id: doc.id, ...data };
      });
    } catch (error) {
      return "Error reading data from database";
    }
  });

  return collection;
};

const setData = (body) => {
  //get the collection reference
  const ref = firestore.collection("subscribers");
  const batch = firestore.batch();
  const newRef = ref.doc();
  //store subscriber in database
  batch.set(newRef, body);
  batch.commit();
};

module.exports = firestore;
module.exports = setData;
module.exports = getData;
