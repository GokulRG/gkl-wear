import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDwf_u0R3VCmLPGaD6tNTxpViAtO9nyHJ4",
    authDomain: "gkl-wear-db.firebaseapp.com",
    databaseURL: "https://gkl-wear-db.firebaseio.com",
    projectId: "gkl-wear-db",
    storageBucket: "",
    messagingSenderId: "439441474296",
    appId: "1:439441474296:web:7093a0fdc926a009"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;