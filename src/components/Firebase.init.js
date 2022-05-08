// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAn2E3y5EClLH3SaHUXwhEOOw9YvLpuU64',
  authDomain: 'my-warehouse-967d6.firebaseapp.com',
  projectId: 'my-warehouse-967d6',
  storageBucket: 'my-warehouse-967d6.appspot.com',
  messagingSenderId: '704709299036',
  appId: '1:704709299036:web:f9fe041cf8851079b10f99'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
