
const Port = require("../src/Port.js");
const Ship = require("../src/Ship.js");
const Itinerary = require("../src/Itinerary.js");

describe('Ship', () => {
    describe('with ports and an itinerary', () => {
        let ship;
        let dover;
        let calais;
        let itinerary;

        beforeEach (() => {
          dover = {
            addShip: jest.fn(),
            removeShip: jest.fn(),
            name: 'Dover',
            ships: []
           };
           calais = {
            addShip: jest.fn(),
            removeShip: jest.fn(),
            name: 'Calais',
            ships: []
           };
            
            itinerary = new Itinerary([dover, calais]);
            ship = new Ship(itinerary);
        });

   it('it can be instantiated', () => {
       const port = new Port('Dover');
       const itinerary = new Itinerary([port]);

       expect(ship).toBeInstanceOf(Object);
   });
   it('has a starting port', () => {
        const port = new Port('Dover');
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);
        
       expect(ship.currentPort).toBe(port);
   });
   it('can set sail', () => {
       ship.setSail();

       expect(ship.currentPort).toBeFalsy();
       expect(dover.removeShip).toHaveBeenCalledWith(ship);
   });
   
   it('gets added to port on instantiation', () => {

       const itinerary = new Itinerary([dover]);

       expect(dover.addShip).toHaveBeenCalledWith(ship);
   });

    it('can dock at a different port', () => {
    // const dover = new Port('Dover');
    // const calais = new Port('Calais');
    // const itinerary = new Itinerary([dover, calais]);
    // const ship = new Ship(itinerary);
    
     ship.setSail();
     ship.dock();

    expect(ship.currentPort).toBe(calais);
    expect(calais.addShip).toHaveBeenCalledWith(ship);
    });
    it('cannot sail further than its itinerary', () => {
    // const dover = new Port('Dover');
    // const calais = new Port('Calais');
    // const itinerary = new Itinerary([dover, calais]);
    // const ship = new Ship(itinerary);

    ship.setSail();
    ship.dock();

    expect(() => ship.setSail()).toThrowError('End of itinerary reached');
    });
    });
});