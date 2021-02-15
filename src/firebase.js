import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC1V5KwmlqUbTHlgMD2gQbq3iSi179e2s4",
    authDomain: "todo-app-df8e4.firebaseapp.com",
    projectId: "todo-app-df8e4",
    storageBucket: "todo-app-df8e4.appspot.com",
    messagingSenderId: "743008060093",
    appId: "1:743008060093:web:bfbe6cb720fadd9958add4",
    measurementId: "G-YR4391WB33"
})

const db = firebaseApp.firestore()

export default db