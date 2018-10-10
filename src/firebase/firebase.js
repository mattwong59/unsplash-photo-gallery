import firebase from 'firebase/app';
import 'firebase/auth';

const prodConfig = {
    apiKey: "AIzaSyBcRzIPLIMxr96s_ku954kj37b0vOYQHMg",
    authDomain: "react-photo-gallery-cb5f9.firebaseapp.com",
    databaseURL: "https://react-photo-gallery-cb5f9.firebaseio.com",
    projectId: "react-photo-gallery-cb5f9",
    storageBucket: "react-photo-gallery-cb5f9.appspot.com",
    messagingSenderId: "1035201764371"    
}

const devConfig = {
    apiKey: "AIzaSyBcRzIPLIMxr96s_ku954kj37b0vOYQHMg",
    authDomain: "react-photo-gallery-cb5f9.firebaseapp.com",
    databaseURL: "https://react-photo-gallery-cb5f9.firebaseio.com",
    projectId: "react-photo-gallery-cb5f9",
    storageBucket: "react-photo-gallery-cb5f9.appspot.com",
    messagingSenderId: "1035201764371"
  };

  const config = process.env.NODE_ENV === 'production'
    ? prodConfig: devConfig;

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  const auth = firebase.auth();

  export {
      auth,
  };