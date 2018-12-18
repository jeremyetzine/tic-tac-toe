$(document).ready(function() {

  let move = 1;
  let play = true;

  $("#board tr td").click(function() {
    if ($(this).text()==="" && play) {
      if ((move%2)==1) { $(this).append("X"); }
      else { $(this).append("O"); }
      move++;
      if (checkForWinner()!=-1 && checkForWinner()!="") {
	      if (checkForWinner()==="X") {
          alert("Player 1 wins!");
        } else if (checkForWinner()==="O") {
          alert("Player 2 wins!");
        }
        play = false;
      }
    }
  });

  function checkForWinner() {
    const space1 = $("#board tr:nth-child(1) td:nth-child(1)").text();
    const space2 = $("#board tr:nth-child(1) td:nth-child(2)").text();
    const space3 = $("#board tr:nth-child(1) td:nth-child(3)").text();
    const space4 = $("#board tr:nth-child(2) td:nth-child(1)").text();
    const space5 = $("#board tr:nth-child(2) td:nth-child(2)").text();
    const space6 = $("#board tr:nth-child(2) td:nth-child(3)").text();
    const space7 = $("#board tr:nth-child(3) td:nth-child(1)").text();
    const space8 = $("#board tr:nth-child(3) td:nth-child(2)").text();
    const space9 = $("#board tr:nth-child(3) td:nth-child(3)").text();
    // check rows
    if ((space1 === space2) && (space2 === space3)) {
      return space3;
    } else if ((space4 === space5) && (space5 === space6)) {
      return space6;
    } else if ((space7 === space8) && (space8 === space9)) {
      return space9;
    }
    // check columns
      else if ((space1 === space4) && (space4 === space7)) {
      return space7;
    } else if ((space2 === space5) && (space5 === space8)) {
      return space8;
    } else if ((space3 === space6) && (space6 === space9)) {
      return space9;
    }
    // check diagonals
      else if ((space1 === space5) && (space5 === space9)) {
      return space9;
    } else if ((space3 === space5) && (space5 === space7)) {
      return space7;
    }
    return -1;
  }


  $('#restartButton').click(function(){
    location.reload(true);
  });
});
