import firebase from "firebase";
import { auth } from "../firebase";

export const signup = async (email: string, password: string) => {
  try {
    const userCredential = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);

    console.log(userCredential);
    const user = userCredential.user;
    return user;
  } catch (err) {
    console.log(err);
  }
};

export const signout = () => {
  auth.signOut();
};
