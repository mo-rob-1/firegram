import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const dotenv = require("dotenv").config();

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "firegram-react-c3eb6.firebaseapp.com",
  projectId: "firegram-react-c3eb6",
  storageBucket: "firegram-react-c3eb6.appspot.com",
  messagingSenderId: "326215684227",
  appId: "1:326215684227:web:8ae89ce3758ac97ced4bb6",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
