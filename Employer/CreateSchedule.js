  //selection variables for drop week
  var newSelect=document.createElement('select');
  var selectHTML="";
  selectHTML+= "<option value='select'>Select Week</option>";
  newSelect.innerHTML= selectHTML;


  //selection variables for drop Employees
  var empSelect=document.createElement('select');
  var empHTML="";
  empHTML+= "<option value='select'>Select Employee</option>";
  empSelect.innerHTML= empHTML;



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

//child snapshot for users
var firebaseEmp = firebase.database().ref().child("Employees");

//snapshot for employees
firebaseEmp.once("value", function(snapshot){

  snapshot.forEach(function(itemSnapshot){

    var node = itemSnapshot.key;
   empHTML+= "<option value='"+node+"'>"+node+"</option>";
   empSelect.innerHTML= empHTML;
  })
})


 //drop for week
document.getElementById("dropWeek").appendChild(newSelect);
//drop for users
document.getElementById("dropEmployees").appendChild(empSelect);



const addTime = document.getElementById('addTime');


addTime.addEventListener('click', e => {

const username = document.getElementById('dropEmployees').appendChild(empSelect);
const user = username.value;

const weektmp = document.getElementById('dropWeek').appendChild(newSelect);
const week = weektmp.value;

const datetemp = document.getElementById('dropDay')
const date = datetemp.value;

const timetemp = document.getElementById('Time')
const time = timetemp.value;


//firebase.database().ref("Weeks/4-23-2017/shelrj13").update({ title: "New title"});

firebase.database().ref("Weeks/"+ week +"/" + date).update({ [user]: time});
firebase.database().ref("UserWeeks/"+ week +"/" + user).update({ [date]: time});


changeWeek();

 });


//fill off hours in

var rootOff = firebase.database().ref().child("Off");

rootOff.on('value',function(snapshot){

  snapshot.forEach(function(childSnapshot){
      var key = childSnapshot.key;
      
      childSnapshot.forEach(function(childSnapshot){
        var childKey =childSnapshot.key
        var childchild = childSnapshot.val();

       

          $("#tableBodyOff").append("<tr><td>" + key + "</td><td>" + childKey + "</td><td>" + childchild + "</td></tr>");

      });
        

    });
});





}());

function changeWeek(){

  var Table = document.getElementById("tableBodyAdded");
  Table.innerHTML = "";

  const dropWeek = document.getElementById('dropWeek').appendChild(newSelect);
  const week = dropWeek.value;

var rootAdded = firebase.database().ref().child("Weeks/" + week);

rootAdded.on('value',function(snapshot){

  snapshot.forEach(function(childSnapshot){
      var key = childSnapshot.key;
      
      childSnapshot.forEach(function(childSnapshot){
        var childKey =childSnapshot.key
        var childchild = childSnapshot.val();

    

          $("#tableBodyAdded").append("<tr><td>" + childKey + "</td><td>" + key + "</td><td>" + childchild + "</td></tr>");

      });
        

    });
});


  }

