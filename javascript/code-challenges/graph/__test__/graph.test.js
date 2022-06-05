'use strict';

const { Graph, Vertex, Edge } = require('../graph');


describe('Graph', () => {
    it('Add Node', () => {
        const graphTest = new Graph();
        const vertexOne = new Vertex(1);
        graphTest.addVertix(vertexOne);
        expect(graphTest.list.has(vertexOne)).toEqual(true);
    });
    it('Add Edge ', () => {
        const myGraph = new Graph();
        const zero = new Vertex(0);
        const one = new Vertex(1);
        myGraph.addVertix(zero);
        myGraph.addDirectedEdge(zero, one);
        let value = 0;
        for (const iterator of myGraph.list.entries()) {
            value = iterator[1][0].vertex.value;
        }
        expect(value).toEqual(1);
    });

    it('Size of Graph', () => {
        const graphTest = new Graph();
        const vetrexSeven = new Vertex(7);
        const vertexOne = new Vertex(1);
        const two = new Vertex(2);
        const three = new Vertex(3);
        graphTest.addVertix(vetrexSeven);
        graphTest.addVertix(vertexOne);
        graphTest.addVertix(two);
        graphTest.addVertix(three);
        graphTest.addDirectedEdge(vetrexSeven, two);
        graphTest.addDirectedEdge(two, three);


        expect(graphTest.size()).toEqual(4);
    });
});