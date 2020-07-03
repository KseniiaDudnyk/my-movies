import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDKtNUyuVtTV2TtRz3kKF-BeX2Thiw6BvM',
  authDomain: 'my-movies-a50ac.firebaseapp.com',
  databaseURL: 'https://my-movies-a50ac.firebaseio.com',
  projectId: 'my-movies-a50ac',
  storageBucket: 'my-movies-a50ac.appspot.com',
  messagingSenderId: '685303557380',
  appId: '1:685303557380:web:e69f11c7ff8b22cc9e7451',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GithubAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
