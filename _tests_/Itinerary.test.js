const Itinerary = require("../src/Itinerary.js");
const Port = require("../src/Port.js");

describe('Itinerary', () => {
    it('it can be instantiated', () => {
expect(new Itinerary('name')).toBeInstanceOf(Object);
    });
    it('Itinerary has a ports property', () => {
        const dover = new Port('Dover');
        const calais = new Port ('Calais');

        const itinerary = new Itinerary([dover, calais]);

        expect(itinerary.ports).toEqual([dover, calais]);
    })
})
