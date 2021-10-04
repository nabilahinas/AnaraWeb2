/===== register =====/

function signup() {
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	var password2 = document.getElementById("passwordConfirm").value;

	if (password != password2) {
	  alert("Input your password correctly!");
	} else {
	  firebase.auth().createUserWithEmailAndPassword(email, password).then(function () {
		alert("ready account!");
		window.location.href = "login.html";
	  }).catch(function (error) {
		var errorMessage = error.message;
		alert(errorMessage);
	  });
	}
  }


/===== login =====/

function login() {
	var email = document.getElementById("email").value;
	var password = document.getElementById("Password").value;
	
	firebase.auth().signInWithEmailAndPassword(email, password).then(function(){
	  alert("login success!");
	  window.location.href = "index1.html";
	}).catch(function(error) {
	  var errorMessage = error.message;
	  alert(errorMessage);
	});
  }

	

	





