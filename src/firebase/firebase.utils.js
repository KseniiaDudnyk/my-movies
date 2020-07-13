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

export const moviesDataBase = [];
export const genresArr = [];

export const createUserProfileDocument = async (userAuth, data) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email, photoURL } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
        ...data,
      });
    } catch (err) {
      console.log(`Error creating user: ${err.message}`);
    }
  }

  return userRef;
};

const getGenresCollection = async () => {
  const genresRef = firestore.doc('movie-genres/Tiat3jFGkYCcH5DDCEfL');

  const genres = await genresRef
    .get()
    .then((doc) => {
      genresArr.push(doc.data().name);
    })
    .catch((err) => console.log(err));

  return genres;
};

const getMovieData = async () => {
  const mdRef = firestore.collection(`movies-data`);

  await mdRef
    .get()
    .then((snapShot) =>
      snapShot.forEach((doc) => {
        moviesDataBase.push(doc.data());
      })
    )
    .catch((err) => console.log(err));
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

getMovieData();
getGenresCollection();

export default firebase;
