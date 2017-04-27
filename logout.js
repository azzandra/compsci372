function logout() {
	
	localStorage.setItem("UserName", null);
	document.location.href = 'login.html';
	
}