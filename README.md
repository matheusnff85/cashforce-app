# Cashforce App

- Este repositório contém a aplicação pedida para o processo seletivo da Cashforce, consiste em uma aplicação Fullstack para relatórios de vendas obtidos de um banco de dados específico.

---

# Tecnologias utilizadas :books:

- Javascript, React, Node.js, Express, Sequelize, MySQL, Axios, CSS, Docker e Docker-compose.

---

# Como Utilizar a aplicação

## Importante :warning:

- Quando utilizada com o docker a Aplicação utiliza as portas padrões **3000**(frontend), **3001**(backend), **3002**(database), para garantir seu correto funcionamento garante que as portas estão livres para uso, caso precise, basta mudá-las no arquivo `docker-compose.yml` localizado na pasta `/app`, caso utilize a aplicação sem o docker será necessário utilizar o arquivo `.env.example` renomeando o mesmo para `.env` e utilizar as variáveis de ambiante que fazem sentido para o seu contexto, além de ser necessário alterar a porta utilizada na requisição localizada no arquivo `/app/frontend/src/components/Table.jsx - Linha 21`.

<details>
  <summary>
    <strong>
      Rodando com o docker <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" width="30px" />
    </strong>
  </summary><br>

  - Primeiro clone o repositório com o comando `git clone git@github.com:matheusnff85/ngcash-app.git`.

  - Após clonado entre na pasta app e utilize o comando `docker-compose up -d`(para rodar em segundo plano no terminal) ou `docker-compose up` para visualizar os logs, e aguarde a inicialização do container (Caso ocorra algum erro com as dependências nesse processo, volte para a pasta raiz da aplicação e utilize o comando `bash install_apps.sh`).

</details>

<details>
  <summary><strong>Rodando manualmente:wrench:</strong></summary><br>

  - Primeiro clone o repositório com o comando `git clone git@github.com:matheusnff85/ngcash-app.git` e após clonar instale suas dependências com o comando `bash install_apps.sh` na raiz do projeto.

  - Utilize a query contida na raiz do projeto no arquivo `database.sql` para garantir que o banco de dados seja iniciado corretamente.

  - Após isso basta ir para a pasta do backend `/app/backend`, e altere o nome do arquivo `.env.example` para `.env`, este arquivo possui as variáveis de ambiente necessárias para o funcionamento da aplicação, as mesmas são:

```
APP_PORT=3001
DB_USER=root
DB_PASS=1234
DB_HOST=localhost
DB_PORT=3306
```
(Caso altere a variável **APP_PORT** será necessário alterar os endpoints de requisição no repositório de frontend também).

</details>

---

- Desenvolvido por [Matheus Marinho](https://www.linkedin.com/in/matheus-marinhodsp/).