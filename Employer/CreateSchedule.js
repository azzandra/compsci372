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
    console.log(itemSnapshot.key); // if you're using 2.x that is key()

   var textnode = itemSnapshot.key;
   selectHTML+= "<option value='"+textnode+"'>"+textnode+"</option>";
   newSelect.innerHTML= selectHTML;
  alert(textnode);

  });
});

 
document.getElementById("dropWeek").appendChild(newSelect);










  const saveEmployeeInfo = document.getElementById('saveEmployeeInfo');


  saveEmployeeInfo.addEventListener('click', e => {


firebase.database().ref("Weeks/4-23-2017/shelrj13").update({ title: "New title"});



 });
  

}());