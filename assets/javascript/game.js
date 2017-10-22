$(document).ready(function(){
	//modal variables
	var modal = document.getElementById('instructionsModal'); //gets the modal
	var openModal = document.getElementById("instructions");//gets the button to open modal
	var closeModal = document.getElementsByClassName("close")[0]; //gets the close button
	
	

	
	//modal functionality
	openModal.onclick = function() {
    	modal.style.display = "block";
	}
	closeModal.onclick = function() {
    	modal.style.display = "none";
	}
	window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.display = "none";
	    }
	}

	
});