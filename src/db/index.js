import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBnk2_Ts5raeekL2T99sriwNa8URaPW6Jg",
    authDomain: "vue-app-27f6f.firebaseapp.com",
    databaseURL: "https://vue-app-27f6f.firebaseio.com",
    projectId: "vue-app-27f6f",
    storageBucket: "vue-app-27f6f.appspot.com",
    messagingSenderId: "765947844761",
    appId: "1:765947844761:web:879358dda915e8bd7f4008",
    measurementId: "G-SMHYR3JS6X"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export const db = firebase.firestore();
  export const dbChannels = db.collection('channels');

  export const getCollectionMessages = (channelId) => {
    return db.collection(`channels/${channelId}/messages`);
  }
