import Service from '@ember/service';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC71Dn8wNcEvbIkBTSCiBZNYfYcPCmaa9Q",
  authDomain: "kluvercards2024.firebaseapp.com",
  projectId: "kluvercards2024",
  storageBucket: "kluvercards2024.firebasestorage.app",
  messagingSenderId: "937873571479",
  appId: "1:937873571479:web:d57df2495da0c0df40b3d2"
};


export default class FirebaseService extends Service {
  app = initializeApp(firebaseConfig);
  // db = getFirestore(this.app);
}
