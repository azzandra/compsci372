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

  

//logout Listener
const logout = document.getElementById('logout');
logout.addEventListener('click', e => {

  localStorage.setItem("UserName", null);
  document.location.href = '../login.html';

});


var newSelect=document.createElement('select');
    var selectHTML="";
   /* for(i=0; i<choices.length; i=i+1){
        selectHTML+= "<option value='"+choices[i]+"'>"+choices[i]+"</option>";
    }*/
    selectHTML+= "<option value='test'>test</option>";
    selectHTML+= "<option value='test'>test2</option>";

    newSelect.innerHTML= selectHTML;
    document.getElementById('book_selection').appendChild(newSelect);


}());


