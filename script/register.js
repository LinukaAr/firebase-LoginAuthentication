// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "test-login-fe1d3.firebaseapp.com",
  projectId: "test-login-fe1d3",
  storageBucket: "test-login-fe1d3.appspot.com",
  messagingSenderId: "524859896696",
  appId: "1:524859896696:web:83d45400b7430cc774ce8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
  event.preventDefault();

  //inputs
  const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
  const email = emailInput.value;
  const password = passwordInput.value;
  
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      alert("Creating Account..");
      window.location.href = "index.html";    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
});
