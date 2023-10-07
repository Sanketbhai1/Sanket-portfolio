import {initializeApp, getApp, getApps} from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDcGIrg7Lgwi2hdXrZi4uh_9I-jARdt9b4",
    authDomain: "react-portfolio-sep-dab1f.firebaseapp.com",
    projectId: "react-portfolio-sep-dab1f",
    storageBucket: "react-portfolio-sep-dab1f.appspot.com",
    messagingSenderId: "864894167706",
    appId: "1:864894167706:web:9f567f7de2512573eecd23"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export{ app,db};