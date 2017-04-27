(function(){

  //catch for logged out

var templog = localStorage.getItem("UserName")
if (templog == null)
{
  document.location.href = '../login.html';
}
	
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


  //get elements obkects
  const userName = document.getElementById('userName');
  const firstName = document.getElementById('firstName');
  const password = document.getElementById('password');
  const employeeID = document.getElementById('employeeID');
  const position = document.getElementById('position');
  const gender = document.getElementById('gender');
  const phoneNumber = document.getElementById('phoneNumber');
  const department = document.getElementById('department');
  const lastName = document.getElementById('lastName');






  const addUser = document.getElementById('addUser');

  //add event
  addUser.addEventListener('click', e => {
  
    //get element values
  	const user = userName.value;
  	const first = firstName.value;
    const pass = password.value;
    const ID = employeeID.value;
    const pos = position.value;
    const gen = gender.value;
    const phone = phoneNumber.value;
    const depart = department.value;
    const last = lastName.value;



  	firebaseRef.child(user).set({
      FirstName: first,
      LastName: last,
      UserName: user,
      Password: pass,
      EmployeeID: ID,
      Position: pos,
      Gender: gen,
      PhoneNumber: phone,
      Department: depart

    });
  	
  	
  });

var rootRef = firebase.database().ref().child("Employees");

rootRef.on("child_added", snap => {

  var firstName = snap.child("FirstName").val();
  var lastName = snap.child("LastName").val();

  $("#tableBody").append("<tr><td>" + firstName + "</td><td>" + lastName + "</td><td><button>remove</button></td></tr>");

});

//logout Listener
const logout = document.getElementById('logout');
logout.addEventListener('click', e => {

  localStorage.setItem("UserName", null);
  document.location.href = '../login.html';

});


//alert(localStorage.getItem("UserName"))




}());

