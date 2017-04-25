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

  //get elements
  const inputUsername = document.getElementById('inputUsername');
  const inputPass = document.getElementById('inputPass');
  const login = document.getElementById('login');

  //local storage
   localStorage.setItem("UserName", null);

  //add login event
  login.addEventListener('click', e => {

    //get email and pass
    const user = inputUsername.value;
    const pass = inputPass.value;

    var firebaseRef = firebase.database().ref("Employees");

    firebaseRef.once('value', function(snapshot) {
      if (snapshot.hasChild(user))
        {
          
          
          firebase.database().ref("Employees/" + user + "/Password").once('value').then(function(snapshot){
            var employeesPass = snapshot.val().Password;
            document.getElementById("result").innerHTML = employeesPass;

          });


          localStorage.setItem("UserName", user);
          
        }
        else
        {
          localStorage.setItem("UserName", null);
          
        }

        //document.getElementById("result").innerHTML = localStorage.getItem("UserName");
        //document.getElementById("result").innerHTML = employeesPass;
    });

    
    
  });


}());