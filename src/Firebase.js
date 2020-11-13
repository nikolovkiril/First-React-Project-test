import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAY3rLzdGHSlNN1I2StEXpygdhTA687nPU",
    authDomain: "wooden-gift-shop-6d4b4.firebaseapp.com",
    databaseURL: "https://wooden-gift-shop-6d4b4.firebaseio.com",
    projectId: "wooden-gift-shop-6d4b4",
    storageBucket: "wooden-gift-shop-6d4b4.appspot.com",
    messagingSenderId: "554861454272",
    appId: "1:554861454272:web:c49ee529b2b88d52d89e25",
    measurementId: "G-MGBYWD8LCH"
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export {  auth };