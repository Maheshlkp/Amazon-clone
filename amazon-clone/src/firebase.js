import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB2naW6OoU9ToQ3O9cv5wxcp_-y4CREeOA",
    authDomain: "challenge-73bc8.firebaseapp.com",
    databaseURL: "https://challenge-73bc8.firebaseio.com",
    projectId: "challenge-73bc8",
    storageBucket: "challenge-73bc8.appspot.com",
    messagingSenderId: "1070745928147",
    appId: "1:1070745928147:web:cf386ea24adab5f408ef26",
    measurementId: "G-TX7ZPKY2V7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();
export { db, auth };