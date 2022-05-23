'use strict';

const hashLeftJoin = require('../hashmap-left-join');
const HashMap = require('../hashtable');

describe('left join', () => {
  let leftHash = new HashMap(888);
  let rightHash = new HashMap(888);
  let emptyHash = new HashMap(888);
  let noMatchHash = new HashMap(888);
  beforeAll(() => {

    //Left Hash Table
    leftHash.set('fond', 'enamored');
    leftHash.set('wrath', 'anger');
    leftHash.set('diligent', 'employed');
    leftHash.set('outift', 'grab');
    leftHash.set('guide', 'usher');
    //Right Hash Table
    rightHash.set('fond', 'averse');
    rightHash.set('wrath', 'delight');
    rightHash.set('diligent', 'idle');
    rightHash.set('guide', 'follow');
    rightHash.set('flow', 'jam');
  });
  it('return the correct left join data ', () => {
    let expectedResult = [
      ['wrath', 'anger', 'delight',],
      ['diligent', 'employed', 'idle'],
      ['fond', 'enamored', 'averse'],
      ['guide', 'usher', 'follow',],
      ['outift', 'grab', null,]
    ]

    let result = new HashMap(888)
    expect(hashLeftJoin(leftHash, rightHash)).toEqual(expectedResult);
  });

  it('return empty array if the left hash one is empty ', () => {
    let result = new HashMap(888)

    expect(hashLeftJoin(emptyHash, rightHash)).toEqual([]);
  });

  it('return null for the second value if no match in the right table', () => {
    let result = new HashMap(888)

    expect(hashLeftJoin(leftHash, noMatchHash)[0][2]).toBe(null);
  });
});

