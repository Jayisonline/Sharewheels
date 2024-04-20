
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import {getStorage, ref} from "firebase/storage";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';




const firebaseConfig = {
  apiKey: "AIzaSyChb5-uJTog-VVZSpOc0WLb8rEocPVQ8Qg",
  authDomain: "share-wheels-b66ea.firebaseapp.com",
  projectId: "share-wheels-b66ea",
  storageBucket: "share-wheels-b66ea.appspot.com",
  messagingSenderId: "640523541596",
  appId: "1:640523541596:web:3144ab780854a54482da99",
  measurementId: "G-N69BY2D4LZ"
};




// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


export const auth =  getAuth(app);



// export const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(ReactNativeAsyncStorage)
// });


export const db = getFirestore(app);
export const storage = getStorage();
// export const db = getFirestore();