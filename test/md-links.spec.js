const typePath = require('..\\src\\extract-links.js'); 
const readFile = require('..\\src\\api.js'); 
const relativePath = './test/prueba.md';
const validate =[
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file: 'test\\prueba.md'
  }
];
const retornar = 'No es un archivo .md';

describe('readFile', () => {
  it('Debería ser una función (validatePath)', () => {
    expect(typeof readFile).toBe('object');
  });
  it('Debería retornar un array de cada link (href, text, file)', () => {
    expect(readFile(relativePath)).toEqual(validate);
  });
});
