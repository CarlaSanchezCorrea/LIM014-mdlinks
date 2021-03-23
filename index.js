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

function readFile () {
fs.readFile("./README.md","utf8", function (err, data){
  if (err) throw err
  
  console.log(data)
})
}

readFile()


function realPath () {
fs.realpath("./README.md", function (err, data){
  if (err) throw err
  
  console.log(data)
})
}
realPath()

/*module.exports = mdLinks;*/