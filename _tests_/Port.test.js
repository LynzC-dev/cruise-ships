const Port = require("../src/Port.js");


describe('Port', () => {
    it('it can be instantiated', () => {
        expect(new Port('name')).toBeInstanceOf(Object);
    });
    it('has a name property', () => {
        const port = new Port('Dover');
        expect(port.name).toEqual('Dover');
    })
})
