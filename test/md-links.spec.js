//const mdLinks = require('../');
const index = require('../index.js');


/*describe('mdLinks', () => {

  it('should...', () => {
    console.log('FIX ME!');
  });

});
*/

describe('index', () => {

  it('Debería ser una funcion', () => {
    expect(typeof index).toBe('function');
  });

});

describe('realPath', () => {

  it('Debería ser una funcion', () => {
    expect(typeof realPath).toBe('function');
  });

});