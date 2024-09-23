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

console.log('API Key:', Constants.expoConfig.extra.apiKey);


// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const database = getFirestore(app);


/*
apiKey: "AIzaSyDV6Q3lbeOPBAZIQNthJPvfHCAPSVDK_XI",
  authDomain: "financeapp-403cd.firebaseapp.com",
  databaseURL: "https://financeapp-403cd-default-rtdb.firebaseio.com",
  projectId: "financeapp-403cd",
  storageBucket: "financeapp-403cd.appspot.com",
  messagingSenderId: "70448659027",
  appId: "1:70448659027:web:8755cda12fee48ee54a4a6",
  measurementId: "G-3E4PNS8VBN"
*/


/*
apiKey: Constants.expoConfig.extra.apiKey,
  authDomain: Constants.expoConfig.extra.authDomain,
  databaseURL: Constants.expoConfig.extra.databaseURL, 
  projectId: Constants.expoConfig.extra.projectId,
  storageBucket: Constants.expoConfig.extra.storageBucket,
  messagingSenderId: Constants.expoConfig.extra.messagingSenderId,
  appId: Constants.expoConfig.extra.appId,
  measurementId: Constants.expoConfig.extra.measurementId
*/

/*
const app = initializeApp(firebaseConfig);

const database = getFirestore(app);
const auth = getAuth(app);

export { app, database, auth }; */