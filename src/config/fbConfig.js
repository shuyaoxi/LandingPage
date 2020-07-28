import firebase from 'firebase/app';
import 'firebase/firestore'
const config = {
  apiKey: "AIzaSyCEzPpXr3AyENMbWd8wolbnNwIzz81s7PY",
  authDomain: "fanchise-app.firebaseapp.com",
  databaseURL: "https://fanchise-app.firebaseio.com",
  projectId: "fanchise-app",
  storageBucket: "fanchise-app.appspot.com",
  messagingSenderId: "964417305557",
  appId: "1:964417305557:web:117633b2f2f8eb4efd9b5c",
  measurementId: "G-1LBS8L8MPH"
};
firebase.initializeApp(config);
let db = firebase.firestore()

export default {
  firebase, db
}