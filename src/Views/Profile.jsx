import React from 'react';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../App.css';
import MyNav from '../Components/MyNav';
// import * as firebase from 'firebase/app';
// import {firebaseApp} from '../initFirebase';
import Post from '../Components/Post'
 
function Profile() {
  return (
    <>
      <header className="">
        <MyNav />
      </header>
      <h1>Profile</h1>
      <Post />

    </>
  );
}

export default Profile;