import {Ship, allShips} from "../Ship";

describe('Ship', function () {
  let a = Ship(allShips.edge);
  test('to hit the ship',() => {
      expect(a.hit()).toBe(4);
  })
  test('to sunk the ship',() => {
    expect(a.isSunk()).toBe(true);
  })
});

// [[0,0], [0,1]....]