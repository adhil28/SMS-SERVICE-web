importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

const firebaseConfig = {
  apiKey: "AIzaSyCHPoaditpoZsttTjgbNH0D-URAic1fFU0",
  authDomain: "mobile-sms-service.firebaseapp.com",
  projectId: "mobile-sms-service",
  storageBucket: "mobile-sms-service.appspot.com",
  messagingSenderId: "168999702640",
  appId: "1:168999702640:web:192322136429c6086064b5",
  measurementId: "G-EGEEZXWJ69"
};
firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();


