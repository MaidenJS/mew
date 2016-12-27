// Initialize Firebase
const config = {
    apiKey: "AIzaSyCIPUt8uNPSeBhSpShg2m0bCX1jjRBzorc",
    authDomain: "shining-fire-1147.firebaseapp.com",
    databaseURL: "https://shining-fire-1147.firebaseio.com",
    storageBucket: "shining-fire-1147.appspot.com",
    messagingSenderId: "556847505220"
};

firebase.initializeApp(config);

let database = firebase.database().ref();

database.child('users').set({
    id: 1,
    email: 'test@TEST.COM'
});