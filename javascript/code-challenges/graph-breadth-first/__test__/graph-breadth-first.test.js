'use strict'

const {Graph,Vertex} = require('../graph-breadth-first');

describe('Graphs breadthFirst', () => {

    const myGraph = new Graph();
  
    const Pandora = new Vertex('Pandora');
    const Arendelle = new Vertex('Arendelle');
    const Metroville = new Vertex('Metroville');
    const Monstroplolis = new Vertex('Monstroplolis');
    const Narnia = new Vertex('Narnia');
    const Naboo = new Vertex('Naboo');

    myGraph.addVertex(Pandora);
    myGraph.addVertex(Arendelle);
    myGraph.addVertex(Metroville);
    myGraph.addVertex(Monstroplolis);
    myGraph.addVertex(Narnia);
    myGraph.addVertex(Naboo);

    myGraph.addDirectEdge(Pandora, Arendelle);
    myGraph.addDirectEdge(Arendelle, Pandora);

    myGraph.addDirectEdge(Arendelle,Metroville );
    myGraph.addDirectEdge(Metroville,Arendelle );
    

    myGraph.addDirectEdge(Arendelle,Monstroplolis );
    myGraph.addDirectEdge(Monstroplolis,Arendelle );

    myGraph.addDirectEdge(Metroville,Narnia );
    myGraph.addDirectEdge(Narnia,Metroville );

    myGraph.addDirectEdge(Metroville,Naboo );
    myGraph.addDirectEdge(Naboo,Metroville );

    myGraph.addDirectEdge(Metroville,Monstroplolis );
    myGraph.addDirectEdge(Monstroplolis,Metroville );


    myGraph.addDirectEdge(Monstroplolis,Naboo );
    myGraph.addDirectEdge(Naboo,Monstroplolis );
    
    

    myGraph.addDirectEdge(Narnia,Naboo );
    myGraph.addDirectEdge(Naboo,Narnia );

    it('the method return an array ', () => {
        expect(Array.isArray(myGraph.breadthFirst(Pandora))).toBeTruthy()
    });

    it('first city to be Pandora ', () => {
        expect(myGraph.breadthFirst(Pandora)[0].value).toEqual('Pandora')
    });

    it('last city to be msh pandora ', () => {
        expect(myGraph.breadthFirst(Pandora)[5].value).toEqual('Naboo')
    });

    it('the array of result ', () => {
        expect(myGraph.breadthFirst(Pandora)).toEqual([
             { value: 'Pandora' },
             { value: 'Arendelle' },
             { value: 'Metroville' },
             { value: 'Monstroplolis' },
             { value: 'Narnia' },
             { value: 'Naboo' }
          ])
    });

})



