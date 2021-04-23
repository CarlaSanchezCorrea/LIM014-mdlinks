const fs = require('fs');
const readFile = (file) => {
    const hrefRegExp = /\[(.+?)\]\((https?).+?\)/g;
    const data = fs.readFileSync( file, "utf8")
    const dataMdLinks = data.match(hrefRegExp);
    const arrayLinksMd = [];
    for (let i in dataMdLinks) {
      let linksMd = dataMdLinks[i].match(hrefRegExp)[0];

      arrayLinksMd.push({
        href: linksMd.match(/https*?:([^"')\s]+)/)[0],
        text: linksMd.match(/\[(.*)\]/)[1].substr(0, 49),
        file: file
    });
    } return arrayLinksMd
}
module.exports = {readFile}