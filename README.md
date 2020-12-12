<h1 align="center">
    <br>
    <p align="center">OpenScientia Projeto Final Backend {Reprograma} <p>
</h1>

<h2 align="center">
    <br>
    <p align="center">Olá, este é o meu projeto final de Backend da Reprograma, o OpenScientia.<p>
</h2> 

![OpenScientiaLogo](./frontend/images/OPEN.jpg)
### Problemática e objetivo geral do projeto.<p>

<p align="justify"> Surgiu da necessidade de comunicar a ciência de forma simples para pessoas que não são da área acadêmica, mas que desejam se atualizar com publicações de artigos científicos. Seu objetivo principal é democratizar o acesso a informação produzida pelas universidades públicas.

Para os pesquisadorxs trata-se de uma oportunidade de fazer a divulgação científica de seus próprios artigos e projetos. Para estudantes do ensino básico e comunidade em geral, uma oportunidade de se manter livre de fake news, a favor da ciência e principalmente, informadxs com a verdade. </p>

## Tecnologias utilizadas no desenvolvimento<p>

* JavaScript
* Node.js
* MONGODB
* Postman
* Heroku

## Contratos e rotas das entidades<p>

### Entidade Autores

| Método   |  Rota        | Contrato  |
|:--------:|:-------------| ------- |
| GET | / | Lista todos os pesquisadores cadastrados |
| GET | /name | Procura pelo nome, pesquisadores já cadastrados |
| GET | /citation | Procura pelo nome de citação, pesquisadores já cadastrados |
| POST | / | Cria uma senha para cadastro no OpenScientia |
| POST | /login | Cadastra um login com email e senha para os pesquisadores|
| PUT | / | Altera informações dos autores |
| PATCH | /:id/following | Altera apenas o status de seguindo pesquisad@r |
| DELETE | /:id | Deleta o perfil d@ pesquisad@r |

### Entidade Artigos

| Método   |  Rota        | Contrato  |
|:--------:|:-------------| ------- |
| GET | / | Lista todos os artigos publicados no OpenScientia |
| POST | / | Cria um novo artigo (apenas pesquisadores podem fazê-lo) |
| GET | /title | Procura pelo título, artigos já cadastrados|
| GET | /author | Procura pelo nome do autor, artigos já cadastrados |
| GET | /keywords | Procura por palavras chaves, artigos já cadastrados |
| GET | /areas | Procura pela área de estudo, artigos já cadastrados |
| GET | /year | Procura pelo ano de publicação, artigos já cadastrados |
| PUT | / | Altera informações dos artigos |
| PATCH | /uptitle | Altera apenas o título do artigo |
| PATCH | /upauthor | Altera apenas o nome do autor do artigo |
| PATCH | /upresumen | Altera apenas o resumo do artigo |
| PATCH | /upresults | Altera apenas os resultados do artigo |
| PATCH | /upkeywords | Altera apenas as palavras chaves do artigo |
| PATCH | /upareas | Altera apenas as áreas de estudo do artigo |
| PATCH | /:id/read | Altera apenas o status de artigo lido |
| DELETE | /:id | Deleta o artigo publicado na plataforma |

## Implementações futuras

* Adição de uma nova entidade de usuários
* Desenvolvimento do front-end do projeto

## Link da API no Heroku

https://openscientia.herokuapp.com/