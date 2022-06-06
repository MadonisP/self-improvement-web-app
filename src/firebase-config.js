import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDlPpwx1qPObjOSF0wr1s3VabxIFo7iGtA",
  authDomain: "blogsite-2aa61.firebaseapp.com",
  projectId: "blogsite-2aa61",
  storageBucket: "blogsite-2aa61.appspot.com",
  messagingSenderId: "1081946603616",
  appId: "1:1081946603616:web:afc238b6599131468b0305"
};

const app = initializeApp(firebaseConfig);


export const db=getFirestore(app);
export const auth=getAuth(app)
export const provider=new GoogleAuthProvider();