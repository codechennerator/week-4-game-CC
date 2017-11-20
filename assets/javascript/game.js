$(document).ready(function(){
	//modal variables
	var modal = document.getElementById('instructionsModal'); //gets the modal
	var openModal = document.getElementById("instructions");//gets the button to open modal
	var closeModal = document.getElementsByClassName("close")[0]; //gets the close button
	
	

	//game object
	var game = {
		randomNum: 0,
		playerNum: 0,
		crystal1: 0,
		crystal2: 0,
		crystal3: 0,
		crystal4: 0,
		pickNum: function(){
			this.randomNum = Math.floor(Math.random() * 120) + 19;
		},
		crystalVal: function(){
			let rand = Math.floor(Math.random()* 12) + 1;
			while(rand == game.crystal1 || rand == game.crystal2|| rand == game.crystal3|| rand== game.crystal4){
				rand = Math.floor(Math.random()* 12) + 1;
			}
			return rand;
		},
		wins: 0,
		losses: 0
	};

	//game functions

	function resetGame(){ //resets and intializes game
		game.pickNum();
		game.playerNum = 0;
		game.crystal1 = game.crystalVal();
		game.crystal2 = game.crystalVal();
		game.crystal3 = game.crystalVal();
		game.crystal4 = game.crystalVal();
		displayGame();
	}

	function checkCompletion(){ //if game complete, add to wins.
		if(game.playerNum >= game.randomNum){
			if(game.playerNum == game.randomNum){
				game.wins ++;
			}else if(game.playerNum > game.randomNum){
				game.losses ++;
			}

			resetGame(); //reset the game because the game is completed
		}
		
	}

	function displayGame(){
		$('#computerNumber').text(game.randomNum);
		$('#playerNumber').text(game.playerNum);
		$('#wins').text('Wins: ' + game.wins);
		$('#losses').text('Losses: ' + game.losses);
	}

	//start the game from here.
	
	resetGame();


	$('.crystal').on('click', function(){
		//Checks to see which crystal was pressed.
		if($(this).attr('id') == 'crystal1'){
			game.playerNum += game.crystal1;
		}
		if($(this).attr('id') == 'crystal2'){
			game.playerNum += game.crystal2;
		}
		if($(this).attr('id') == 'crystal3'){
			game.playerNum += game.crystal3;
		}
		if($(this).attr('id') == 'crystal4'){
			game.playerNum += game.crystal4;
		}

		displayGame();
		checkCompletion();

	});
	
	
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