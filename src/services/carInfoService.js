import { collection, addDoc, getDocs, updateDoc, doc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./firebaseConnection";
import { db } from "./firebaseConnection";

const addCar = async (newCarInfo, file) => {
	try {
		const storageRef = ref(storage, `images/${file.name}`);
		return uploadBytes(storageRef, file)
			.then((snapshot) => {
				getDownloadURL(snapshot.ref)
					.then((downloadURL) => {
						addDoc(collection(db, "vehicles"), {
							...newCarInfo,
							frontPictureURL: downloadURL,
						});
					});
			});
			
		
	} catch (e) {
		console.error(e);
	}
};

const getCar = async () => {
	const querySnapshot = await getDocs(collection(db, "vehicles"));
	return querySnapshot;
};

const updateCarInfo = async (id, deleteState) => {
	const docRef = doc(db, "vehicles", id);
	
	return updateDoc(docRef, {
		deleted: deleteState
	});
};

export { addCar, getCar, updateCarInfo };