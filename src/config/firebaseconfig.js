import firebase from 'firebase';
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyD7GNb4vIEiIzy9MQEZbnY6cX319CXKnLQ",
    authDomain: "safirmoduloc.firebaseapp.com",
    projectId: "safirmoduloc",
    storageBucket: "safirmoduloc.appspot.com",
    messagingSenderId: "975442998595",
    appId: "1:975442998595:web:b4b4a43ea2a202f469ebf6"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const dataBase = firebase.firestore()
export default dataBase;
