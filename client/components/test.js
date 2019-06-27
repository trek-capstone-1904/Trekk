const firebase = require('firebase')
// Required for side-effects
require('firebase/firestore')

if (process.env.NODE_ENV !== 'production') require('../../secrets')

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  projectId: process.env.PROJECTID
})

var db = firebase.firestore()

db
  .collection('Users')
  .get()
  .then(querySnapshot => {
    querySnapshot.forEach(doc => {
      console.log(`${doc.id} => ${doc.data()}`)
    })
  })
