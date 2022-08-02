
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyClVnNNhaYcfQaOgrum6mX0VTHNED57ty8",
  authDomain: "pokemon-quiz-3fcd2.firebaseapp.com",
  projectId: "pokemon-quiz-3fcd2",
  storageBucket: "pokemon-quiz-3fcd2.appspot.com",
  messagingSenderId: "693080699624",
  appId: "1:693080699624:web:e3ca615a7e684ec31a0f5d",
  measurementId: "G-TBCMH5W69N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
