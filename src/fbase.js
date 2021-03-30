import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: process.env.REACT-APP-API-KEY,
    authDomain: process.env.REACT-APP-AUTH-DOMAIN,
    projectId: process.env.REACT-APP-PROJECTID,
    storageBucket: process.env.REACT-APP-STORAGE-BUCKET,
    messagingSenderId: process.env.REACT-APP-MESSAGINGSENDERID,
    appId: process.env.REACT-APP-APPID
};


export const firebaseInstance = firebase.initializeApp(firebaseConfig);