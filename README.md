<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-como-executar-o-projeto">Como executar</a> • 
</p>


##  Sobre o projeto

 O projeto é capaz de receber denuncias através de uma API, salvar as informações passadas e reenviar ao cliente com o endereço correspondente as coordenadas geográficas enviadas na requisição

---

##  Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instaladas em sua máquina as seguintes ferramentas:

- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/try/download/community)


###  Rodando a aplicação

```bash

# Instale as dependências
$ npm i

# Acesse a pasta do projeto no terminal/cmd
$ cd teste-backend-nodejs

# Crie um arquivo .env com as seguintes variáveis
- DB_KEY (Chave do banco de dados)
- MAP_KEY (Chave da Api mapQuest )
# Execute a aplicação
$ npm start
```
### :microscope: Testando
```bash
# Rode os testes em outra instância do terminal
$ npm test
```

As requisições seguem o modelo sugerido na descrição do teste pelo projeto.
 - url: **/v1/denuncias/**

---