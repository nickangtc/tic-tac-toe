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
  var boardArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var boxNum = {
    box1: 1,
    box2: 2,
    box3: 3,
    box4: 4,
    box5: 5,
    box6: 6,
    box7: 7,
    box8: 8,
    box9: 9
  };


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
        document.getElementById(boxId).classList.add("x");
        boardArray[boxNum[boxId] - 1] = "X";
        console.log(boardArray);
      }
      else if (whoseTurn() === "O") {
        console.log("tile changed to O bg");
        // document.getElementById(boxId).setAttribute("class", "o-symbol");
        document.getElementById(boxId).classList.add("o");
        boardArray[boxNum[boxId] - 1] = "O";
        console.log(boardArray);
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
    else {
      // CHECK ROW 1
      if (boardArray[0] === boardArray[1] && boardArray[0] === boardArray[2]) {
        console.log("1st row win");
      }
      // CHECK ROW 2
      if (boardArray[3] === boardArray[4] && boardArray[3] === boardArray[5]) {
        console.log("2nd row win");
      }
      // CHECK ROW 3
      if (boardArray[6] === boardArray[7] && boardArray[6] === boardArray[8]) {
        console.log("3rd row win");
      }
      // CHECK COL 1
      if (boardArray[0] === boardArray[3] && boardArray[0] === boardArray[6]) {
        console.log("1st col win");
      }
      // CHECK COL 2
      if (boardArray[1] === boardArray[4] && boardArray[1] === boardArray[7]) {
        console.log("2nd col win");
      }
      // CHECK COL 3
      if (boardArray[2] === boardArray[5] && boardArray[2] === boardArray[8]) {
        console.log("3rd col win");
      }
      // CHECK DIAG \
      if (boardArray[0] === boardArray[4] && boardArray[0] === boardArray[8]) {
        console.log("\\ diag win");
      }
      // CHECK DIAG /
      if (boardArray[2] === boardArray[4] && boardArray[2] === boardArray[6]) {
        console.log("/ diag win");
      }
    }
  }

  // total 8 possible winning combinations
  function validateRow() {
    for (var i = 0; i < 3; i++) {

    }
  }

});
