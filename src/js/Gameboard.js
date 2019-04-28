import {Ship, allShips} from "./Ship";

const Gameboard = () => {

  let board = new Array(100).fill(0);
  const COLUMN = 10;
  const SLOT = {
    EMPTY: 0,
    MISS: 1,
    HIT: 8
  };

  const randomPlacement = () => {
    // game will start with ships placed randomly ready
    // let x = Math.round(Math.random() * 10);
    // let y = Math.round(Math.random() * 10);
    // let index = x * COLUMN + y;
    //
    // for (let ship in allShips) {
    //   // allShips[ship].size
    //   for (let i = index; i < allShips[ship].size; i += 10) {
    //     if (board[i] === SLOT.EMPTY){
    //       board[i] = ship;
    //     }
    //   }
    // }

    for (let ship in allShips) {

      let x = Math.floor(Math.random() * 10);
      let y = Math.floor(Math.random() * 10);
      let index = x * COLUMN + y;


      for (let i = index; i < allShips[ship].size+index; i += 1) {

        if (board[i] === SLOT.EMPTY){
          board[i] = ship;
        }
      }
    }

  };

  const horizontalPlacement = () => {
    // on-click triggers(before game starts) to place ship horizontally
  };

  const verticalPlacement = () => {
    // on-click triggers(before game starts) to place ship vertically
  };

  const receiveAttack = (x, y) => {
    for (let ship in allShips) {
      // allShips[ship].size
    }

    // determines whether or not the attack hit a ship
    // and then sends the ‘hit’ function to the correct ship

    // records the coordinates of the missed shot
  };

  const shipSunk = () => {
    // should keep track of missed attacks so they can display them properly.
  };

  const allSunk = () => {
    // should be able to report whether or not all of their ships have been sunk
  };

  return {randomPlacement, horizontalPlacement, verticalPlacement, receiveAttack, shipSunk, allSunk};

};

export {Gameboard};