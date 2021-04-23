import firebase from "firebase";
import { auth } from "../firebase";

export const signup = (email: string, password: string) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      console.log(userCredential);
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      console.log(error.message);
      var errorCode = error.code;
      var errorMessage = error.message;
    });
};

export const signout = () => {
  auth.signOut();
};
