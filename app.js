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
  const inputEmail = document.getElementById('inputEmail');
  const inputPass = document.getElementById('inputPass');
  const login = document.getElementById('login');

  //add login event
  login.addEventListener('click', e => {
  	//get email and pass
  	const email = inputEmail.value;
  	const pass = inputPass.value;
  	const auth = firebase.auth();
  	//sign in
  	const promise = auth.signInWithEmailAndPassword(email,pass);
  	promise.catch(e => console.log(e.message));

  	//add a realtime listener
  	firebase.auth().onAuthStateChanged(firebaseUser => {
  		if(firebaseUser){
  			console.log(firebaseUser);
  			//document.location.href = 'index.html';
  		} else {
  			console.log('not logged in');
  		}
  	});
  	
  });



}());