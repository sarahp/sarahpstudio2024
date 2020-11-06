// Initialize Firebase
import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyBVPc2l-62BMSyVrOGwmCcUyV5mHSBtREo",
    authDomain: "spstudio-a2f09.firebaseapp.com",
    databaseURL: "https://spstudio-a2f09.firebaseio.com",
    projectId: "spstudio-a2f09",
    storageBucket: "spstudio-a2f09.appspot.com",
    messagingSenderId: "1054898651414"
};
firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;