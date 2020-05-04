import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB06Dul_GyIMKFD66VV5vvh7HdFK_7UqVA",
    authDomain: "crwn-clothing-7b63e.firebaseapp.com",
    databaseURL: "https://crwn-clothing-7b63e.firebaseio.com",
    projectId: "crwn-clothing-7b63e",
    storageBucket: "crwn-clothing-7b63e.appspot.com",
    messagingSenderId: "90341265701",
    appId: "1:90341265701:web:680201b05cb87ae3dd0acc",
    measurementId: "G-66G72XTGYJ"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    'promt': 'select_account'
});
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

