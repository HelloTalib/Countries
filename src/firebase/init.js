import firebase from 'firebase/app';
import 'firebase/firestore'


// Initialize Firebase
var config = {
  apiKey: "AIzaSyDz4llnDQ2gpEn2jq8rUW4cMtHXym8IKKo",
  authDomain: "smooth-52cb5.firebaseapp.com",
  databaseURL: "https://smooth-52cb5.firebaseio.com",
  projectId: "smooth-52cb5",
  storageBucket: "smooth-52cb5.appspot.com",
  messagingSenderId: "1010741415148"
};
firebase.initializeApp(config);
const db = firebase.firestore()

export default db;