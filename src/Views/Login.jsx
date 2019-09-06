import React, { Component } from 'react';
import { Redirect} from 'react-router-dom'
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../App.css';
// import SignInGoogle from '../Components/SignInGoogle';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../initFirebase';
import Wall from './Wall';

const firebaseApp = firebase.initializeApp(firebaseConfig);

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: false,
    }
  }

  redirectWall() {
    return <Redirect to="/Wall"/>
  }

  render() {

    const { user, signOut, signInWithGoogle } = this.props;
    if (user) this.redirectWall()
    return (
      // <div>
      //   {
      //     user ? <p>Hello, {user.displayName}</p>
      //       : <p>Please, sign in</p>
      //   }
      //   {
      //     user ? <Button onClick={signOut}>Sign out</Button>
      //       : <Button onClick={signInWithGoogle}>Sign in with Google</Button>
      //   }
      // </div>
      <>
        <Container>
          <Form>
            <Row>
              <Col xs={12} md={12} lg={6}>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicChecbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button>Entrar</Button>


                <Button onClick={signInWithGoogle}>Sign in with Google</Button>

              </Col>
            </Row>
          </Form>
        </Container>
      </>
    );
  }
}
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(Login);