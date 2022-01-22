
<h1  align="center">
  <img src="src/assets/safir-mobile2.png" alt="some text" width=400 height=200>
</h1>
<h1 align="center">SAFIR</h1>
<p align="center">🚀 SISTEMA AUTOMATIZADO PARA FRUTICULTURA IRRIGADA </p>
<h4 align="center"> 
	🚧  Próxima Versão 0.4 🚀 Em construção...  🚧
</h4>
<h1 align="center">
  <img src="https://img.shields.io/static/v1?label=LICENCA&message=GPLv3&color=green&style=plasic&logo=ghost"/>
  <img src="https://img.shields.io/static/v1?label=ANDAMENTO&message=22%&color=green&style=plasic&logo=react"/>
  <img src="https://img.shields.io/static/v1?label=ANDAMENTO&message=36%&color=green&style=plasic&logo=arduino"/>
</h1>

Tabela de conteúdos
=================
<!--ts-->
   * [Features](#features)
   * [Pré-requisitos](#pre-requisitos)
   * [Instalação](#instalacao)
   * [Inicialização do projeto](#inicializacaodoprojeto)
   * [Executar o projeto](#executaroprojeto)
   * [Tecnologias](#tecnologias)
<!--te-->
<a name="features">### Features</a>


- [x] Cadastro de usuário
- [x] Tela de registro de trabalho
- [x] Tela de exibição de registro
- [x] Tela de ativação/desativação de dispositivos
- [ ] Implementação de sensores no campo
- [ ] Tela de apresentação de dados do campo
- [ ] Implementação da tecnologia LoRa
- [ ] Tela com dashboard

<h1 align="center">
  <img alt="demonstraUso" title="safirGif" width=360 height=800 src="./src/assets/gitSafir.gif"/>
</h1>
<a name="pre-requisitos">### Pré-requisitos </a>

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js(Versão LTS)](https://nodejs.org/en/) e [Expo-cli](https://docs.expo.dev/get-started/installation/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)
<a name="instalacao">### Instalação</a>


Depois de instalar o Git e o Node JS, abra o seu terminal e digite:
```bash
npm install -g expo-cli
```
<a name="inicializacaodoprojeto">### Inicialização do projeto</a>
Escolha uma pasta para armazenar o projeto e em seguida faça um clone do repositório na pasta desejada, digite no terminal:
```bash
git clone https://github.com/JonatanLessa/safirapp.git
```
Em seguida entre na pasta do repositório no seu computador e execute o comando abaixo:
```bash
npm install
```
<a name="executaroprojeto">### Executar o projeto</a>

Para executar o projeto basta estar na pasta do repositório e executar:
```bash
expo start
```
Em seguida, será aberto no seu navegador padrão uma aba na porta http://localhost:19002/
O app pode rodar no seu próprio celular ou em um emulador no computador.
No celular basta baixar o aplicativo Expo na Play Store e pegar o QRCODE da aba aberta no navegador. O dowload do App será feito em seguida.

<a name="tecnologias">### 🛠 Tecnologias</a>


As seguintes ferramentas foram usadas na construção do projeto:

- [Expo](https://expo.io/)
- [Node.js](https://nodejs.org/en/)
- [React Native](https://reactnative.dev/)
