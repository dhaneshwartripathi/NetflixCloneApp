import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDVZ_vc5CSYwkWbSQTGKGaMtgA1arFn9aw",
    authDomain: "netflix-ddac0.firebaseapp.com",
    projectId: "netflix-ddac0",
    storageBucket: "netflix-ddac0.appspot.com",
    messagingSenderId: "1024529222267",
    appId: "1:1024529222267:web:ee76b12f46139b07d670de",
    measurementId: "G-TFRRGD27YQ"
};

firebase.initializeApp(firebaseConfig);
const storage=firebase.storage();
export default storage;