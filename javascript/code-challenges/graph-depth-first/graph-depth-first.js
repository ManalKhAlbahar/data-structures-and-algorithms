'use strict';

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
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    this.adjacencyList.set(vertex, []);
  }

  addDirectedEdge(startVertex, endVertex, weight) {
    if (!this.adjacencyList.has(startVertex) || (!this.adjacencyList.has(endVertex))) {
      throw new Error('start or end vertex missing');
    }
    const adjacencies = this.adjacencyList.get(startVertex);
    adjacencies.push(new Edge(endVertex, weight));
  }

  getNeighbors(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      throw new Error('There are no vertex', vertex);
    }
    return this.adjacencyList.get(vertex);
  }


  depthFirst(startPoint) {
    if (!startPoint) return null;
    const visitedPoint = new Set();
    const traverseNeighbors = (node) => {
      visitedPoint.add(node);
      const neighbors = this.getNeighbors(node);
      for (let edge of neighbors) {
        if (!visitedPoint.has(edge.vertex)) {
          traverseNeighbors(edge.vertex);
        }
      }
    }
    traverseNeighbors(startPoint);
    return visitedPoint;
  }
}

module.exports = { Vertex, Edge, Graph };