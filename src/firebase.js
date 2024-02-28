import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAXZtgo9SqHhnFwKIhCbBwzHouJkdkiLzo",
  authDomain: "phoneaauth.firebaseapp.com",
  projectId: "phoneaauth",
  storageBucket: "phoneaauth.appspot.com",
  messagingSenderId: "929644888380",
  appId: "1:929644888380:web:f4851c75d0e4d850e55e39"
};


const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export default app;

