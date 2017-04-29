
  //selection variables
  var newSelect=document.createElement('select');
  var selectHTML="";
  selectHTML+= "<option value='select'>Select Employee</option>";
  newSelect.innerHTML= selectHTML;

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


//child snapshot for users
  var rootRef = firebase.database().ref().child("Employees");



  //data snapshot for users. this cycles through all current users
  rootRef.on("child_added", snap => {

   var user = snap.child("UserName").val();

   selectHTML+= "<option value='"+user+"'>"+user+"</option>";
   newSelect.innerHTML= selectHTML;

  });

  //editing inner html for user pull down
  document.getElementById('userSelection').appendChild(newSelect);



}());

function change() {



  //get username from pull down
  const userName = document.getElementById('userSelection').appendChild(newSelect);
  const user = userName.value;

 
  var firebaseID = firebase.database().ref().child("Employees/" + user + "/EmployeeID");
          firebaseID.on('value', function(datasnapshot){
            document.getElementById("insertID").innerHTML = datasnapshot.val();
            });

  var firebasePosition = firebase.database().ref().child("Employees/" + user + "/Position");
          firebasePosition.on('value', function(datasnapshot){
            document.getElementById("insertPosition").innerHTML = datasnapshot.val();
            });

  var firebaseGender = firebase.database().ref().child("Employees/" + user + "/Gender");
          firebaseGender.on('value', function(datasnapshot){
            document.getElementById("insertGender").innerHTML = datasnapshot.val();
            });

  var firebaseEmail = firebase.database().ref().child("Employees/" + user + "/Email");
          firebaseEmail.on('value', function(datasnapshot){
            document.getElementById("insertEmail").innerHTML = datasnapshot.val();
            });

  var firebasePhone = firebase.database().ref().child("Employees/" + user + "/PhoneNumber");
          firebasePhone.on('value', function(datasnapshot){
            document.getElementById("insertPhoneNumber").innerHTML = datasnapshot.val();
            });

   var firebaseDepartment = firebase.database().ref().child("Employees/" + user + "/Department");
          firebaseDepartment.on('value', function(datasnapshot){
            document.getElementById("insertDepartment").innerHTML = datasnapshot.val();
            });



           
}


