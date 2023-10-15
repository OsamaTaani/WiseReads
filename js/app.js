 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-analytics.js";
  import { getAuth , createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAWMfXEXYmlfhR3VH5HHdHR4i6SaQ7Ye0c",
    authDomain: "wisereads-2c9b1.firebaseapp.com", 
    projectId: "wisereads-2c9b1",
    storageBucket: "wisereads-2c9b1.appspot.com",
    messagingSenderId: "154401321323",
    appId: "1:154401321323:web:a840fa979ad311d64c5c2e",
    measurementId: "G-C50KEQPTM9"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth();


    var fName = document.getElementById("fName");
    var lName = document.getElementById("lName");
    var address = document.getElementById("address");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    let message = document.getElementById("message");
   
    window.signup = function (e) {
        e.preventDefault();

        if (/\s/.test(fName.value)) {
            alert("Username cannot contain spaces");
            return;
        }
        if (/\s/.test(lName.value)) {
          alert("Username cannot contain spaces");
          return;
      }
    
        // Validation for password
        const passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*()_+])(?=.*[a-z]).{8,}$/;
        if (!passwordRegex.test(password.value)) {
            alert("Password must be at least 8 characters long and include at least one number, uppercase letter, and special character");
            return;
        }
    
        // Validation for matching password and confirm password
        // if (password.value !== confPwd.value) {
        //     message.textContent="Passwords dont match";
        //     message.style.background="red"
        //     return;
        // }
    
        // Validation for email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            alert("Invalid email format");
            return;
        }
    
        // Validation for phone number (10 digits starting with 07)
        
        signInWithEmailAndPassword(auth, email.value, password.value)
        .then(function (userCredential) {
          alert('User already exists. Please log in.');
        })
        .catch(function (error) {
          
          createUserWithEmailAndPassword(auth, email.value, password.value)
            .then(function (success) {
              alert("Signup successful");
            })
            .catch(function (err) {
              alert("Error: " + err.message);
            });
        });
    
      console.log(obj);
    };

    // ... (your existing code)

window.signin = function (e) {
    e.preventDefault();

    const emailSignIn = document.getElementById("emailSignIn");
    const passwordSignIn = document.getElementById("passwordSignIn");

    signInWithEmailAndPassword(auth, emailSignIn.value, passwordSignIn.value)
        .then(function (userCredential) {
            alert('Login successful');
            // You can redirect the user or perform additional actions after successful login
        })
        .catch(function (error) {
            alert("Error: " + error.message);
        });
};

    



   
