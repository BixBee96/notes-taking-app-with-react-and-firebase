import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD2P0feUkMsQp9jhFP8yCD53STWkxvEUbY",
  authDomain: "notes-taking-app-march21.firebaseapp.com",
  projectId: "notes-taking-app-march21",
  storageBucket: "notes-taking-app-march21.appspot.com",
  messagingSenderId: "888077308891",
  appId: "1:888077308891:web:6233b10ff47a85d6ec0dfe",
  measurementId: "G-CEC0CSGJ41",
});

const db = firebaseApp.firestore();

export{ db} ;
