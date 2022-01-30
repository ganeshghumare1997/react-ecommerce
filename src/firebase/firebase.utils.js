import firebase from "firebase/compat/app";
import "firebase/database";
import "firebase/compat/auth";

firebase.initializeApp({
  apiKey: "AIzaSyANpaEpB5j8PVyzRftmYMMZAUeG0J-2G84",
  authDomain: "crwn-db-12df1.firebaseapp.com",
  projectId: "crwn-db-12df1",
  storageBucket: "crwn-db-12df1.appspot.com",
  messagingSenderId: "1040697987578",
  appId: "1:1040697987578:web:813a429148ce6039ec5443"
});

export const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => {
  auth.signInWithPopup(googleProvider).then((res) => {
    console.log(res.user)
  }).catch((error) => {
    console.log(error.message)
  })
}