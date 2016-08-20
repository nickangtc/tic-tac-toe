console.log('is js working?');

document.addEventListener('DOMContentLoaded', function() {

  document.getElementById("start-button").addEventListener("click", startGame);

  document.getElementById("box1").addEventListener("click", function () {
    makeMove("box1");
  });
  document.getElementById("box2").addEventListener("click", function () {
    makeMove("box2");
  });
  document.getElementById("box3").addEventListener("click", function () {
    makeMove("box3");
  });
  document.getElementById("box4").addEventListener("click", function () {
    makeMove("box4");
  });
  document.getElementById("box5").addEventListener("click", function () {
    makeMove("box5");
  });
  document.getElementById("box6").addEventListener("click", function () {
    makeMove("box6");
  });
  document.getElementById("box7").addEventListener("click", function () {
    makeMove("box7");
  });
  document.getElementById("box8").addEventListener("click", function () {
    makeMove("box8");
  });
  document.getElementById("box9").addEventListener("click", function () {
    makeMove("box9");
  });


  var player1 = {
    symbol: "O",
  };
  var player2 = {
    symbol: "X"
  };
  var gameStarted = false;
  var round = 1;


  function startGame () {
    console.log("inside startGame function");
    player1.name = prompt("What's your name? 'O' will be your symbol.");
    player2.name = prompt("What's your name? 'X' will be your symbol.");
    document.getElementById("show-turn").innerHTML = player1.name + ", you'll go first (" + player1.symbol + ")";
    gameStarted = true;
  }

  function whoseTurn () {
    if (round % 2 === 0) {
      console.log("Player2's turn");
      document.getElementById("show-turn").innerHTML = player1.name + ", it's your turn (" + player1.symbol + ")";
      return player2.symbol;
    }
    else {
      console.log("Player1's turn");
      document.getElementById("show-turn").innerHTML = player2.name + ", it's your turn (" + player2.symbol + ")";
      return player1.symbol;
    }
  }

  function makeMove(boxId) {
    console.log("inside makeMove function with " + boxId);
    console.log("class list of boxId " + document.getElementById(boxId).classList);
    if (gameStarted && document.getElementById(boxId).classList.length === 1) {
      if (whoseTurn() === "X") {
        console.log("tile changed to X bg");
        document.getElementById(boxId).classList.add("x-symbol");
      }
      else if (whoseTurn() === "O") {
        console.log("tile changed to O bg");
        // document.getElementById(boxId).setAttribute("class", "o-symbol");
        document.getElementById(boxId).classList.add("o-symbol");
      }
      // document.getElementById(boxId).textContent = whoseTurn();
      round++;
      winOrLose();
    }
  }


  function winOrLose() {
    if (round === 10) {
      console.log("it's a draw match");
      alert("And... it's a draw. Click Reset and Start for a rematch!");
    }
  }

});
