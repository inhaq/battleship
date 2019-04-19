
let allShips = {
  edge : { size : 4 },
  summit : { size : 3 },
  oasis : { size : 5 },
  galaxy : { size : 2 },
  regant : { size : 1 },
};

const Ship = (ship) => {
  let times = 3;
  const hit = () => {
    return ++times;
  };

  let {size} = ship;
  const isSunk = () => {
    return size === times;
  };

  return {hit, isSunk};
};

export {Ship, allShips};


/*
* loop -> randomly generate 2d array
* validation -> to keep them from overlapping
* hit -> update ship length for that specific spot
* isSunk -> when hit has all nulls then it's sunk
* */