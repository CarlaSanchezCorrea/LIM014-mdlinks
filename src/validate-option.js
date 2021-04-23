const fetch = require('node-fetch');
//const chalk = require('chalk');

const validateLink = (arr) => {
    const promiseAA = arr.map((element) => fetch(element.href)
        .then((res) => ({
            status : res.status,
            statusText: res.statusText,
            ...element,
        }))
        .catch((res) => ({
            status : res.status,
            statusText: res.statusText,
            ...element,
        }))); 
    // eslint-disable-next-line no-undef
    return Promise.all(promiseAA);
};
          //if (res.status >= 200 && res.status <= 309) {
          //  console.log(`|Status:(✔✔ ) ${chalk.greenBright(res.status)} ${chalk.green(res.statusText)}  | File: ${chalk.cyanBright(element.file)} | Text: ${chalk.yellowBright(element.text)} | Link: ${chalk.underline.blueBright(res.url)} `);
  
          //} else if (res.status >= 400) {
          //  console.log(`|Status:(✘ )  ${chalk.redBright(res.status)} ${chalk.red("FAIL")}| File: ${chalk.cyanBright(element.file)} | Text: ${chalk.yellowBright(element.text)} | Link: ${chalk.underline.redBright(res.url)} `);
  
          //}
         
          //  console.log(`|Status:( ⚠ ) |File: ${chalk.cyanBright(element.file)} | Text: ${chalk.yellowBright(element.text)} | Link: ${chalk.underline.yellowBright(res.url)}<--- Este enlace presenta problemas` + res);
          const brokenLinks = (arr) => new Promise((resolve, reject) => {
            const arraylinksBroken = [];
                const brokenUrls = arr.map(element => {
                    return (element.href)
                }) 
                for(let el of brokenUrls){ fetch(el)
                .then(res => { 
                    if (res.status >= 400) {
                        arraylinksBroken.push(res.status)
                   } //resolve (arraylinksBroken)
                 })}
                 console.log(arraylinksBroken)
                 console.log(brokenUrls)})
        ;
        
module.exports = {validateLink , brokenLinks}