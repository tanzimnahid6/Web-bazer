import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_API_KEY,
//   authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_APP_ID,
// };
const firebaseConfig = {
  apiKey: "AIzaSyDbIEbF1l8_4v5E6Gcaec-GV1AkwD6EsyA",
  authDomain: "webbazer-f9d07.firebaseapp.com",
  projectId: "webbazer-f9d07",
  storageBucket: " webbazer-f9d07.appspot.com",
  messagingSenderId: "432278183189",
  appId: "1:432278183189:web:cbfede10575f73636b9d1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
