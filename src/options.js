#!/usr/bin/env node
const { totalLinks, uniqueLinks } = require('./cli-options.js');
const {mdLinks} = require('./API/index.js');
const {validateLink, brokenLinks} = require('./validate-option.js');
const chalk = require('chalk');
 const fetch = require('node-fetch');

const path = process.argv[2];
const options = process.argv[3];
const status = process.argv[4];



if (options === '--validate' && status === '--stats' || status === '--stats' && options === '--validate' || options === '--s' && status === '--v' || options === '--v' && status === '--s') {
  mdLinks(path, { validate: true })
    .then(res => {
      console.log(`Total: ${totalLinks(res)}`);
      console.log(`Unique: ${uniqueLinks(res)}`);
      console.log(`Broken: ${brokenLinks(res)}`);
    }) 
} else if (options === '--validate' || options === '--v') {
  mdLinks(path, { validate: true })
    .then(res =>
      validateLink(res).then((a) => a.forEach(element => {
               fetch(element.href).then(res => {
                 if (res.status === 200) {
                     console.log(`${('📋 FILE: ')} ${(element.file)}    |${('✅ STATUS: ')} ${chalk.green(res.statusText)} ${chalk.green(res.status)}          |${('📌 TEXT: ')}  ${(element.text)}    | ${chalk.cyan('🔗 LINK: ')} ${chalk.cyan(res.url)}`)
                   } else if (res.status !== 200) {
                     console.log(`${('📋 FILE: ')} ${(element.file)}    |${('❌ STATUS: ')} ${chalk.red(res.statusText)} ${chalk.red(res.status)}   |${('📌 TEXT: ')}  ${(element.text)}    | ${chalk.red('✂ LINK: ')} ${chalk.red(res.url)}`)          
                   }
              })
    }))); 
} else if (options === '--stats' || options === '--s') {
  mdLinks(path, { validate: true })
    .then(res => {
      console.log(`Total: ${totalLinks(res)}`);
      console.log(`Unique: ${uniqueLinks(res)}`);
    })
    .catch(error => console.log(error));
} else {
  mdLinks(path)
  .then(res => {
    res.forEach((element) => {
      console.log(`|File: ${chalk.red(element.file)} | Text: ${chalk.yellowBright(element.text)} | Link: ${chalk.underline.blueBright(element.href)}`);
    });
  })
    .catch(err => console.log(err));
}