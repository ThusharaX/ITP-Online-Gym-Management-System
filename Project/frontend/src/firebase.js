// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBbrCKVHa3UG3t5zd7sYGtOaUmuMIHI29c",
	authDomain: "mansa-fitness.firebaseapp.com",
	projectId: "mansa-fitness",
	storageBucket: "mansa-fitness.appspot.com",
	messagingSenderId: "805759495568",
	appId: "1:805759495568:web:dc9c56a67bc818dd571715",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
