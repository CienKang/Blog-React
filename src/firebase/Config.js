import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyAcMuoepcK66CmIIeXQq2nxal-rW_tgPlA",
    authDomain: "blog-via-react.firebaseapp.com",
    projectId: "blog-via-react",
    storageBucket: "blog-via-react.appspot.com",
    messagingSenderId: "274766680768",
    appId: "1:274766680768:web:f8781193ece5f5f51ed325"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timeStampsInSnapshots: true });

export default firebase;