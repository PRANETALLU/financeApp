import Constants from 'expo-constants';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: Constants.expoConfig.extra.apiKey || "",
  authDomain: Constants.expoConfig.extra.authDomain || "",
  databaseURL: Constants.expoConfig.extra.databaseURL || "",
  projectId: Constants.expoConfig.extra.projectId || "",
  storageBucket: Constants.expoConfig.extra.storageBucket || "",
  messagingSenderId: Constants.expoConfig.extra.messagingSenderId || "",
  appId: Constants.expoConfig.extra.appId || "",
  measurementId: Constants.expoConfig.extra.measurementId || "",
};


// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const database = getFirestore(app);
