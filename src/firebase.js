import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDU5xFlGiohi-YHe_WOB9e3a958UFhH2bE",
  authDomain: "whatsapp-clone-24583.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-24583.firebaseio.com",
  projectId: "whatsapp-clone-24583",
  storageBucket: "whatsapp-clone-24583.appspot.com",
  messagingSenderId: "870289513090",
  appId: "1:870289513090:web:e2412fca4ac30b2cacf29b",
  measurementId: "G-BEKC2N73YN",
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
