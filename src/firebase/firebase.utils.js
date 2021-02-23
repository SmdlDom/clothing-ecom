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

export const createUserProfileDocument = async (userAuth, additionalData ) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	if(!snapShot.exists) {
		const { displayName, email } = userAuth
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			})
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}
	return userRef
};

export const addCollectionAndItems = async (collectionKey, objectsToAdd) => {
	const collectionRef = firestore.collection(collectionKey);

	const batch = firestore.batch();
	objectsToAdd.forEach(obj => {
		const newDocRef = collectionRef.doc();
		batch.set(newDocRef, obj);
	});

	return await batch.commit()
};

export const convertCollectionsSnapshotToMap = (collections) => {
	const transformedCollection = collections.docs.map(doc => {
		const { title, items } = doc.data();

		return {
			routeName: encodeURI(title.toLowerCase()),
			id: doc.id,
			title,
			items
		}
	});

	return transformedCollection.reduce((accumulator, collection) => {
		accumulator[collection.title.toLowerCase()] = collection;
		return accumulator;
	}, {});
}

if (!firebase.apps.length) {
	firebase.initializeApp(config);
}else {
	firebase.app(); // if already initialized, use that one
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;