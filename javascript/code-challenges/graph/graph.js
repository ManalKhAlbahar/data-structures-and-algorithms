'use strict'

class Vertex {
    constructor(value) {
        this.value = value;
    }
}

class Edge {
    constructor(vertex, weight) {
        this.vertex = vertex;
        this.weight = weight;
    }
}



class Graph {
    constructor() {
        this.list = new Map();
    }

    addVertix(vertex) {
        this.list.set(vertex, [])
    }

    addDirectedEdge(startVertex, endVertex, weight = 0) {
        if (!this.list.has(startVertex) || !this.list.has(endVertex)) {
            console.log('Invaild Nodes');
        }

        const edge = new Edge(endVertex, weight);
        const start = this.list.get(startVertex);
        start.push(edge);

    }


    getNeighbors(vertex) {
        if (!this.list.has(vertex)) {
            console.log("Invalid Vertex");
            return;
        }
        return this.list.get(vertex);
    }

    getNode() {
        try {
            let allNodes = [];
            for (const [vertex, edge] of this.list.entries()) {
                allNodes.push(vertex);
            }
            return allNodes;
        } catch (error) {
            console.log(error.message);
        }
    }

    size() {
        try {
            let size = 0;
            for (const vertex of this.list.keys()) {
                size++;
            }
            return size;
        } catch (error) {
            console.log(error.message);
        }
    }

}


module.exports = { Vertex, Edge , Graph }
