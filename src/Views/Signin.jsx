import React from 'react';
import { Redirect } from 'react-router-dom';
import '../App.css';
import MyNav from '../Components/MyNav';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

 
function Signin() {

  function redirectLogin() {
    return <Redirect to="/Profile" />
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
              
                <Button onClick={redirectLogin}>Volver atrás</Button>
                
                {/* <Button onCLick={RegisterMe}>Registrarme</Button> */}
              </Col>
            </Row>
          </Form>
        </Container>
    </>
  );
}

export default Signin;