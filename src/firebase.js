  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import { getFirestore } from "firebase/firestore";
  import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCOmTnd8Md2yK0SVEwI1l6VbV1M7N8ySaA",
//   authDomain: "magneti1001.firebaseapp.com",
//   projectId: "magneti1001",
//   storageBucket: "magneti1001.appspot.com",
//   messagingSenderId: "596941070186",
//   appId: "1:596941070186:web:e9af3e1e5ecb7459e80f13",
//   measurementId: "G-Z02PPN0HRS"
// };

const firebaseConfig = {
apiKey: "AIzaSyBM_wGF8sCPdl-dUpGovjDgPpY0TASXFA4",
  authDomain: "dadaetq.firebaseapp.com",
  projectId: "dadaetq",
  storageBucket: "dadaetq.firebasestorage.app",
  messagingSenderId: "544398788904",
  appId: "1:544398788904:web:e9469c721b0960030a281d",
  measurementId: "G-6F8BVMSXG1"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);
export const storage = getStorage(app);
