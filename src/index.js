import {renderPlayer} from "./js/renderPlayer";
import {renderBot, myBotBoard, botBoard}    from "./js/renderBot";
import {Gameboard}    from "./js/Gameboard";

renderPlayer();
renderBot();


function botTurn() {
  let randTry = [];
  const bot = document.querySelector('.bot');
  for (let i = 0; i < 100;) {
    let index = Math.floor(Math.random() * 100);
    if (!(randTry.includes(index))){
      randTry.push(index);
      const clicked = bot.querySelector(`[data-index='${index}']`);
      let res = botBoard.receiveAttack(myBotBoard, index);
      if (res === 1){
        clicked.classList.add('miss');
      } else if (res === 6){
        clicked.classList.add('hit');
      } else {
        alert('DRY!');
      }
      let win = botBoard.allSunk(myBotBoard);
      if (win){
        alert('Bot won!');
        document.location.reload();
      }

      i++;
    }
  }
}
// botTurn();
// playerTurn();
function playerTurn() {
  let index;
  let playerBoard = Gameboard();
  let myBoard = playerBoard.randomPlacement();
  console.log(myBoard);
  const player = document.querySelector('.player');
  player.addEventListener('click', function (e) {
    e.preventDefault();
    if (e.target.dataset.index){
      index = e.target.dataset.index;
      let res = playerBoard.receiveAttack(myBoard, index);
      if (res === 1){
        e.target.classList.add('miss');
      } else if (res === 6){
        e.target.classList.add('hit');
      } else {
        alert('DRY!');
      }
      let win = playerBoard.allSunk(myBoard);
      if (win){
        alert('Game over, You won!');
        document.location.reload();
      }
    }
  })
}