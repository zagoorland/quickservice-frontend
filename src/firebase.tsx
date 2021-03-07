import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_QUICKSERVICE_API_KEY,
  authDomain: process.env.REACT_APP_QUICKSERVICE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_QUICKSERVICE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_QUICKSERVICE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_QUICKSERVICE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_QUICKSERVICE_APP_ID,
});

export const auth = app.auth();
export default app;
