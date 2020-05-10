import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA6qjqJUFkkZlegNHVUB2yrTMqsNeAnvRk",
  authDomain: "nt-comp.firebaseapp.com",
  databaseURL: "https://nt-comp.firebaseio.com",
  projectId: "nt-comp",
  storageBucket: "nt-comp.appspot.com",
  messagingSenderId: "947229331775",
  appId: "1:947229331775:web:17b79accaf5fe6d942c38a",
  measurementId: "G-KYH6F5KBRF",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const sigInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
