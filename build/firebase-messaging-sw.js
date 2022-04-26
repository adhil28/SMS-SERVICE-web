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

messaging.onBackgroundMessage(function (payload) {
  console.log('Received background message ', payload);
  const promiseChain = clients
    .matchAll({
      type: "window",
      includeUncontrolled: true
    })
    .then(windowClients => {
      for (let i = 0; i < windowClients.length; i++) {
        const windowClient = windowClients[i];
        windowClient.postMessage(payload);
      }
    })
    .then(() => {
      return self.registration.showNotification("my notification title");
    });
  return promiseChain;
});
