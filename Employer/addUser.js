(function(){
	
 	// Initialize Firebase

 	var config = {
   		apiKey: "AIzaSyCUExeJi2L8KNBxVXuUJLOjwavJ57dEg-Y",
    	authDomain: "compsci372.firebaseapp.com",
    	databaseURL: "https://compsci372.firebaseio.com",
    	projectId: "compsci372",
    	storageBucket: "compsci372.appspot.com",
    	messagingSenderId: "444915101658"
  	};
  firebase.initializeApp(config);

  //var firebaseRef = firebase.database().ref();
  var firebaseRef = firebase.database().ref("Employees");


  //get elements
  const userName = document.getElementById('userName');
  const firstName = document.getElementById('firstName');
  const lastName = document.getElementById('lastName');
  const addUser = document.getElementById('addUser');

  //add event
  addUser.addEventListener('click', e => {
  

  	const user = userName.value;
  	const first = firstName.value;
    const last = lastName.value;



  	firebaseRef.child(user).set({
      FirstName: first,
      LastName: last
    });
  	
  	
  });

var rootRef = firebase.database().ref().child("Employees");

rootRef.on("child_added", snap => {

  var firstName = snap.child("FirstName").val();
  var lastName = snap.child("LastName").val();

  $("#tableBody").append("<tr><td>" + firstName + "</td><td>" + lastName + "</td><td><button>remove</button></td></tr>");

});




}());