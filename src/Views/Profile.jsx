import React from 'react';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../App.css';
import MyNav from '../Components/MyNav';

 
function Profile() {
  return (
    <>
      <header className="">
        <MyNav />
      </header>
      <p>Profile</p>
    </>
  );
}

export default Profile;