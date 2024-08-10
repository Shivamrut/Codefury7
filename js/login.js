
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  import { getAuth, signInWithEmailAndPassword ,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";


 

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDzgLAIvTBAedjtOGwq6JR3YFD_uWRU8XQ",
    authDomain: "auth-cd42d.firebaseapp.com",
    projectId: "auth-cd42d",
    storageBucket: "auth-cd42d.appspot.com",
    messagingSenderId: "1474594142",
    appId: "1:1474594142:web:3b2b2c4e201528d605bbcf"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);


  const submitSignUp= document.getElementById('submitSignUp');
  submitSignUp.addEventListener("click",function(event){
    event.preventDefault()
    const emailSignUp= document.getElementById('emailSignUp').value;
    const passwordSignUp= document.getElementById('passwordSignUp').value;

    createUserWithEmailAndPassword(auth, emailSignUp, passwordSignUp)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert("Creating account...")
      alert("Registeration successful")
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
      // ..
    });
    
  })

  const submitLogIn= document.getElementById('submitLogIn');
  submitLogIn.addEventListener("click",function(event){
    event.preventDefault()
    const emailLogIn= document.getElementById('emailLogIn').value;
    const passwordLogIn= document.getElementById('passwordLogIn').value;

    signInWithEmailAndPassword(auth, emailLogIn, passwordLogIn)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert("Logging In...")
      alert("Login  successful")
      window.location.href="index.html"
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
      // ..
    });
    
  })