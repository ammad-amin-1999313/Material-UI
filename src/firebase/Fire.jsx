// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app'
// import {getAnalytics} from 'firebase/analytics'
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDHME9uFmTKn-KjFkbvSPk1b3mtB1J5020',
  authDomain: 'material-ui-98022.firebaseapp.com',
  projectId: 'material-ui-98022',
  storageBucket: 'material-ui-98022.appspot.com',
  messagingSenderId: '740980394833',
  appId: '1:740980394833:web:f33aa9e467d95ae5b4e170',
  measurementId: 'G-0ZFEXS13QD',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
// const analytics = getAnalytics(app);
