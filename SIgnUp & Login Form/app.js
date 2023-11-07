var firebaseConfig = {
  apiKey: "AIzaSyD2pw13m8iqvyRCQ80UdmkdnOYtFZA8yEE",
  authDomain: "myfirstapp-435f8.firebaseapp.com",
  projectId: "myfirstapp-435f8",
  storageBucket: "myfirstapp-435f8.appspot.com",
  messagingSenderId: "53023979178",
  appId: "1:53023979178:web:efdf1acddaa09c03ba82d3",
};

// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);

// **********************SignUp**************************

function signup() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  var cnfrmPassword = document.getElementById("cnfrm-password");
  firebase.auth().createUserWithEmailAndPassword(email.value, password.value).then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
}

// *************************Login*************************

function login() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  firebase.auth().signInWithEmailAndPassword(email.value, password.value).then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
}


// ***************************Forget Password*************************

function forgetPassword() {
  firebase.auth().sendPasswordResetEmail(email.value).then(() => {
    alert("reset password email sent...")
  }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
  });
}




// ***********************Login with Google****************

function loginWithGoogle() {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log(user);
    // IdP data available in result.additionalUserInfo.profile.
      // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}


// ***********************Login with Github********************


function loginWithGithub() {
  var provider = new firebase.auth.GithubAuthProvider();
  firebase
  .auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    var token = credential.accessToken;

    // The signed-in user info.
    var user = result.user;
    console.log(user);
    // IdP data available in result.additionalUserInfo.profile.
      // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}
