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

  //local storage $ pass
   localStorage.setItem("UserName", null);
   var password = null;
   var LoggedIn = false;

  //add login event
  login.addEventListener('click', e => {

    //get email and pass
    const user = inputUsername.value;
    const pass = inputPass.value;

    
    var firebaseRef = firebase.database().ref("Employees");

    firebaseRef.once('value', function(snapshot) {
      if (snapshot.hasChild(user))
        {
          
          console.log("first snap");

          var firebasePass = firebase.database().ref().child("Employees/" + user + "/Password");
          firebasePass.on('value', function(datasnapshot){
            password = datasnapshot.val();

            console.log("second snap", password);
             if ( password == pass)
          {
            console.log("pass=pass snap");
            localStorage.setItem("UserName", user);
            document.getElementById("result").innerHTML = "Success"
            LoggedIn = true;

          }

          else
          {
            localStorage.setItem("UserName", null);
            document.getElementById("result").innerHTML = "Incorrect User or pass";
            password = null;
            LoggedIn = false;

           
          }


                   if (LoggedIn == true)
      {
        

        var firebasePosition = firebase.database().ref().child("Employees/" + user + "/Position");
          firebasePosition.on('value', function(datasnapshot){
          
           if (datasnapshot.val() == "admin" || datasnapshot.val() == "manager")
          {
            document.location.href = 'Employer/EmployerIndex.html';
          }

          else
          {
            
            document.location.href = 'Employee/EmployeeSchedule.html';
          }

            });
       
      }


          });



         

          }
          
        
        
        else
        {
          localStorage.setItem("UserName", null);
          document.getElementById("result").innerHTML = "Incorrect User or pass";
          password = null;
          LoggedIn = false;

          
        }

        //document.getElementById("result").innerHTML = localStorage.getItem("UserName");
        //document.getElementById("result").innerHTML = employeesPass;




     });

    
   

    
  });

  

}());