import firebase from 'firebase/compat/app';


const firebaseapp = firebase.initializeApp({
    apiKey: "AIzaSyCwHivUInQPk6TXjcb1iUYJlgG-TnYxnUU",
    authDomain: "instagram-clone-curso-2cbc3.firebaseapp.com",
    projectId: "instagram-clone-curso-2cbc3",
    storageBucket: "instagram-clone-curso-2cbc3.appspot.com",
    messagingSenderId: "1058538116152",
    appId: "1:1058538116152:web:2e300934e4ec79effd42cd",
    measurementId: "G-9HKD6P0T8J"
  });
  
  const db = firebase.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  // const functions = firebase.functions();

  export { db, auth, storage, /*functions*/ };