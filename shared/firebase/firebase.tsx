// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { requestAuthorization } from "@/services/helpers";
import { saveToken } from "../redux/reducers/userSlice";
import { store, useAppDispatch } from "../redux/store";


const firebaseConfig = {
  apiKey: "AIzaSyBJ_2DMSR7-RxAkjLAVObQs-WKtjF9_8QE",
  authDomain: "pikaboo-a53a4.firebaseapp.com",
  projectId: "pikaboo-a53a4",
  storageBucket: "pikaboo-a53a4.appspot.com",
  messagingSenderId: "78373342313",
  appId: "1:78373342313:web:68048dc7df123d8b6de6f8",
  measurementId: "G-003RR92R8P"
};
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


export const requestForToken = async() => {
    const messaging = getMessaging(app);
    
  await getToken(messaging, { vapidKey: "BGF2YAsZPRy1qAftAKlYbL-rLLyjFSnEpjgdFcz7_3QXTw7rqeUstHGYFwnVsXdiRGbzfaKaiFGbgNSo5joj_i8", })
    .then((currentToken) => {
      if (currentToken) {
        console.log('current token for client: ', currentToken);
        sendToken(currentToken)
        // Perform any other neccessary action with the token
      } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
      }
    })
    .catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
    });
};

const sendToken = async (payload:string) => {
  
    const formData = new FormData();
    formData.append("fcm_token", payload);
    // Make the API request to refresh the token
    if(!store.getState().user.fcm_token){
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/add/fcm/token`, {
        method: "POST",
        headers: {
          Authorization: requestAuthorization(),
        },
        body: formData
      })
      const data = await response.json()
      store.dispatch(saveToken(data.data))
    }
    
  };

  
export const onMessageListener = () =>
new Promise((resolve) => {
    const messaging = getMessaging(app);
  onMessage(messaging, (payload) => {
    console.log("payload", payload)
    resolve(payload);
  });
});