  //selection variables
  var newSelect=document.createElement('select');
  var selectHTML="";
  selectHTML+= "<option value='select'>Select Week</option>";
  newSelect.innerHTML= selectHTML;


  //
  var Monday = [];

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










  const saveEmployeeInfo = document.getElementById('saveEmployeeInfo');


  saveEmployeeInfo.addEventListener('click', e => {


firebase.database().ref("Weeks/4-23-2017/shelrj13").update({ title: "New title"});



 });
  

}());


function change() {


  
 while(tableBody.rows.length > 0){
  table.deleteRow(0);
 } 

  //get Week from pull down
  const dropweek = document.getElementById('dropWeek').appendChild(newSelect);
  const week = dropweek.value;

  //console read week
  //console.log(week);

  //reference for dropdown week
  var rootRef = firebase.database().ref().child("Weeks/"+ week + "/Monday");

  //snapshot of week
  rootRef.on("child_added", snap => {
    var admin = snap.child("admin").val();
    //console.log(admin);


  });

  rootRef.once("value",function(snapshot){

    //var temp = snapshot.child("Monday");
   // var name = temp.val();

    //console.log(name);


    snapshot.forEach(function(childSnapshot){
      var key = childSnapshot.key;
      var childData = childSnapshot.val();


    

      //console.log("key: ",key);
      //console.log("childData: ", childData);


      var test = key +": " +childData;

      console.log(test);

      Monday.push(test);


    });

   

  });






test();
      
}


function test(){
 // alert("hello");

  var fill = "hello";

console.log(Monday[0]);

for (var i = 0 ; i < Monday.length ; i++)
{
 
  $("#tableBody").append("<tr><td>" + Monday[i] + "</td><td>" + fill + "</td><td>" + fill + "</td></tr>");
}
}