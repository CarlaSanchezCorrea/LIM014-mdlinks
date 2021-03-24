/*module.exports = () => {
  // ...
};
*/
/*let http = require('http'),
    fs = require('fs');
const { hasUncaughtExceptionCaptureCallback } = require('process');

  fs.readFile("./index.html",function(err,md){
    http.createServer(function(req, res){    
      res.write(html);
      res.end();
    }).listen(5500);
  })
*/
const fs = require('fs');

 module.exports = index = () => {
    fs.readFile("./README.md","utf8", function (err, data){
      if (err) throw err
      
      //console.log(data)
        console.log("Muestra contenido del archivo")
    })
    
}

index()


realPath = () => {
fs.realpath("./README.md", function (err, data){
  if (err) throw err
  
 // console.log(data)
    console.log("Muetsra Path")
})
}
realPath()

//module.exports = mdLinks;