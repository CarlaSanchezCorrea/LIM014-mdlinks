/*module.exports = () => {
  // ...
};
*/

const fs = require('fs');
//Leer archivo
const readFile = () => {
    fs.readFile("./README.md","utf8", function (err, data){
      if (err) throw err
      
        //console.log(data)
        console.log("Muestra contenido del archivo")
    })
    
}
readFile()

//Leer path
const realPath = () => {
fs.realpath("./README.md", function (err, data){
  if (err) throw err
  
   // console.log(data)
    console.log("Muestra Path")
})
}
realPath()

//module.exports = mdLinks; 

const path = require('path');
//let pathObj = path.parse(__filename);
//let pathFileError = path.parse('D:\La Mana\Laboratoria\md-links\LIM014-mdlinks\README.md');
let pathFile = path.parse('D:\\La Mana\\Laboratoria\\md-links\\LIM014-mdlinks\\README.md');
//console.log(pathObj);
console.log(pathFile);
//console.log(pathFileError);