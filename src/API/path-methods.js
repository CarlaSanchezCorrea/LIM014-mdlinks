const fs = require('fs');
const path = require('path');

const validatePath = (dir) => fs.existsSync(dir);
const isAbsolutePath = (dir) => path.isAbsolute(dir);
const toAbsolutePath = (dir) => path.resolve(dir);
const fileExist = (dir) => fs.statSync(dir).isFile(); 
const isMd = (dir) => path.extname(dir) === '.md';

const readDirectory = (dir) => fs.readdirSync(dir);

const recursiveDirectory  = (dir) => {
  let arrayFile = [];
  if (fileExist(dir)) {
    arrayFile.push(dir);
  } else {
    readDirectory(dir).forEach((file) => {
      // path.join -> une varios segmentos de la ruta para formar una sola ruta.
      const newPath = path.join(dir, file);
      const recursive = recursiveDirectory (newPath);
      arrayFile = arrayFile.concat(recursive);
    });
  }
  const getAllFiles = arrayFile.filter((dir) => isMd(dir));
  return getAllFiles;
};

//console.log(isAbsolutePath('test//prueba.md'))
module.exports = {
  validatePath,
  isAbsolutePath,
  toAbsolutePath,
  fileExist,
  isMd,
  recursiveDirectory
};