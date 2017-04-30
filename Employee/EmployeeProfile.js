
(function(){

  //catch for logged out

var templog = localStorage.getItem("UserName");
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

  console.log(localStorage.getItem("UserName"));

  firebase.initializeApp(config);
  var firebaseRef = firebase.database().ref("Employees");


var user = localStorage.getItem("UserName");
 
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

    var firebaseUserName = firebase.database().ref().child("Employees/" + user + "/UserName");
          firebaseUserName.on('value', function(datasnapshot){
            document.getElementById("insertUser").innerHTML = datasnapshot.val();
            });

    


    var firebaseName = firebase.database().ref().child("Employees/" + user + "/FirstName");
          firebaseName.on('value', function(datasnapshot){
            document.getElementById("insertName").innerHTML = datasnapshot.val();
            });

     var firebaseLast = firebase.database().ref().child("Employees/" + user + "/LastName");
          firebaseLast.on('value', function(datasnapshot){
            document.getElementById("insertName").innerHTML = document.getElementById("insertName").innerHTML + " "+ datasnapshot.val();
            });


}());


function changePassword(){


  document.getElementById("popup").style.display = "block";
  
}

function save(){

   document.getElementById("popup").style.display = "none";

    var password = document.getElementById("pass").value;

    var user = localStorage.getItem("UserName");

    firebase.database().ref("Employees/"+ user).update({ Password: password});

}



