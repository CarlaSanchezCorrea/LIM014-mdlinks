//////////////////////////////////////////////////////////////////////// Path => Absoluta o Relativa ?
const fs = require('fs');
const path = require('path');
//('D:\\La Mana\\Laboratoria\\md-links\\LIM014-mdlinks\\README.md');
//let pathFile = path.isAbsolute('D:\\La Mana\\Laboratoria\\md-links\\..');
//console.log(pathFile); //Returns : true

//let pathFile = path.isAbsolute('D:\\La Mana\\Laboratoria\\md-links\\..');
//console.log(pathFile); //Returns : true
const file = '.\\README.md';
//const file = './test/prueba.md';
//const fileExample = 'index.text'; //Reservar para comparar .md vs otra extensión 
//let pathRelative = path.isAbsolute(file); // ¿Absolute Path?
//console.log('linea 13', pathRelative); 
const toAbsolutePath = path.resolve(file); // Path relative to --> Absolute Path
//console.log(toAbsolutePath);

//const pathDir= path.dirname(toAbsolutePath); // Nombre del directorio
//console.log("NOMBRE DEL DIR: "+ pathDir); // Buscar tipo de dir
/*
const typePathExample = (dir) => {
    let statPath= (fs.statSync(dir));
    if (statPath && statPath.isDirectory()){
        console.log('Es directorio. ')
    }
    else{

        console.log('No es directorio')
    }
}
typePathExample(toAbsolutePath);

const typePath = (dir) => fs.statSync(dir); // extensión del file
console.log('typePath is :: ' + typePath(toAbsolutePath));

const isMd = (dir) => path.extname(dir) === '.md'; // extensión del file
console.log('isMdExtension is :: ' + isMd(toAbsolutePath));
*/
/*
const docExtension = path.extname(toAbsolutePath); // extensión del file 
console.log(docExtension);

if (docExtension === '.md') {
    console.log('Es un archivo .md')
}
else{
    console.log('NO ES ARCHIVO .md')
}
*/
const readFile = (file) => {
    const hrefRegExp = /\[(.+?)\]\((https?).+?\)/g;
    const data = fs.readFileSync( file, "utf8")
    const dataMdLinks = data.match(hrefRegExp);
    const arrayLinksMd = [];
    for (let i in dataMdLinks) {
      let linksMd = dataMdLinks[i].match(hrefRegExp)[0];
      //console.log("Línea 79:  ", linksMd);

      arrayLinksMd.push({
        href: linksMd.match(/https*?:([^"')\s]+)/g)[0],
        text: linksMd.match(/\[(.*)\]/)[1].substr(0, 49)//investigar nueva línea
        ,
        file: file
    });
    } return arrayLinksMd
}
const typePath = (dir) => {
    
    let statPath= (fs.statSync(dir));
    const docExtension = path.extname(toAbsolutePath);
    

    if (statPath && statPath.isFile() && docExtension === '.md'){
      //  console.log('Es archivo y es .md')

        return readFile(dir)
    }
    else{
        console.log('No es un archivo .md')
    }
}
console.log(typePath(toAbsolutePath));
module.exports = typePath;