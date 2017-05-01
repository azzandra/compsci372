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


  //get elements objects
  const inputDate = document.getElementById('inputDate');
  const inputReason = document.getElementById('inputReason');


  const addOff = document.getElementById('addOff');
   const user = localStorage.getItem("UserName");
  //add event
  addOff.addEventListener('click', e => {

  var Table = document.getElementById("tableBody");
  Table.innerHTML = "";
   
    //get element values
  	const date = inputDate.value;
  	const reason = inputReason.value;
   


firebase.database().ref("Off/"+ user).update({ [date]: reason});
  	
  	
  });



var rootRef = firebase.database().ref().child("Off/" + user);



  rootRef.on('value',function(snapshot){

   var test = snapshot.key;
   
  


    snapshot.forEach(function(childSnapshot){
      var key = childSnapshot.key;
      var childData = childSnapshot.val();


    

      console.log("key: ",key);
      console.log("childData: ", childData);


      $("#tableBody").append("<tr><td>" + user + "</td><td>" + key + "</td><td>" + childData + "</td></tr>");

     


    });

   

  });


}());

