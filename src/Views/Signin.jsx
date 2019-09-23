import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../App.css';
import * as firebase from 'firebase/app';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import MyNav from '../Components/MyNav';
// import Login from './Login';

function Signin() {

  const createNewUser = (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(function () {
        // const redirectLogin = () => {
          return <Redirect to="/Login"></Redirect>
        // }
      })

      .catch(function (error) {
        // Handle Errors here.
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // ...
      });
  }

  const redirectLogin = () => {
    return <Link to="/Login"></Link>
  }


  return (
    
    <>
      <MyNav />

      <Container>
        <Form>
          <Row>
            <Col xs={12} md={12} lg={6}>

              <Form.Group controlId="formBasicName">
                <Form.Label>Name or Nickname</Form.Label>
                <Form.Control type="text" placeholder="Enter named" />
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                <Form.Label>Repeat Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button onClick={createNewUser}>Registrarme</Button>
              <Button onClick={redirectLogin}>Volver atrás</Button>

            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
}

export default Signin;
