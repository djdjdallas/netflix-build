// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "./firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDABuu0HNpUS0GvQE5CIKdbWgAb2qhX91c",
  authDomain: "netflix-build-f154f.firebaseapp.com",
  projectId: "netflix-build-f154f",
  storageBucket: "netflix-build-f154f.appspot.com",
  messagingSenderId: "345595396315",
  appId: "1:345595396315:web:ede37a468ca70a951a0cfe",
  measurementId: "G-S6SG0H1QTS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;