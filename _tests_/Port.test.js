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
    describe('addShip', () => {
    it('can add a ship', () => {
       
        const ship = jest.fn();

        port.addShip(ship);

        expect(port.ships).toContain(ship);
    });
})
    describe('removeShip', () => {
    it('can remove a ship', () => {
       
        const bismarck = jest.fn();
        const arkRoyal = jest.fn();

        port.addShip(bismarck);
        port.addShip(arkRoyal);
        port.removeShip(arkRoyal);

        expect(port.ships).toEqual([bismarck]);
    });
})
});
});
