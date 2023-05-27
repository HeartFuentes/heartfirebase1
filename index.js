 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBw8pj9VaVDiB2DiMCs6ft0FW1n_qnSKI4",
    authDomain: "heartcrud-78c80.firebaseapp.com",
    databaseURL: "https://heartcrud-78c80-default-rtdb.firebaseio.com",
    projectId: "heartcrud-78c80",
    storageBucket: "heartcrud-78c80.appspot.com",
    messagingSenderId: "384596956672",
    appId: "1:384596956672:web:7647d1e2d027af8f64eae5"
  };

 
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Set database variable
  var database = firebase.database()
  
  function save() {
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var username = document.getElementById('username').value
    var fullname = document.getElementById('fullname').value
    var favourite_food = document.getElementById('favourite_food').value
  
    database.ref('users/' + username).set({
      email : email,
      password : password,
      username : username,
      fullname : fullname,
      favourite_food : favourite_food
    })
  
    alert('Saved')
  }
  
  function get() {
    var username = document.getElementById('username').value
  
    var user_ref = database.ref('users/' + username)
    user_ref.on('value', function(snapshot) {
      var data = snapshot.val()
  
      alert(data.email)
  
    })
  
  }
  
  
  function update() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var username = document.getElementById('username').value;
    var fullname = document.getElementById('fullname').value;
    var favourite_food = document.getElementById('favourite_food').value;
  
    if (username === '') {
      // Show an error message to the user if the username field is null
      alert('Please enter a username.');
      return;
    }
  
    // Get a reference to the user data in Firebase
    var userRef = database.ref('users/' + username);
  
    // Check if the user exists in Firebase
    userRef.once('value', function(snapshot) {
      if (snapshot.exists()) {
        // The user exists, so update the user's data in Firebase
        var updates = {
          email: email,
          password: password,
          username: username,
          fullname: fullname,
          favourite_food: favourite_food
        };
        userRef.update(updates);
  
        // Show a success message to the user
        alert('Your account was successfully updated.');
      } else {
        // The user does not exist, so show an error message to the user
        alert('The account with the specified username does not exist.');
      }
    });
  }
  
  function remove() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Get a reference to the user data in Firebase
    var userRef = database.ref('users/' + username);
  
    // Retrieve the user's password from Firebase
    userRef.child('password').once('value', function(snapshot) {
      var actualPassword = snapshot.val();
  
      // Check if the user exists in Firebase and if the password is correct
      if (actualPassword && actualPassword === password) {
        // The user exists and the password is correct, so delete the user's data from Firebase
        userRef.remove();
  
        // Show a success message to the user
        alert('Your account was successfully deleted.');
      } else {
        // The user does not exist or the password is incorrect, so show an error message to the user
        alert('The account with the specified username and password does not exist.');
      }
    });
  }

  function displayTable() {
    window.location.href = "app.html";
  }
