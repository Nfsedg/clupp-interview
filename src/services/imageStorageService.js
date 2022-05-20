import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./firebaseConnection";


const uploadImage = (file) => {
	const storageRef = ref(storage, `images/${file.name}`);
	let imageUrl;

	uploadBytes(storageRef, file)
		.then((snapshot) => {
			getDownloadURL(snapshot.ref)
				.then((downloadURL) => {
					imageUrl = downloadURL;
				});
		});

	return imageUrl;
};

export { uploadImage };