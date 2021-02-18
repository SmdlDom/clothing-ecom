import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
	apiKey: "AIzaSyAn7qSG2EI3tpEiaZR6feuURwbTBYRa3x0",
	authDomain: "crwn-db-a64a6.firebaseapp.com",
	projectId: "crwn-db-a64a6",
	storageBucket: "crwn-db-a64a6.appspot.com",
	messagingSenderId: "1081991793169",
	appId: "1:1081991793169:web:1553aec90486971932ffb0",
	measurementId: "G-42ZJ0L38HM"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;