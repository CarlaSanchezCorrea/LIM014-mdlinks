const fs = require('fs');
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
        text: linksMd.match(/\[(.*)\]/)[1].substr(0, 49),//investigar nueva línea
        file: file
    });
    } return arrayLinksMd
}
//console.log(readFile('test\\prueba.md'))
module.exports = {readFile}