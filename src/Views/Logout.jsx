import React from 'react';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../App.css';
import MyNav from '../Components/MyNav';

 
function Logout() {
  return (
    <>
      <header className="">
        <MyNav />
      </header>
     <p>Logout</p>
    </>
  );
}

export default Logout;