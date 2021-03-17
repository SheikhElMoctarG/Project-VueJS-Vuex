import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyDO2MbhzYleNv9Z7JL0JkDCb9f33ZptN6I",
    authDomain: "myblog-a7bf2.firebaseapp.com",
    projectId: "myblog-a7bf2",
    storageBucket: "myblog-a7bf2.appspot.com",
    messagingSenderId: "700008787138",
    appId: "1:700008787138:web:4e327e9978a398efbb5f5b",
    measurementId: "G-C4KV98WP06"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth()
  const db = firebase.firestore()

  const userCollection = db.collection('users')
  const postCollection = db.collection('posts')

  export{
      auth,
      db,
      userCollection,
      postCollection

  }