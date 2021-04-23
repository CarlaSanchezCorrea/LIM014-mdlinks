// const {mdLinks} = require('./extract-links.js')
// const fetch = require('node-fetch');
// const chalk = require('chalk');

// const file = 'test\\prueba.md';
//  mdLinks(file)
//     .then((result) => {
//         result.forEach((element) => {
//             fetch(element.href).then(res => {
//                 if (res.status === 200) {
//                     console.log(`${chalk.bgBlue.black('📌 TEXT: ')}  ${chalk.blue(element.text)}    | ${chalk.bgCyan.black('🔗 LINK: ')} ${chalk.cyan(res.url)}    | ${chalk.bgGreen.black('✅ STATUS: ')} ${chalk.green(res.statusText)} ${chalk.green(res.status)} | ${chalk.bgMagenta.black('📋 FILE: ')} ${chalk.magenta(element.file)}`
//                     )
//                   } else if (res.status === 404) {
//                     console.log(`${chalk.bgGray.black('📌 TEXT: ')}  ${chalk.gray(element.text)}    | ${chalk.bgRed.black('✂ LINK: ')} ${chalk.red(res.url)}    | ${chalk.bgRed.black('❌ STATUS: ')} ${chalk.red(res.statusText)} ${chalk.red(res.status)} | ${chalk.bgGray.black('📋 FILE: ')} ${chalk.gray(element.file)}`
//                     )          
//                   } else {
//                     console.log(`|Status:( ⚠ ) |File: ${chalk.cyanBright(element.file)} | Text: ${chalk.yellowBright(element.text)} | Link: ${chalk.underline.yellowBright(res.url)}<--- Este enlace presenta problemas`, (res.status));
//                 }
//             })
//         })
//     })
//     .catch(err => {
//         console.log(err);
//     })
