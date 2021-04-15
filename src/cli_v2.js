const {mdLinks} = require('./extract-links.js')
const fetch = require('node-fetch');

const file = 'test\\prueba.md';
 mdLinks(file)
 /*
    .then(res => {
        console.log(res) // return [{ href, text, file }]
    })
*/
    .then(res => {     
        const hrefStatus = res.map(element => {
            return (element.href)
        })
        for(let i = 0; i< hrefStatus.length; i++) {
            fetch(hrefStatus[i]).then(function(response){
                console.log('response.ok =', response.ok);
                console.log('response.status =', response.status);
            })
        }  
    })
    .catch(err => {
        console.log(err);
    })
