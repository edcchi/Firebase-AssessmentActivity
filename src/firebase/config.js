import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDm5dGA_NzCqp3Zcm5JxkVwkq29syY4uGA",
  authDomain: "fir-abafe.firebaseapp.com",
  projectId: "fir-abafe",
  storageBucket: "fir-abafe.appspot.com",
  messagingSenderId: "190369555872",
  appId: "1:190369555872:web:fd34b7ee798dc9fbfef0c5",
  measurementId: "G-5EJCB4V5GV"
};

  initializeApp(firebaseConfig);

  const db = getFirestore();
  const auth = getAuth();

  export {db, auth} 