import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyA5Pd4E_cR92eELQSpeyF3soehWjV7bu5o",
    authDomain: "disneyplus-clone-493a2.firebaseapp.com",
    projectId: "disneyplus-clone-493a2",
    storageBucket: "disneyplus-clone-493a2.appspot.com",
    messagingSenderId: "1023246250136",
    appId: "1:1023246250136:web:b8d1a1954244eb1aa720ed",
    measurementId: "G-91ZC0D1K7E"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
export {auth,provider,storage};
export default db;