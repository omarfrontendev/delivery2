import firebase from "firebase";

const firebaseConfig = {
  // apiKey: "AIzaSyAblW7PktcZysn0p1qUMsxqK1S1ojSub2c",
  // authDomain: "spheric-alcove-356502.firebaseapp.com",
  // projectId: "spheric-alcove-356502",
  // storageBucket: "spheric-alcove-356502.appspot.com",
  // messagingSenderId: "215093171592",
  // appId: "1:215093171592:web:f375828539dfc479b7163d",
  // measurementId: "G-W11PFT24TM",
  // ==============
  apiKey: "AIzaSyB6i9KZKY6EVdTD1K8lY34ouI09QEOFlI4",
  authDomain: "picka-f0496.firebaseapp.com",
  projectId: "picka-f0496",
  storageBucket: "picka-f0496.appspot.com",
  messagingSenderId: "666047882754",
  appId: "1:666047882754:web:c994ab0a0d42aeb06ea91b",
  measurementId: "G-KBPSG9QLC4"
}

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

