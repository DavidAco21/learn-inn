import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCH69ccJju0YsJBnaIghPR8AJPgk67NfeU",
  authDomain: "learnin-icesi.firebaseapp.com",
  projectId: "learnin-icesi",
  storageBucket: "learnin-icesi.appspot.com",
  messagingSenderId: "186782329146",
  appId: "1:186782329146:web:d3313f4079e418e7ec8803",
  measurementId: "G-PZ1VGFNR2B"
};


let app: firebase.app.App;
if(firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
}

console.log('firebase');

export const LEARNIN_COLLECTION = app!.firestore();