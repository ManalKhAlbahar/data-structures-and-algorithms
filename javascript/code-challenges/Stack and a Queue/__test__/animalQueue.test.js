'use strict'
const AnimalShelter = require('../queueAnimals');
describe('test AnimalShelter  ', () => {
    test("enqueue cat into cat queue ", () => {
        const animalShelter = new AnimalShelter();
        let testAnimal =
            { pref: "cat" };

        expect(animalShelter.enqueue(testAnimal)).toMatchObject(testAnimal);
    });
    test("vaild input ", () => {
        const animalShelter = new AnimalShelter();
        let testAnimal = { pref: "lion" };

        expect(animalShelter.enqueue(testAnimal)).toBe("vaild input");
    });

    test("dequeue a cat ", () => {
        const animalShelter = new AnimalShelter();
        let testAnimal = { pref: "cat" };

        animalShelter.enqueue(testAnimal);

        expect(animalShelter.dequeue("cat")).toMatchObject(testAnimal);
    });

    test("dequeue a dog ", () => {
        const animalShelter = new AnimalShelter();
        let testAnimal1 = { pref: "dog" };
        let testAnimal2 = { pref: "dog" };

        animalShelter.enqueue(testAnimal1);

        expect(animalShelter.dequeue("dog")).toMatchObject(testAnimal1);
    });

    test("can't dequeue while the queue is empty ", () => {
        const animalShelter = new AnimalShelter();
        let testAnimal =
            { pref: "lion" };
        expect(animalShelter.dequeue("lion")).toBeNull();
    });
})