import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import MyNav from './Components/MyNav';
import Login from './Views/Login';
import Logout from './Views/Logout';
import Signin from './Views/Signin';
import Profile from './Views/Profile';
import Wall from './Views/Wall';
 
function App() {
  return (
    <>
      <BrowserRouter>
      <header className="">
        <MyNav />
      </header>
        <div className="App">
        </div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Logout" component={Logout} />
          <Route exact path="/Signin" component={Signin} />
          <Route exact path="/Profile" component={Profile} />
          <Route exact path="/Wall" component={Wall} />
        </Switch>
      </BrowserRouter>
      <Login />
    </>
  );
}

export default App;