import { initializeApp } from "firebase/app";
import {getMessaging} from 'firebase/messaging'
import { getAnalytics } from "firebase/analytics";

/* console.log(process.env.REACT_APP_apiKey,process.env.REACT_APP_authDomain,process.env.REACT_APP_projectId,process.env.REACT_APP_storageBucket,process.env.REACT_APP_messagingSenderId
    ,process.env.REACT_APP_appId,process.env.REACT_APP_measurementId); */


const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
    measurementId: process.env.REACT_APP_measurementId
};
export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app)
getAnalytics(app);

// Initialize Firebase
