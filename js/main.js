$(document).ready(function() {

  //set move counter
  let move = 1;

  let play = true;

  // function for playing the game
  $("#board tr td").click(function() {
    if ($(this).text() === "" && play) {
      if ((move % 2) === 1) {
        $(this).append("X");
      } else {
        $(this).append("O");
      }
      move++;
      if (checkForWinner()!= -1 && checkForWinner() != "") {
	      if (checkForWinner() === "X") {
          let usernameOne = $(".userOne").val()
          if (usernameOne === "") {
            usernameOne = "X";
          }
          $("p").text(`${usernameOne} wins!`);
          modal.style.display = "block";
        } else if (checkForWinner() === "O") {
          let usernameTwo = $(".userTwo").val()
          if (usernameTwo === "") {
            usernameTwo = "O";
          }
          $("p").text(`${usernameTwo} wins!`);
          modal.style.display = "block";
        }
        play = false;
      } else if (move >= 10 && checkForWinner() === -1) {
        $("p").text(`Its a draw!`);
        modal.style.display = "block";
        play = false;
      }
    }
  });

  // define game board
  const gameBoard = {
    space1: $("#board tr:nth-child(1) td:nth-child(1)"),
    space2: $("#board tr:nth-child(1) td:nth-child(2)"),
    space3: $("#board tr:nth-child(1) td:nth-child(3)"),
    space4: $("#board tr:nth-child(2) td:nth-child(1)"),
    space5: $("#board tr:nth-child(2) td:nth-child(2)"),
    space6: $("#board tr:nth-child(2) td:nth-child(3)"),
    space7: $("#board tr:nth-child(3) td:nth-child(1)"),
    space8: $("#board tr:nth-child(3) td:nth-child(2)"),
    space9: $("#board tr:nth-child(3) td:nth-child(3)")
  };

  // find a winner
  const checkForWinner = function() {
    const space1Filled = $(gameBoard.space1).text();
    const space2Filled = $(gameBoard.space2).text();
    const space3Filled = $(gameBoard.space3).text();
    const space4Filled = $(gameBoard.space4).text();
    const space5Filled = $(gameBoard.space5).text();
    const space6Filled = $(gameBoard.space6).text();
    const space7Filled = $(gameBoard.space7).text();
    const space8Filled = $(gameBoard.space8).text();
    const space9Filled = $(gameBoard.space9).text();

    // check rows
    if ((space1Filled===space2Filled) && (space2Filled===space3Filled)) {
      return space3Filled;
    } else if ((space4Filled===space5Filled) && (space5Filled===space6Filled)) {
      return space6Filled;
    } else if ((space7Filled===space8Filled) && (space8Filled===space9Filled)) {
      return space9Filled;
    }

    // check columns
    if ((space1Filled===space4Filled) && (space4Filled===space7Filled)) {
      return space7Filled;
    } else if ((space2Filled===space5Filled) && (space5Filled===space8Filled)) {
      return space8Filled;
    } else if ((space3Filled===space6Filled) && (space6Filled===space9Filled)) {
      return space9Filled;
    }

    // check diagonals
    if ((space1Filled===space5Filled) && (space5Filled===space9Filled)) {
      return space9Filled;
    } else if ((space3Filled===space5Filled) && (space5Filled===space7Filled)) {
      return space7Filled;
    }
      return -1;
  }

  // reset button
  $("#restartButton").click(function(){
    location.reload(true);
  });

  // end game screen
  const $modal = $("#endGame");
  const modal = $modal[0];

  const $span = $(".close");
  const span = $span[0]

  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }
});
