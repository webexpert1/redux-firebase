import firebase from 'firebase';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAWrp5ueHDBxRtjCoxNSJcRGSP5LkLNjPU",
    authDomain: "redux-hooks-app.firebaseapp.com",
    databaseURL: "https://redux-hooks-app.firebaseio.com",
    projectId: "redux-hooks-app",
    storageBucket: "redux-hooks-app.appspot.com",
    messagingSenderId: "1018208048510",
    appId: "1:1018208048510:web:ba6740e0d2dd7b8fc60f2f",
    measurementId: "G-JQGXS2MPWC"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const dbRef = firebase.database();
