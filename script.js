function startGame() {
    let response = "";
    let answer = prompt("How old do you think I am?");
      if (response === null) {
        alert("come on dont be shy!")
      } else if (answer < 100 ) {
        response = "I'm much obliged!";
      } else if (answer == 100 ) {
        response = "You guessed correctly!";
      } else if (answer > 100 ) {
        response = "I'm highly offended!";
      }
    alert(response);
  }