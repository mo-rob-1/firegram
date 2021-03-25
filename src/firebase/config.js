  import * as firebase from 'firebase/app';
  import 'firebase/storage';
  import 'firebase/firestore';
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBQhaoKQxm5gjI3i4xM6nGzO8isDIyaYRQ",
    authDomain: "firegram-ccf16.firebaseapp.com",
    projectId: "firegram-ccf16",
    storageBucket: "firegram-ccf16.appspot.com",
    messagingSenderId: "741979595487",
    appId: "1:741979595487:web:c43fb03db0e27394247f6a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();

  export { projectStorage, projectFirestore };
