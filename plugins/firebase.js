import firebase from 'firebase/app'
import 'firebase/firestore'

if (!firebase.apps.length) {
  const config = {
    apiKey: 'AIzaSyDgCHhm23UXnnmGoFBXU_BY2OWRob9ODVU',
    authDomain: 'nuxt-chat-1c586.firebaseapp.com',
    databaseURL: 'https://nuxt-chat-1c586.firebaseio.com',
    projectId: 'nuxt-chat-1c586',
    storageBucket: 'nuxt-chat-1c586.appspot.com',
    messagingSenderId: '138805743401',
    appId: '1:138805743401:web:467a233e0d0d5d495f3138',
    measurementId: 'G-MBE6VH7CPB',
  }
  firebase.initializeApp(config)
  firebase.firestore()
}
const fireDb = firebase.firestore()
export { fireDb }
