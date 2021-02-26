import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDmO4Qv3jC6DD0yACZMI12vnBPjGC7gETY",
    authDomain: "instaclone-c65a9.firebaseapp.com",
    projectId: "instaclone-c65a9",
    storageBucket: "instaclone-c65a9.appspot.com",
    messagingSenderId: "867125091255",
    appId: "1:867125091255:web:7933fbef84f5f0e5ace632",
    measurementId: "G-C95S3906TZ"
};

const Firebase = firebase.initializeApp(firebaseConfig)
firebase.analytics();

export default Firebase;
