// const firebaseConfig = {
//     apiKey: "AIzaSyA9rzs7XoWn6YTIN1a8cnE55mGlrEBJSzY",
//     authDomain: "eco-x-b6c8d.firebaseapp.com",
//     projectId: "eco-x-b6c8d",
//     storageBucket: "eco-x-b6c8d.appspot.com",
//     messagingSenderId: "792826792939",
//     appId: "1:792826792939:web:fb156e4de4b517d56b27ae",
//     measurementId: "G-SR8DYJDQKK"
//   };

  import firebase from 'firebase/app' // doing import firebase from 'firebase' or import * as firebase from firebase is not good practice.
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore';
import Axios from 'axios'

// Initialize Firebase
let config = {
    apiKey: "AIzaSyA9rzs7XoWn6YTIN1a8cnE55mGlrEBJSzY",
    authDomain: "eco-x-b6c8d.firebaseapp.com",
    projectId: "eco-x-b6c8d",
    storageBucket: "eco-x-b6c8d.appspot.com",
    messagingSenderId: "792826792939",
    appId: "1:792826792939:web:fb156e4de4b517d56b27ae",
    measurementId: "G-SR8DYJDQKK"
}

firebase.initializeApp(config)

const db = firebase.firestore()

export { Axios, db }