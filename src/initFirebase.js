import * as firebase from 'firebase/app';
export const firebaseConfig = {
    apiKey: "AIzaSyC6hR_LzLiry3ulwxp-EZiOyj-S_QW9Zws",
    authDomain: "pet-lovers-3a2be.firebaseapp.com",
    databaseURL: "https://pet-lovers-3a2be.firebaseio.com",
    projectId: "pet-lovers-3a2be",
    storageBucket: "pet-lovers-3a2be.appspot.com",
    messagingSenderId: "112280373656",
    appId: "1:112280373656:web:75686845f1e1f8d2"
  };

export const firebaseApp = firebase.initializeApp(firebaseConfig);

