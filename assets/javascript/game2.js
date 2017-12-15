document.addEventListener("DOMContentLoaded",function(event){

    console.log('test');
    var modal = document.getElementById('instructionsModal'); //gets the modal
    var openModal = document.getElementById("instructions");//gets the button to open modal
    var closeModal = document.getElementsByClassName("close")[0]; //gets the close button

    //modal functionality
    openModal.onclick = function () {
        modal.style.display = "block";
    }
    closeModal.onclick = function () {
        modal.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }


    //game object
    var game = {
        randomNum: 0,
        playerNum: 0,
        crystal1: 0,
        crystal2: 0,
        crystal3: 0,
        crystal4: 0,
        pickNum: function () {
            this.randomNum = Math.floor(Math.random() * 120) + 19;
        },
        crystalVal: function () {
            let rand = Math.floor(Math.random() * 12) + 1;
            while (rand == game.crystal1 || rand == game.crystal2 || rand == game.crystal3 || rand == game.crystal4) {
                rand = Math.floor(Math.random() * 12) + 1;
            }
            return rand;
        },
        wins: 0,
        losses: 0
    };

    //game functions

    function resetGame() { //resets and intializes game
        game.pickNum();
        game.playerNum = 0;
        game.crystal1 = game.crystalVal();
        game.crystal2 = game.crystalVal();
        game.crystal3 = game.crystalVal();
        game.crystal4 = game.crystalVal();
        displayGame();
    }

    function checkCompletion() { //if game complete, add to wins.
        if (game.playerNum >= game.randomNum) {
            if (game.playerNum == game.randomNum) {
                game.wins++;
            } else if (game.playerNum > game.randomNum) {
                game.losses++;
            }

            resetGame(); //reset the game because the game is completed
        }

    }

    function displayGame() {
        document.getElementById("computerNumber").innerHTML = game.randomNum;
        document.getElementById("playerNumber").innerHTML = game.playerNum;
        document.getElementById("wins").innerHTML = "Wins: " + game.wins;
        document.getElementById("losses").innerHTML = "Losses: " + game.losses;
    }

    //start the game from here.

    resetGame();

    function addNumber(){

        if (this.id == 'crystal1') {
            game.playerNum += game.crystal1;
        }
        if (this.id == 'crystal2') {
            game.playerNum += game.crystal2;
        }
        if (this.id == 'crystal3') {
            game.playerNum += game.crystal3;
        }
        if (this.id == 'crystal4') {
            game.playerNum += game.crystal4;
        }

        displayGame();
        checkCompletion();

    }

    var crystalDivs = document.getElementsByClassName("crystal");
    for(let i = 0; i<crystalDivs.length; i++) {
        //Checks to see which crystal was pressed.
        crystalDivs[i].addEventListener('click', addNumber);
    };

});