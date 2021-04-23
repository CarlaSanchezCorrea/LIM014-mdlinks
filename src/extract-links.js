const { readFile } = require('./api.js');

const fs = require('fs');
const path = require('path');

const mdLinks = (dir) => new Promise((resolve, reject) => {
    const toAbsolutePath = path.resolve(dir)
    const statPath= (fs.statSync(dir));
    const docExtension = path.extname(toAbsolutePath);
    if (statPath && statPath.isFile() && docExtension === '.md'){
        const result = readFile(dir);
        //console.log(result)
        resolve (result);
    }   
    else{
        reject(Error('No es un archivo .md'))
    }
})

        //console.log(mdLinks('test//prueba.md'))
module.exports = { mdLinks };