import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyC9WpjESkq2DG5Z6fF9kLamn36RSSB2NAY",
    authDomain: "netflix-clone-2c038.firebaseapp.com",
    projectId: "netflix-clone-2c038",
    storageBucket: "netflix-clone-2c038.appspot.com",
    messagingSenderId: "539878262620",
    appId: "1:539878262620:web:1033290874f62a30cea399"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  export { auth } 
  