'use strict'
const {Graph , businessTrip}= require('../graph-business-trip')


describe("Business Trip Test :", () => {

    let graph = new Graph();
    graph.addVertex("Pandora")
    graph.addVertex("Arendelle")
    graph.addVertex("Metroville")
    graph.addVertex("Monstropolis")
    graph.addVertex("Narnia")
    graph.addVertex("Naboo")
    
    graph. addDirectEdge("Pandora", "Arendelle" ,150)
    graph. addDirectEdge("Metroville","Pandora" ,82)
    graph. addDirectEdge("Arendelle","Metroville",99)
    graph. addDirectEdge("Arendelle","Monstropolis",42)
    graph. addDirectEdge("Metroville","Monstropolis",150)
    graph. addDirectEdge("Metroville","Narnia",37)
    graph. addDirectEdge("Metroville","Naboo",26)
    graph. addDirectEdge("Monstropolis","Naboo",73)
    graph. addDirectEdge("Narnia","Naboo",250)

    it("ex:Input [Metroville, Pandora, ]", () => {
 
        expect(businessTrip(graph ,['Metroville', 'Pandora' ])).toEqual('true, $82');
    })
    it("ex:Input [Arendelle, New Monstropolis, Naboo]", () => {
 
        expect(businessTrip(graph ,['Arendelle','Monstropolis', 'Naboo'])).toEqual('true, $115');
    })
    it("ex:Input ['Naboo', 'Pandora']", () => {
 
        expect(businessTrip(graph ,['Naboo', 'Pandora'])).toEqual('false, $0');
    })
    it("ex:Input [Narnia, Arendelle, Naboo]", () => {
 
        expect(businessTrip(graph ,['Narnia', 'Arendelle', 'Naboo'])).toEqual('false, $0');
    })

});