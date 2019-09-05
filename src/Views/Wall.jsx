import React from 'react';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../App.css';
import MyNav from '../Components/MyNav';


 
function Wall() {
  return (
    <>
      <header className="">
        <MyNav />
      </header>
      <p>Wall</p>
    </>
  );
}

export default Wall;