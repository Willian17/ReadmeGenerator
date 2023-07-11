function generateMarkdown(userResponses) {
  return sectionsMarkdown(userResponses);
}

function sectionsMarkdown(userResponses) {
  return (
    sectionHeader(userResponses) +
    sectionSummary(userResponses) +
    sectionAbout(userResponses) +
    sectionFeatures(userResponses) +
    sectionHowRun(userResponses) +
    sectionTechnologies(userResponses) +
    sectionContributors(userResponses) +
    sectionContributing(userResponses) +
    sectionLicense(userResponses)
  );
}

function sectionHeader(userResponses) {
  return `<h1 align="center"> ${userResponses.titulo} </h1>

  <p align="center">
    <img alt="Last commit" src="https://img.shields.io/github/last-commit/${userResponses.username}/${userResponses.repositorio}">
    <img alt="stars" src="https://img.shields.io/github/stars/${userResponses.username}/${userResponses.repositorio}?logo=github">
    <img alt="size" src="https://img.shields.io/github/repo-size/${userResponses.username}/${userResponses.repositorio}">
    <img alt="license" src="https://img.shields.io/github/license/${userResponses.username}/${userResponses.repositorio}">
  </p>
  `;
}

function sectionSummary(userResponses) {
  return `
  <summary>📖 Sumário</summary>
  
  * [➤ Sobre o projeto](#sobre)
  * [➤ Funcionalidades](#funcionalidades)
  * [➤ Como executar](#executar)
  * [➤ Tecnologias](#tecnologias)
  * [➤ Contribuidores](#contribuidores)
  * [➤ Como contribuir](#contribuir)
  * [➤ Licença](#licenca)
  `;
}

function sectionAbout(userResponses) {
  return userResponses.descricao && userResponses.imagem
    ? `
  [![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#sobre-o-projeto)

  ## :pushpin: Sobre o Projeto <a name="sobre"></a>
  <div>
  ${userResponses.descricao && `<p>${userResponses.descricao}</p>`}
  ${userResponses.imagem && `<img src="${userResponses.imagem}" width="400px">`}
  </div>
  `
    : "";
}

function sectionFeatures(userResponses) {
  return userResponses.funcionalidades
    ? `
  [![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#funcionalidades)

  ## :rocket: Funcionalidades <a name="funcionalidades"></a>

  - [x] ${userResponses.funcionalidades.split(", ").join("\n - [x] ")}
  `
    : "";
}

function sectionHowRun(userResponses) {
  return userResponses.run
    ? `
  [![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#executar)

  ## :construction_worker: Como executar <a name="executar"></a>

  ### Pré-requisitos
  Ter o <a href="https://nodejs.org/en/">Node.js</a> instalado na maquina.
  
  ### Clone Repository
  $ git clone https://github.com/${userResponses.username}/${userResponses.repositorio}.git
  
  ### Instalar Dependencias
  \`\`\`
  $ npm install
  \`\`\`
  ### Executar Aplicação
  \`\`\`
  $ npm ${userResponses.run}
  \`\`\`

  `
    : "";
}

function sectionTechnologies(userResponses) {
  return userResponses.tecnologias
    ? `

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](##tecnologias)

## :computer: Tecnologias <a name="tecnologias"></a>
<ul>
${userResponses.tecnologias
  .split(", ")
  .map((item) => `<li>${item}</li>`)
  .join("\n")}
</ul>`
    : "";
}

function sectionContributors(userResponses) {
  return `

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)

## 🤝 Contribuidores <a name="contribuidores"></a>

Agradecemos às seguintes pessoas que contribuíram para este projeto:

<a href = "https://github.com/${userResponses.username}/${userResponses.repositorio}/graphs/contributors">
  <img src = "https://contrib.rocks/image?repo=${userResponses.username}/${userResponses.repositorio}"/>
</a>

`;
}

function sectionContributing(userResponses) {
  return `
[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#contribuidores)

## 😄 Seja um dos contribuidores<br> <a name="contribuir"></a>

Contribuições são sempre bem-vindas!

1. Fork o Projeto
2. Criar uma Branch (git checkout -b feature/AmazingFeature)
3. Commit suas alterações (git commit -m 'Add some AmazingFeature)
4. Push na Branch (git push origin feature/AmazingFeature)
5. Abra um Pull Request

`;
}

function sectionLicense(userResponses) {
  return userResponses.licenca
    ? `
[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#licensa)

## 📝 Licença <a name="licenca"></a>

Esse projeto está sob licença [${userResponses.licenca}](LICENSE.md).

## :man_astronaut: Mostre seu apoio 

Dê uma ⭐️ se esse projeto te ajudou!`
    : "";
}
module.exports = generateMarkdown;
