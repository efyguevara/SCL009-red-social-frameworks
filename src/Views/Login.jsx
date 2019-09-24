import React from 'react';
import { Redirect } from 'react-router-dom'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../App.css';
import firebaseApp from '../initFirebase';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'



function Login() {

  // const auth = firebase.auth();
  const observer = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user)

        console.log("Existe usuario activo");

        let displayName = user.displayName;
        let email = user.email;

        let emailVerified = user.emailVerified;
        console.log("*****************");
        console.log(emailVerified);
        console.log("*****************");

        let photoUrl = user.photoURL;
        let uid = user.uid;
        let providerData = user.providerData;
      }
      else {
        console.log("No existe usuario activo");
        return <Redirect to="/Login" />;
      }
    });
  }

  function googleLogin() {
    let provider = firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
      console.log(result.user)
      localStorage.setItem('user', JSON.stringify(result.user))
      return result.user
    })
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
      console.log("hay un error")
    });
  }



  // function redirectSignin() {
  //   observer();
  //   return <Redirect to="/Signin" />
  // }
  // function redirectWall() {
  //   return <Redirect to="/Wall" />
  // }


  // if (displayName !== undefined || displayName !== null || displayName !== false) {
  //   this.setState({ displayName: true })
  //   return (
  //     this.redirectWall()
  //   )
  // }

  // const redirectSignin = () => {
  //   return <Redirect to="/Signin" />
  // }

  return (
    <>
      <Container>
        <Form>
          <Row>
            <Col xs={12} md={12} lg={6}>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicChecbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button>Entrar</Button>

              <Button onClick={googleLogin}>Ingresar con Google</Button>

              <Button>Regístrate</Button>

            </Col>
          </Row>
        </Form>
      </Container>
    </>
  )
}
// const firebaseAppAuth = firebaseApp.auth();
// const providers = {
//   googleProvider: new firebase.auth.GoogleAuthProvider(),
// };
// export default withFirebaseAuth({
//   providers,
//   firebaseAppAuth,
// })(Login);

export default Login;



// class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       user: false,
//     }
//   }


//   // redirectWall = () => {
//   //   console.log('redirect Wall')
//   //   return <Redirect to="/Wall" />
//   // }


//   render() {
//     const { user, signInWithGoogle,
//           signOut, createUserWithEmailAndPassword 
//     } = this.props;


//     const loginWithEmail = (email, password) => {
//       firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
//         var errorCode = error.code;
//         var errorMessage = error.message;
//       });
//     }
//     const redirectSignIn = () => {
//       return <Redirect to="/Signin"></Redirect> 
//     }


//     // console.log('USER', user)

//     // if (user === undefined || user === null) {

//     //   return <Redirect to="/Login" />;
//     // }


//     return (
//       <>
//         <Container>
//           <Form>
//             <Row>
//               <Col xs={12} md={12} lg={6}>

//                 <Form.Group controlId="formBasicEmail">
//                   <Form.Label>Email</Form.Label>
//                   <Form.Control type="email" placeholder="Enter email" />
//                 </Form.Group>

//                 <Form.Group controlId="formBasicPassword">
//                   <Form.Label>Password</Form.Label>
//                   <Form.Control type="password" placeholder="Password" />
//                 </Form.Group>
//                 <Form.Group controlId="formBasicChecbox">
//                   <Form.Check type="checkbox" label="Check me out" />
//                 </Form.Group>
//                 {/* <Button onClick={loginWithEmail}>Entrar</Button> */}

//                 <Button onPress={signInWithGoogle}>Sign in with Google</Button>

//                 <Button onClick={redirectSignIn}>Registrate</Button>
//               </Col>
//             </Row>
//           </Form>
//         </Container>
//       </>
//     );
//   }
// }
// const firebaseAppAuth = firebaseApp.auth();
// const providers = {
//   googleProvider: new firebase.auth.GoogleAuthProvider(),
// };

// export default withFirebaseAuth({
//   providers,
//   firebaseAppAuth,
// })(Login);