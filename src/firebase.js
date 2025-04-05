// Import the functions you need from the SDKs you need
import { addDoc, collection, getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDTVyP7qy2ZQuqEE2biJddqIofp3u9qW2I",
  authDomain: "netflix-clone-e9cf4.firebaseapp.com",
  projectId: "netflix-clone-e9cf4",
  storageBucket: "netflix-clone-e9cf4.firebasestorage.app",
  messagingSenderId: "847396339584",
  appId: "1:847396339584:web:58bcbf52bfcb421545cb65",
  measurementId: "G-QYKX1B6VE7",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getFirestore(app);

const signUp = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name: name,
      authProvider: "local",
      email: email,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const logout = () => {
  signOut(auth);
};

const forgot = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    toast.success("Password reset email sent!");
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

export { auth, db, signUp, login, logout, forgot };
