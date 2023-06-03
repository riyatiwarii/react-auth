import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD5_qw8Sb-tLS74dsWxp3qToMXYwuPjFs8",
  authDomain: "first-auth-project-c13b2.firebaseapp.com",
  projectId: "first-auth-project-c13b2",
  storageBucket: "first-auth-project-c13b2.appspot.com",
  messagingSenderId: "719589644007",
  appId: "1:719589644007:web:c9cc010f5ee637fb7df442"
};

firebase.initializeApp(firebaseConfig);

export default firebase;

