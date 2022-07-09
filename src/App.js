import logo from './logo.svg';
import poggers from './poggers.png';
import './App.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPGVII9SER-3kbW52HGhyAEUWcA1UYEtE",
  authDomain: "personalsite-d051e.firebaseapp.com",
  projectId: "personalsite-d051e",
  storageBucket: "personalsite-d051e.appspot.com",
  messagingSenderId: "805463655630",
  appId: "1:805463655630:web:93a0d4647c45062bee3c9f",
  measurementId: "G-8RNZLYGNCE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={poggers}/>
      </header>
    </div>
  );
}

export default App;
