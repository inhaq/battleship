import {Ship} from "../js/Ship";

describe('new Ship for hit and sunk', function () {

  let myShip = Ship('edge',  3);
  test('name of ship', () => {
    expect(myShip.name).toBe('edge');
  });

  test('length of ship', () => {
    expect(myShip.length).toBe(3);
  });

  test('hit ship', () => {
    expect(myShip.hit()).toBe(1);
    expect(myShip.hit()).toBe(2);
  });

  test('ship not sunk yet', () => {
    expect(myShip.isSunk()).toBeFalsy();
  });

  test('final hit ship', () => {
    expect(myShip.hit()).toBe(myShip.length);
  });

  test('sunk ship', () => {
    expect(myShip.isSunk()).toBeTruthy();
  });
});