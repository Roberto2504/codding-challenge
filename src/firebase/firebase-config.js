/* eslint-disable import/prefer-default-export */

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAVG6iyGspBW8c9HPYrqRt8Nz77hA6_YyU",
  authDomain: "coding-challenge-spacex.firebaseapp.com",
  projectId: "coding-challenge-spacex",
  storageBucket: "coding-challenge-spacex.appspot.com",
  messagingSenderId: "339414381149",
  appId: "1:339414381149:web:aaca72bd9ab69c0f5a13b4",
  measurementId: "G-E4X3QG1N18"
};

firebase.initializeApp(firebaseConfig);


export {
    firebase
}
