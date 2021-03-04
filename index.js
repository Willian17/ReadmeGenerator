const inquirer = require('inquirer')
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
        type: 'input',
        message: 'Qual seu username no Github?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'Nome do repositório no Github',
        name: 'repositorio',
    },
    {
        type: 'input',
        message: 'Titulo do projeto',
        name: 'titulo',
    },
    {
        type: 'input',
        message: 'Descrição do projeto',
        name: 'descricao',
    },
    {
        type: 'input',
        message: 'Url da imagem de capa/preview do projeto',
        name: 'imagem',
    },
    {
        type: 'input',
        message: 'Comando do Script para rodar o projeto (start)',
        name: 'run',
    },

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

        const markdown = generateMarkdown(userResponses)

         await writeFileAsync(`README${Math.random(100)}.md`, markdown)
    } catch (error) {
        console.error(error)
    }
}

init()