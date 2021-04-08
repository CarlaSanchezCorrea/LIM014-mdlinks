const { readFile } = require('./api.js');

const fs = require('fs');
const path = require('path');

const typePath = (dir) => {
    const toAbsolutePath = path.resolve(dir)
    const statPath= (fs.statSync(dir));
    const docExtension = path.extname(toAbsolutePath);
    if (statPath && statPath.isFile() && docExtension === '.md'){
        return readFile(dir)
    }
    else{
        const errMessage = 'No es un archivo .md'
        return errMessage
    }
}
    
//console.log(typePath('./test/prueba.md'));
module.exports = {typePath}