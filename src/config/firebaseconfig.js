import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: 'AIzaSyD7GNb4vIEiIzy9MQEZbnY6cX319CXKnLQ',
  authDomain: 'safirmoduloc.firebaseapp.com',
  projectId: 'safirmoduloc',
  storageBucket: 'safirmoduloc.appspot.com',
  messagingSenderId: '975442998595',
  appId: '1:975442998595:web:b4b4a43ea2a202f469ebf6',
};

//Initialize firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
export default database;
