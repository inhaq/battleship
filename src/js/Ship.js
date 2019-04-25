let allShips = {
  edge : { size : 4 },
  summit : { size : 3 },
  oasis : { size : 5 },
  galaxy : { size : 2 },
  regant : { size : 1 },
};

const Ship = (name, length) => {

  let countHit = 0;
  const hit = () => ++countHit;

  const isSunk = () => countHit === length;

  return {name, length, countHit, hit, isSunk}
};

export {allShips, Ship};

/*
* loop -> randomly generate 2d array
* validation -> to keep them from overlapping
* hit -> update ship length for that specific spot
* isSunk -> when hit has all nulls then it's sunk
* */