console.log('is js working?');

document.addEventListener('DOMContentLoaded', function() {

  document.getElementById("start-button").addEventListener("click", startGame);
  document.getElementById("reset-button").addEventListener("click", resetGame);

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
  var boxIndex = {
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
      return player2;
    }
    else {
      console.log("Player1's turn");
      return player1;
    }
  }

  function lastPlayer () {
    console.log("checking last player...");
    if (whoseTurn() === player2) {
      return player1;
    }
    else if (whoseTurn() === player1) {
      return player2;
    }
  }

  function updateTurnDisplay (player) {
    document.getElementById("show-turn").innerHTML = player.name + ", it's your turn (" + player.symbol + ")";
    console.log("player name: " + player.name);
  }

  function makeMove(boxId) {
    console.log("inside makeMove function with " + boxId);
    console.log("class list of boxId " + document.getElementById(boxId).classList);
    if (gameStarted && document.getElementById(boxId).classList.length === 1) {
      if (whoseTurn().symbol === "X") {
        updateTurnDisplay(player1);
        console.log("tile changed to X bg");
        document.getElementById(boxId).classList.add("x");
        boardArray[boxIndex[boxId] - 1] = "X";
        console.log(boardArray);
      }
      else if (whoseTurn().symbol === "O") {
        updateTurnDisplay(player2);
        console.log("tile changed to O bg");
        // document.getElementById(boxId).setAttribute("class", "o-symbol");
        document.getElementById(boxId).classList.add("o");
        boardArray[boxIndex[boxId] - 1] = "O";
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
      alert("And... it's a draw. Click RESET and Start for a rematch!");
    }
    else {
      // CHECK ROW 1
      if (boardArray[0] === boardArray[1] && boardArray[0] === boardArray[2]) {
        alert(lastPlayer().name + " wins!");
      }
      // CHECK ROW 2
      if (boardArray[3] === boardArray[4] && boardArray[3] === boardArray[5]) {
        alert(lastPlayer().name + " wins!");
      }
      // CHECK ROW 3
      if (boardArray[6] === boardArray[7] && boardArray[6] === boardArray[8]) {
        alert(lastPlayer().name + " wins!");
      }
      // CHECK COL 1
      if (boardArray[0] === boardArray[3] && boardArray[0] === boardArray[6]) {
        alert(lastPlayer().name + " wins!");
      }
      // CHECK COL 2
      if (boardArray[1] === boardArray[4] && boardArray[1] === boardArray[7]) {
        alert(lastPlayer().name + " wins!");
      }
      // CHECK COL 3
      if (boardArray[2] === boardArray[5] && boardArray[2] === boardArray[8]) {
        alert(lastPlayer().name + " wins!");
      }
      // CHECK DIAG \
      if (boardArray[0] === boardArray[4] && boardArray[0] === boardArray[8]) {
        alert(lastPlayer().name + " wins!");
      }
      // CHECK DIAG /
      if (boardArray[2] === boardArray[4] && boardArray[2] === boardArray[6]) {
        alert(lastPlayer().name + " wins!");
      }
    }
  }

  function resetGame () {
    console.log("reset button clicked");
    var len = document.getElementsByClassName("box").length;
    for (var i = 1; i < len + 1; i++) {
      var box = "box" + i;
      document.getElementById(box).classList.remove("x", "o");
    }
    // RESET EVERYTHING TO START STATE
    gameStarted = false;
    round = 1;
    boardArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    document.getElementById("show-turn").textContent = "Ready for a rematch?";
  }

});
