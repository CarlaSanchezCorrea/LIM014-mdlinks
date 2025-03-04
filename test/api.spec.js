//const typePath = require('..\\src\\extract-links.js'); 
const {readFile} = require('../src/api.js'); 
const relativePath = 'test\\prueba.md';
const validate =[
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file: 'test\\prueba.md'
  },
  {
    href: 'https://es.wikipedia.org/wiki/Markdown/',
    text: 'Markdown/',
    file: 'test\\prueba.md'
  }
];

//const retornar = 'No es un archivo .md';

describe('readFile', () => {
  it('Debería ser una object (readFile)', () => {
    expect(typeof readFile).toBe('function');
  });
  it('Debería retornar un array de cada link (href, text, file)', () => {
    expect(readFile(relativePath)).toEqual(validate);
  });
});
