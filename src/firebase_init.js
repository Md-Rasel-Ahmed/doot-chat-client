// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFZ71D0TDwR7U38Hi9NWc6Ipf5SFRrvVQ",
  authDomain: "doot-convarsations.firebaseapp.com",
  projectId: "doot-convarsations",
  storageBucket: "doot-convarsations.appspot.com",
  messagingSenderId: "474181676424",
  appId: "1:474181676424:web:f4dcf001dc66b9a5d5de3d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
