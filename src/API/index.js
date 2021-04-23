//exportar una función (mdLinks).
const chalk = require('chalk')
const { 
    validatePath,
    isAbsolutePath,
    fileExist,
    isMd,
    recursiveDirectory
} = require('./path-methods.js');
const {readFile} = require('./extrac-links-method.js');

const mdLinks = (dir) => new Promise((resolve, reject) => {
    if(typeof dir === 'string') {   
        if(validatePath(dir) === true){
            if(isAbsolutePath(dir) === false){
                const messageErrorMarkDown = "❌ Does not exist any files markDown";
                    if(fileExist(dir) === true){
                        if(isMd(dir) === true){
                            const result = readFile(dir);
                            if( result == ''){
                                const messageErr = '❌ File null ';
                                resolve (`${chalk.red(messageErr)}`)
                            } else{
                                resolve (result);
                            }
                        } else {
                            resolve (`${chalk.red(messageErrorMarkDown)}`)      
                        }
                    } else {
                        const allFiles = recursiveDirectory(dir);
                            if(allFiles == ''){
                                resolve (messageErrorMarkDown)
                            } else {
                                for(let file of allFiles){
                                   // console.log(file)
                                            const result = readFile(file);
                                            //console.log(result)
                                            if( result == ''){
                                                const messageErr = '❌ Have any file null: ' + file;
                                            //    console.log(messageErr)
                                                resolve (`${chalk.red(messageErr)}`)
                                            }else{
                                                resolve (result);
                                            }
                                }
                            }
                    }   
            } else {
                const result = readFile(dir);
                resolve (result);
            }
        } else {
            const message = "❌ Path does not exist, please check it first";
            reject (`${chalk.red(message)}`)
        }
    } else {
        const message = "⭕ Path invalid, please check it first \n" ;
        const messageHelp = "🢃  FIRST : Add path or file  🢃 \n";
        const messageAPI= "md-Links <path or file>\n\n";
        const messageOptions= "🔗 Also you can use the commands \n";
        const messageCommands= "--validate/--v\n--stats/--s\n--validate --stats/--v --s\n--stats --validate/--s --v";

        reject (`${chalk.red(message)}${chalk.cyan(messageHelp)}${chalk.yellow(messageAPI)}${(messageOptions)}${chalk.green(messageCommands)}`)
    }
})

module.exports = { mdLinks };
//console.log(mdLinks('test//prueba.md'))
//console.log(mdLinks('test//api.spec.js'))
//console.log(mdLinks('tst'))
//console.log(mdLinks('src'))
//console.log(mdLinks(''))
//console.log(mdLinks())
//console.log(mdLinks('D:\\La Mana\\Laboratoria\\md-links\\LIM014-mdlinks\\test\\prueba.md'))