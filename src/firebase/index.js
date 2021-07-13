import firebase from "firebase";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

firebase.initializeApp({
    apiKey: "AIzaSyBVw26Xr_I-ry6ejYxAaeOZ_01I4_oxKjE",
    authDomain: "catalogofabislacos.firebaseapp.com",
    projectId: "catalogofabislacos",
    storageBucket: "catalogofabislacos.appspot.com",
    messagingSenderId: "503577431829",
    appId: "1:503577431829:web:751b5ccb76f3331fbae31c"
})

export { firebase }

export const auth = firebase.auth
export const db = firebase.firestore()