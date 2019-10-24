import firebase from 'firebase';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBtdrAJ6WOHXZmQXLefGvWQ05_fv-smHIs",
    authDomain: "react-firebase-8c75e.firebaseapp.com",
    databaseURL: "https://react-firebase-8c75e.firebaseio.com",
    projectId: "react-firebase-8c75e",
    storageBucket: "react-firebase-8c75e.appspot.com",
    messagingSenderId: "778805126632",
    appId: "1:778805126632:web:6cef77488ae12abb9eb05d",
    measurementId: "G-758DETS0FG"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
