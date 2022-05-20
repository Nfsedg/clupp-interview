import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
	apiKey: "AIzaSyA-UozfTRAaKxIYl8vBujrQu3igRWu3eF8",
	authDomain: "clupp-interview-edgar-end.firebaseapp.com",
	projectId: "clupp-interview-edgar-end",
	storageBucket: "clupp-interview-edgar-end.appspot.com",
	messagingSenderId: "1056436457617",
	appId: "1:1056436457617:web:11a3cfde973d728016af30"
};

const appFirebase = initializeApp(firebaseConfig);

const auth = getAuth();

const db = getFirestore(appFirebase);
const storage = getStorage(appFirebase);
// const carsCol = collection(db, "todos");
// const snapshot = getDoc(carsCol);

const authValidation = onAuthStateChanged(auth, user => {
	if(user !== null) {
		console.log("logged in!");
		const userData = {
			token: user.accessToken,
			email: user.email
		};
		window.sessionStorage.setItem("USER_TOKEN_SESSION", JSON.stringify(userData));
	} else {
		console.log("No user");
		window.sessionStorage.removeItem("USER_TOKEN_SESSION");
	}
});

export { auth, db, storage, authValidation };