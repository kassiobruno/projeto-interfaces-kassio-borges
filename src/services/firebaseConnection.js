import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth';

let firebaseConfig = {
  apiKey: "AIzaSyDZAHzSqj_ukNBsOnjSfu0s9hwK-O6OxeU",
  authDomain: "projeto01cryptopos.firebaseapp.com",
  databaseURL: "https://projeto01cryptopos-default-rtdb.firebaseio.com",
  projectId: "projeto01cryptopos",
  storageBucket: "projeto01cryptopos.appspot.com",
  messagingSenderId: "817905065968",
  appId: "1:817905065968:web:87f33849920f49fbe08735",
  measurementId: "G-HNV5BGCSTQ"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;