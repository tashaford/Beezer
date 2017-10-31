import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyAxF3Y3eCFy9oPwnNRReqVXfEqLg6r6FTM",
  authDomain: "beezerapp-69b92.firebaseapp.com",
  databaseURL: "https://beezerapp-69b92.firebaseio.com",
  projectId: "beezerapp-69b92",
  storageBucket: "beezerapp-69b92.appspot.com",
  messagingSenderId: "698245803963"
};

var fire = firebase.initializeApp(config);
export default fire;