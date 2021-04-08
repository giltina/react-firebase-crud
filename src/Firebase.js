import firebase from 'firebase';

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyApqrZvfrELgtS0RuhMTaC3X51yGRZR6jk",
    authDomain: "react-material-67f94.firebaseapp.com",
    projectId: "react-material-67f94",
    storageBucket: "react-material-67f94.appspot.com",
    messagingSenderId: "428168627973",
    appId: "1:428168627973:web:861da180e54f5f006a996c"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;