import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBCv44MIn0uvlY2xGiiH3b7L5EhNsq0gpw",
  authDomain: "my-portfolio-24cea.firebaseapp.com",
  projectId: "my-portfolio-24cea",
  storageBucket: "my-portfolio-24cea.appspot.com",
  messagingSenderId: "374043050520",
  appId: "1:374043050520:web:d18f254f56a9d2e11d396d",
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
