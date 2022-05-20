import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebaseConnection";

const createUser = (email, password) => {
	return createUserWithEmailAndPassword(auth, email, password);
};

const loginUser = (email, password) => {
	return signInWithEmailAndPassword(auth, email, password);
	
};

const logout = () => {
	return signOut(auth);
};

export { createUser, loginUser, logout };