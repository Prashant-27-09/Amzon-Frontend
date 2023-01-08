import  firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDfPgSCDPUUiNnZ1idxManiQuX-pzgvL4A",
    authDomain: "clone-3b551.firebaseapp.com",
    projectId: "clone-3b551",
    storageBucket: "clone-3b551.appspot.com",
    messagingSenderId: "881752703472",
    appId: "1:881752703472:web:a7010c8a3be350072e9d35"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };