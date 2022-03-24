import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDOkDNvay_VY6YlyPdg2TxuZ2DOGadBfGQ",
    authDomain: "netflix-d4eaf.firebaseapp.com",
    projectId: "netflix-d4eaf",
    storageBucket: "netflix-d4eaf.appspot.com",
    messagingSenderId: "38496509796",
    appId: "1:38496509796:web:f3bab4c03bf5946bf6e471"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth();

export { auth }

