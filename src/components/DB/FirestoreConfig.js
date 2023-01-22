import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseConfig = {
  // your firebase config
  apiKey: 'AIzaSyAeOwbzZ2qtpvYOmjWUP22n9jYgbVulU0w',
  authDomain: 'vuejs-resource-da645.firebaseapp.com',
  projectId: 'vuejs-resource-da645',
  storageBucket: 'vuejs-resource-da645.appspot.com',
  messagingSenderId: '294067450808',
  appId: '1:294067450808:web:980f90327742c48938d54d',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the Firestore database
const db = firebase.firestore();

// Add a new document to the "users" collection

function addToDb(enteredTitle, enteredDesc, enteredLink) {
  db.collection('resources')
    .add({
      title: enteredTitle,
      desc: enteredDesc,
      link: enteredLink
    })
    .then(function (docRef) {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch(function (error) {
      console.error('Error adding document: ', error);
    });
}

export default addToDb;
