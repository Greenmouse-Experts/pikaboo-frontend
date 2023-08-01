// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
  apiKey: "AIzaSyBJ_2DMSR7-RxAkjLAVObQs-WKtjF9_8QE",
  authDomain: "pikaboo-a53a4.firebaseapp.com",
  projectId: "pikaboo-a53a4",
  storageBucket: "pikaboo-a53a4.appspot.com",
  messagingSenderId: "78373342313",
  appId: "1:78373342313:web:68048dc7df123d8b6de6f8",
  measurementId: "G-003RR92R8P"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});