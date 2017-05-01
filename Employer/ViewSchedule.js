  //selection variables
  var newSelect=document.createElement('select');
  var selectHTML="";
  selectHTML+= "<option value='select'>Select Week</option>";
  newSelect.innerHTML= selectHTML;


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



//child snapshot for users
  var firebaseRef = firebase.database().ref().child("Weeks");



  firebaseRef.once("value", function(snapshot) {
  //var list = snapshot.val();
  snapshot.forEach(function(itemSnapshot) {
   // console.log(itemSnapshot.key); // if you're using 2.x that is key()

   var textnode = itemSnapshot.key;
   selectHTML+= "<option value='"+textnode+"'>"+textnode+"</option>";
   newSelect.innerHTML= selectHTML;
 
  });
});

 
document.getElementById("dropWeek").appendChild(newSelect);


  

}());


function change() {
  
  var Table1 = document.getElementById("tableBodySunday");
  Table1.innerHTML = "";

   var Table2 = document.getElementById("tableBodyMonday");
  Table2.innerHTML = "";

   var Table3 = document.getElementById("tableBodyTuesday");
  Table3.innerHTML = "";

   var Table4 = document.getElementById("tableBodyWednesday");
  Table4.innerHTML = "";

   var Table5 = document.getElementById("tableBodyThursday");
  Table5.innerHTML = "";

   var Table6 = document.getElementById("tableBodyFriday");
  Table6.innerHTML = "";

   var Table7 = document.getElementById("tableBodySaturday");
  Table7.innerHTML = "";
  
  
  //get Week from pull down
  const dropweek = document.getElementById('dropWeek').appendChild(newSelect);
  const week = dropweek.value;

  var rootSchedule = firebase.database().ref().child("Weeks/" + week);

  rootSchedule.on('value',function(snapshot){

  snapshot.forEach(function(childSnapshot){
      var key = childSnapshot.key;
      
      childSnapshot.forEach(function(childSnapshot){
        var childKey =childSnapshot.key
        var childchild = childSnapshot.val();

       
          if(key == "Sunday")
          {
            $("#tableBodySunday").append("<tr><td>" + childKey + "</td><td>" + childchild + "</td></tr>");
          }
          if(key == "Monday")
          {
            $("#tableBodyMonday").append("<tr><td>" + childKey + "</td><td>" + childchild + "</td></tr>");
          }
          if(key == "Tuesday")
          {
            $("#tableBodyTuesday").append("<tr><td>" + childKey + "</td><td>" + childchild + "</td></tr>");
          }
          if(key == "Wednesday")
          {
            $("#tableBodyWednesday").append("<tr><td>" + childKey + "</td><td>" + childchild + "</td></tr>");
          }
          if(key == "Thursday")
          {
            $("#tableBodyThursday").append("<tr><td>" + childKey + "</td><td>" + childchild + "</td></tr>");
          }
          if(key == "Friday")
          {
            $("#tableBodyFriday").append("<tr><td>" + childKey + "</td><td>" + childchild + "</td></tr>");
          }
          if(key == "Saturday")
          {
            $("#tableBodySaturday").append("<tr><td>" + childKey + "</td><td>" + childchild + "</td></tr>");
          }
          

      });
        

    });
});




      
}

