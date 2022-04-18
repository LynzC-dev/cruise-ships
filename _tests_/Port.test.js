const Port = require("../src/Port.js");


describe('Port', () => {
    it('it can be instantiated', () => {
        expect(new Port('name')).toBeInstanceOf(Object);
    });
    it('has a name property', () => {
        const port = new Port('Dover');
        expect(port.name).toEqual('Dover');
    })
    it('can add a ship', () => {
        const port = new Port('Dover');
        const ship = {};

        port.addShip(ship);

        expect(port.ships).toContain(ship);
    });
    it('can remove a ship', () => {
        const port = new Port('Dover');
        const bismarck = {};
        const arkRoyal = {};

        port.addShip(bismarck);
        port.addShip(arkRoyal);
        port.removeShip(bismarck);

        expect(port.ships).toEqual([bismarck]);
    });
})
