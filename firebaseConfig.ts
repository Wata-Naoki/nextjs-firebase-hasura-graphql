import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

!firebase.apps.length
  ? firebase.initializeApp({
      apiKey: 'AIzaSyCKxaCHSyTVgt5_DTr5vDIyyBmEYKGYmSk',
      authDomain: 'hasura-auth-f75d3.firebaseapp.com',
      projectId: 'hasura-auth-f75d3',
      storageBucket: 'hasura-auth-f75d3.appspot.com',
      messagingSenderId: '785994092191',
      appId: '1:785994092191:web:c326892f0277b9ba149caa',
    })
  : firebase.app()

export default firebase
