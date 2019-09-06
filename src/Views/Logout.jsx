import React from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../initFirebase';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../App.css';
import MyNav from '../Components/MyNav';

const firebaseApp = firebase.initializeApp(firebaseConfig);
function Logout() {
  return (
     {signOut}
  );
}

const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(Logout);