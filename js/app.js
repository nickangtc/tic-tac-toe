console.log('is js working?');

document.addEventListener('DOMContentLoaded', function() {
  // CLICK EVENT LISTENERS FOR 'START' AND 'RESET' BUTTONS.
  document.getElementById("start-button").addEventListener("click", startGame);
  document.getElementById("reset-button").addEventListener("click", resetGame);

  // DISPLAYS INSTRUCTIONS FOR CHOSEN MODE WHEN DIFFERENT RADIO BUTTON IS SELECTED
  document.getElementById("vsBlue").addEventListener("click", function() {
    document.getElementById("show-turn").textContent = "Play against Blue, our AI. Click Start to begin!";
  });
  document.getElementById("2player").addEventListener("click", function() {
    document.getElementById("show-turn").textContent = "Grab a friend, click Start to begin!";
  });

  // CLICK EVENT LISTENERS FOR EACH BOX IN THE 9-BOX GAME GRID.
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

  var gameStarted = false;
  var gameOver = false;
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
  var player1 = {
    symbol: "O"
  };
  var player2 = {
    symbol: "X"
  };

  // CHECKS FOR USER-SELECTED MODE, RETURNS VALUE OF SELECTION.
  function checkMode() {
    var len = document.getElementById("select-mode").children.length;
    console.log("no. of radio buttons: " + len);
    for (var i = 0; i < len; i++) {
      console.log("checking which radio btn selected...");
      if (document.getElementById("select-mode").children[i].checked) {
        console.log("found mode selected: " + document.getElementById("select-mode").children[i].value);
        return document.getElementById("select-mode").children[i].value;
      }
    }
  }

  // INITIALISES GAME BY ASKING FOR NAMES,
  // AND MAKES BOXES CLICKABLE.
  function startGame () {
    console.log("inside startGame function");
    var mode = checkMode();
    if (mode === "2player") {
      player1.name = prompt("What's your name? 'O' will be your symbol.");
      player2.name = prompt("What's your name? 'X' will be your symbol.");
      document.getElementById("show-turn").innerHTML = player1.name + ", you'll go first (" + player1.symbol + ")";
      gameStarted = true;
    }
    else if (mode === "vsBlue") {
      player1.name = prompt("What's your name? 'O' will be your symbol.");
      player2.name = "Blue";
      document.getElementById("show-turn").innerHTML = player1.name + ", you'll go first (" + player1.symbol + ")";
      gameStarted = true;
    }
  }

  // CHECKS WHOSE TURN IT IS
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

  // RETURNS PLAYER WHO MADE THE LATEST MOVE
  function lastPlayer () {
    console.log("checking last player...");
    if (whoseTurn() === player2) {
      return player1;
    }
    else if (whoseTurn() === player1) {
      return player2;
    }
  }

  // UPDATES TURN DISPLAY 
  function updateTurnDisplay (player) {
    document.getElementById("show-turn").innerHTML = player.name + ", your turn (" + player.symbol + ")";
    console.log("player name: " + player.name);
  }

  // FIRES EVERY TIME USER CLICKS A BOX
  // USED IN BOTH 1-PLAYER AND 2-PLAYER MODES
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
        round++;
        winOrLose();
      }
      else if (whoseTurn().symbol === "O") {
        updateTurnDisplay(player2);
        console.log("tile changed to O bg");
        document.getElementById(boxId).classList.add("o");
        boardArray[boxIndex[boxId] - 1] = "O";
        console.log(boardArray);
        round++;
        winOrLose();
      }
      // TO HAND CONTROL TO 1-PLAYER VS-BLUE MODE !!!
      if (checkMode() === "vsBlue" && !gameOver) {
        blueMove();
      }
    }
  }

  // CONTAINS ALL WINNING COMBINATIONS,
  // ALERTS WHEN A PLAYER WINS,
  // AND SETS GAMEOVER STATE
  function winOrLose() {
    switch (true) {
      // CHECK ROW 1
      case (boardArray[0] === boardArray[1] && boardArray[0] === boardArray[2]):
      alert(lastPlayer().name + " wins!");
      gameOver = true;
      break;
      // CHECK ROW 2
      case (boardArray[3] === boardArray[4] && boardArray[3] === boardArray[5]):
      alert(lastPlayer().name + " wins!");
      gameOver = true;
      break;
      // CHECK ROW 3
      case (boardArray[6] === boardArray[7] && boardArray[6] === boardArray[8]):
      alert(lastPlayer().name + " wins!");
      gameOver = true;
      break;
      // CHECK COL 1
      case (boardArray[0] === boardArray[3] && boardArray[0] === boardArray[6]):
      alert(lastPlayer().name + " wins!");
      gameOver = true;
      break;
      // CHECK COL 2
      case (boardArray[1] === boardArray[4] && boardArray[1] === boardArray[7]):
      alert(lastPlayer().name + " wins!");
      gameOver = true;
      break;
      // CHECK COL 3
      case (boardArray[2] === boardArray[5] && boardArray[2] === boardArray[8]):
      alert(lastPlayer().name + " wins!");
      gameOver = true;
      break;
      // CHECK DIAG \
      case (boardArray[0] === boardArray[4] && boardArray[0] === boardArray[8]):
      alert(lastPlayer().name + " wins!");
      gameOver = true;
      break;
      // CHECK DIAG /
      case (boardArray[2] === boardArray[4] && boardArray[2] === boardArray[6]):
      alert(lastPlayer().name + " wins!");
      gameOver = true;
      break;
      // IF ROUND 10 = DRAW
      case (round === 10):
      console.log("it's a draw match");
      alert("And... it's a draw. Click RESET and Start for a rematch!");
      gameOver = true;
      break;
    }
  }

  // ACTIVATED BY RESET BUTTON, RESETS GAME TO START STATE.
  function resetGame () {
    console.log("reset button clicked");
    var len = document.getElementsByClassName("box").length;
    for (var i = 1; i < len + 1; i++) {
      var box = "box" + i;
      document.getElementById(box).classList.remove("x", "o");
    }
    // RESET EVERYTHING TO START STATE
    gameStarted = false;
    gameOver = false;
    round = 1;
    boardArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    document.getElementById("show-turn").textContent = "Ready for a rematch?";
  }

  // THE BRAIN OF 'BLUE', THE COMPUTER OPPONENT
  // FOR 1-PLAYER VS COMPUTER MODE
  function blueMove () {
    var randomInt = randomIntFromInterval(1,9); // generate random number 1-9
    while (boardArray.includes(randomInt) === false) { // corresponding box must not be clicked before
      randomInt = randomIntFromInterval(1,9);
    }
    var delay = randomIntFromInterval(1000, 3000); // 1-3 seconds to simulate Blue thinking
    setTimeout(function() {
      // Blue makes a random move.
      if (boardArray.includes(randomInt)) {
        var boxId = "box" + randomInt;
        updateTurnDisplay(player1);
        document.getElementById(boxId).classList.add("x");
        boardArray[boxIndex[boxId] - 1] = "X";
        round++;
        winOrLose();
      }
    }, delay);
  }

  // Generate random number in a pre-specified range.
  function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
  }

});
