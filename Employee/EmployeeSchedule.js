 //selection variables
  var newSelect=document.createElement('select');
  var selectHTML="";
  selectHTML+= "<option value='select'>Select Week</option>";
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

  //child snapshot for weeks
  var firebaseRef = firebase.database().ref().child("Weeks");


  //snapshot for weeks
  firebaseRef.once("value", function(snapshot) {
  //var list = snapshot.val();
  snapshot.forEach(function(itemSnapshot) {
   // console.log(itemSnapshot.key); // if you're using 2.x that is key()

   var textnode = itemSnapshot.key;
   selectHTML+= "<option value='"+textnode+"'>"+textnode+"</option>";
   newSelect.innerHTML= selectHTML;
 
  });
});

  //editing inner html for user pull down
  document.getElementById('dropWeek').appendChild(newSelect);



}());

function change() {

        document.getElementById("monday").innerHTML = "       ";
      document.getElementById("sunday").innerHTML = "       ";
      document.getElementById("tuesday").innerHTML ="       ";
      document.getElementById("wednesday").innerHTML ="       ";
      document.getElementById("thursday").innerHTML ="       ";
      document.getElementById("friday").innerHTML ="       ";
      document.getElementById("saturday").innerHTML ="       ";

  document.getElementById("sunday").innerHTML = " ";

  var Table = document.getElementById("tableBodySchedule");
  Table.innerHTML = "";

var user = localStorage.getItem("UserName");

  //get username from pull down
  const dropWeek = document.getElementById('dropWeek').appendChild(newSelect);
  const week = dropWeek.value;





var rootOff = firebase.database().ref().child("UserWeeks/" + week + "/" + user);

rootOff.on('value',function(snapshot){

  snapshot.forEach(function(childSnapshot){
      var key = childSnapshot.key;
      var childkey = childSnapshot.val();



        console.log("key", key);
        console.log("child", childkey);

        if(key == "Monday"){
          document.getElementById("monday").innerHTML = childkey;
        }

        if(key == "Sunday"){
          document.getElementById("sunday").innerHTML = childkey;
        }

          if(key == "Tuesday"){
          document.getElementById("tuesday").innerHTML = childkey;
        }
          if(key == "Wednesday"){
          document.getElementById("wednesday").innerHTML = childkey;
        }
          if(key == "Thursday"){
          document.getElementById("thursday").innerHTML = childkey;
        }
          if(key == "Friday"){
          document.getElementById("friday").innerHTML = childkey;
        }
          if(key == "Saturday"){
          document.getElementById("saturday").innerHTML = childkey;
        }

        

    });
});

        
}

