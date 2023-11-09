import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBKnq8mRiO8z7ODoNC-Diyd9bFLshcUKwM",
  authDomain: "live-chat-6e193.firebaseapp.com",
  projectId: "live-chat-6e193",
  storageBucket: "live-chat-6e193.appspot.com",
  messagingSenderId: "787501182358",
  appId: "1:787501182358:web:301fddaa332c9b4031c1b7",
};

firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp };
