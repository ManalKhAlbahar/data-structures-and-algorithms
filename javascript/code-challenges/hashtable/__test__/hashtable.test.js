const HashMap = require('../hashtable');

describe('HashMap', () => {
    it('Add key/value to hashTable results', () => {
        let hashTable = new HashMap(8);
        hashTable.set('key', 'value');

        expect(hashTable.contains('key')).toBe(true);
        expect(hashTable.get('key')).toEqual('value');
    });


    it('Retrieving based on a key returns the value stored', () => {
        let hashTable = new HashMap(7);
        hashTable.set('hello', 'value');


        expect(hashTable.contains('hello')).toBe(true);
        expect(hashTable.get('hello')).toEqual('value');
        expect(hashTable.get('Manal')).toEqual(null);
    });


    it('Successfully returns null for a key that does not exist in the hashTable', () => {
        let hashTable = new HashMap(7);
        hashTable.set('Key', 'value');
        expect(hashTable.get('Hi')).toBeNull();
    });
    it('Successfully retrieve a value from a bucket within the hashTable that has a collision', () => {
        let hashTable = new HashMap(88);
        hashTable.set('hi', 'mm');
        hashTable.set('hello', 'm');
    
        expect(hashTable.get('hello')).toBe('m');
    });

    it('Successfully hash a key to an in-range value', () => {
        let hashTable = new HashMap(50);
        let LessThanOrEqual = 49;

        let GreaterThanOrEqual = 0;
        let key = 'M';
        expect(hashTable.getHash(key)).toBeLessThanOrEqual(LessThanOrEqual);

        expect(hashTable.getHash(key)).toBeGreaterThanOrEqual(GreaterThanOrEqual);
    })
});