import * as firebase from 'firebase'
import '@firebase/auth'
import '@firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDLSvGipVtFTbgweibgZW10WzsYFQWgkZU',
  authDomain: 'duyproject-c96fb.firebaseapp.com',
  databaseURL: 'https://duyproject-c96fb-default-rtdb.firebaseio.com',
  projectId: 'duyproject-c96fb',
  storageBucket: 'duyproject-c96fb.appspot.com',
  messagingSenderId: '295957504012',
  appId: '1:295957504012:web:489edd15861b51dfc98e29',
  measurementId: 'G-7J074PW001',
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}
const database = firebase.database()
export { firebase }
