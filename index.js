const inquirer = require('inquirer')
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
        type: 'input',
        message: 'O que vpcê gosta?',
        name: 'gosta',
    }
]

function writeToFile(filename, data){
    fs.writeFile(filename, data, err => {
        if(err){
            return console.error(err)
        }

        console.log("Sucesso")
    })
}

const writeFileAsync = util.promisify(writeToFile)

async function init(){
    try {
        const userResponses = await inquirer.prompt(questions)

        const markdown = generateMarkdown()

         await writeFileAsync(`README${Math.random(100)}.md`, markdown)
    } catch (error) {
        console.error(error)
    }
}

init()