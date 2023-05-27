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
  
  // Get a reference to the table
  var table = document.getElementById('table');
  
  // Function to fetch all data from Firebase and display it in the table
  function fetchData() {
    var ref = database.ref('users');
    ref.on('value', function(snapshot) {
      // Clear the table first
      table.innerHTML = '<thead><tr><th>Email</th><th>Password</th><th>Username</th><th>Fullname</th><th>Favorite Food</th></tr></thead><tbody>';
  
      // Loop through the data and add each row to the table
      snapshot.forEach(function(childSnapshot) {
        var childData = childSnapshot.val();
        table.innerHTML += '<tr><td>' + childData.email + '</td><td>' + childData.password + '</td><td>' + childData.username + '</td><td>' + childData.fullname + '</td><td>' + childData.favourite_food + '</td></tr>';
      });
  
      // Close the table body
      table.innerHTML += '</tbody>';
    });
  }
  
  // Call the fetchData function to display the data when the page loads
  fetchData();
  function back() {
    window.location.href = "index.html";
  }