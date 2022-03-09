function startGame() {
    let response = "";
    let answer = prompt("How old do you think I am?");
      if (answer === null) {
        response = "come on don't be shy!"
      } else if (answer < 100 ) {
        response = "I'm flattered!";
      } else if (answer == 100 ) {
        response = "Yep that's right and still fresh as a daisy, me! Would you like to share some of these leaves with me?";
      } else if (answer > 100 ) {
        response = "I'm highly offended!";
      }
    alert(response);
  }