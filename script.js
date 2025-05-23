const choose = ["paper", "scissor", "rock"];
let result = [];


function hasWin(inputPlayer, inputRobot) {
  if (inputPlayer === "paper" && inputRobot === "scissor") {
    return false;
  } else if (inputPlayer === "scissor" && inputRobot === "rock") {
    return false;
  } else if (inputPlayer === "rock" && inputRobot === "paper") {
    return false;
  }
  return true;
}

function play() {
  let robot = choose[Math.floor(Math.random() * choose.length)];
  let player = "paper";
  return result.push(hasWin(player, robot));

}

function message() {
  if (result[result.length - 1] === true) {
    return "you win";
  } else "you looose";
}

play()
