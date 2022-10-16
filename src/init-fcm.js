import "firebase/messaging";

import firebase from "firebase";

let messaging;

if (firebase.messaging.isSupported()) {
  if (
    localStorage.getItem("firebasePublic") !== "null" &&
    localStorage.getItem("firebaseSenderId") !== "null" &&
    localStorage.getItem("firebasePublic") !== null &&
    localStorage.getItem("firebaseSenderId") !== null
  ) {
    const initializedFirebaseApp = firebase.initializeApp({
      // messagingSenderId: localStorage.getItem("firebaseSenderId"),
      apiKey: "AIzaSyAblW7PktcZysn0p1qUMsxqK1S1ojSub2c",
      authDomain: "spheric-alcove-356502.firebaseapp.com",
      projectId: "spheric-alcove-356502",
      storageBucket: "spheric-alcove-356502.appspot.com",
      messagingSenderId: "215093171592",
      appId: "1:215093171592:web:f375828539dfc479b7163d",
      measurementId: "G-W11PFT24TM",
    });
    messaging = initializedFirebaseApp.messaging();
    messaging.usePublicVapidKey(localStorage.getItem("firebasePublic"));
  } else {
    const initializedFirebaseApp = firebase.initializeApp({
      // messagingSenderId: "587656068333",
      apiKey: "AIzaSyAblW7PktcZysn0p1qUMsxqK1S1ojSub2c",
      authDomain: "spheric-alcove-356502.firebaseapp.com",
      projectId: "spheric-alcove-356502",
      storageBucket: "spheric-alcove-356502.appspot.com",
      messagingSenderId: "215093171592",
      appId: "1:215093171592:web:f375828539dfc479b7163d",
      measurementId: "G-W11PFT24TM",
    });
    messaging = initializedFirebaseApp.messaging();
    messaging.usePublicVapidKey(
      "BH5L8XrGsNpki5uF1008FbZzgKKZN-NmhOwdWL5Lxh5r3nsgZ6N_Dged1IYXXCCJwpnrXzs52G_v3vM_naO0hxY"
    );
  }
}
export default messaging;
