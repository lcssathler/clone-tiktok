import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
	apiKey: "AIzaSyB_IXyJwBwcLPFRPI-Puzcul5-SOOkPN6M",
	authDomain: "tiktok-clone-fadca.firebaseapp.com",
	projectId: "tiktok-clone-fadca",
	storageBucket: "tiktok-clone-fadca.appspot.com",
	messagingSenderId: "510566698464",
	appId: "1:510566698464:web:d144d4a24830f07aa66f85",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
