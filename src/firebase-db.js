import firebase from "firebase/app";
import "firebase/firestore";

// Get a Firestore instance
export const db = firebase
    .initializeApp({
        apiKey: "AIzaSyDrkDqMR3QzfdGDBOTMz8tm5kTA1W9t6pg",
        authDomain: "digital-startup-5587f.firebaseapp.com",
        databaseURL: "https://digital-startup-5587f.firebaseio.com",
        projectId: "digital-startup-5587f",
        storageBucket: "digital-startup-5587f.appspot.com",
        messagingSenderId: "760135894863",
        appId: "1:760135894863:web:feaaea1cb1f1a0700e673a"
    })
    .firestore();

export const postRef = db.collection("posts");