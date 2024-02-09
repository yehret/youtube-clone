import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'


const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_API,
  authDomain: "video-88af6.firebaseapp.com",
  projectId: "video-88af6",
  storageBucket: "video-88af6.appspot.com",
  messagingSenderId: "86764312059",
  appId: "1:86764312059:web:73c66d5569c396cc71275e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const provider = new GoogleAuthProvider()

export default app;