const Port = require("../src/Port.js");


describe('Port', () => {
    describe('new port', () => {
        let port;

        beforeEach (() => {
            port = new Port('Dover');
        });
    it('it can be instantiated', () => {
       
        expect(new Port('name')).toBeInstanceOf(Object);

    });
    it('has a name property', () => {
        
        expect(port.name).toEqual('Dover');
    })
    it('can add a ship', () => {
       
        const ship = {};

        port.addShip(ship);

        expect(port.ships).toContain(ship);
    });
    it('can remove a ship', () => {
       
        const bismarck = {};
        const arkRoyal = {};

        port.addShip(bismarck);
        port.addShip(arkRoyal);
        port.removeShip(bismarck);

        expect(port.ships).toEqual([bismarck]);
    });
});
});
