const Ship = require("../src/Ship.js");

describe('Ship', () => {
   it('it can be instantiated', () => {
       expect(new Ship('name')).toBeInstanceOf(Object);
   });
   it('has a starting port', () => {
       const ship = new Ship('Dover');
       expect(ship.startingPort).toBe('Dover')
   })
});