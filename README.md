<h1 align="center">
    <br>
    <p align="center">OpenScientia Projeto Final Backend {Reprograma} <p>
</h1>

<h2 align="center">
    <br>
    <p align="center">Olá, este é o meu projeto final de Backend da Reprograma, o OpenScientia.<p>
</h2> 

![OpenScientiaLogo](./frontend/images/OPEN.jpg)
<h3 align="center">
    <br>
    <p align="center">Problemática e objetivo geral do projeto.<p>
</h3>

Surgiu da necessidade de comunicar a ciência de forma simples para pessoas que não são da área acadêmica, mas que desejam se atualizar com publicações de artigos científicos. Seu objetivo principal é democratizar o acesso a informação produzida pelas universidades públicas.

Para os pesquisadorxs trata-se de uma oportunidade de fazer a divulgação científica de seus próprios artigos e projetos. Para estudantes do ensino básico e comunidade em geral, uma oportunidade de se manter livre de fake news, a favor da ciência e principalmente, informadxs com a verdade.

<h2 align="center">
    <br>
    <p align="center">Tecnologias utilizadas no desenvolvimento<p>
</h2>

* JavaScript
* Node.js
* MONGODB
* Postman
* Heroku

<h2 align="center">
    <br>
    <p align="center">Contratos e rotas das entidades<p>
</h2>


<h3 align="center">
    <br>
    <p align="center">Entidade Autores<p>
</h3>

| Método   |  Rota        | Contrato  |
|:--------:|:-------------| ------- |
| GET | / | Lista todos os pesquisadores cadastrados |
| POST | / | Cria uma senha para cadastro no OpenScientia |
| POST | /login | Cadastra um login com email e senha para os pesquisadores|
| GET | /name | Procura pelo nome, pesquisadores já cadastrados |
| GET | /citation | Procura pelo nome de citação, pesquisadores já cadastrados |
| PUT | / | Altera informações dos autores |
| PATCH | /name | Altera apenas o nome d@ pesquisad@r |
| PATCH | /citation | Altera apenas o nome de citação d@ pesquisad@r |
| PATCH | /currentAffiliation | Altera apenas a atual filiação institucional d@ pesquisad@r |
| PATCH | /areas | Altera apenas a área de estudo d@ pesquisad@r |
| PATCH | /currentProject | Altera apenas o projeto atual d@ pesquisad@r |
| PATCH | /:id/following | Altera apenas o status de seguindo pesquisad@r |
| DELETE | /:id | Deleta o perfil d@ pesquisad@r |

<h3 align="center">
    <br>
    <p align="center">Entidade Artigos<p>
</h3>

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
| PATCH | /title | Altera apenas o título do artigo |
| PATCH | /author | Altera apenas o nome do autor do artigo |
| PATCH | /resumen | Altera apenas o resumo do artigo |
| PATCH | /results | Altera apenas os resultados do artigo |
| PATCH | /keywords | Altera apenas as palavras chaves do artigo |
| PATCH | /areas | Altera apenas as áreas de estudo do artigo |
| PATCH | /:id/read | Altera apenas o status de artigo lido |
| DELETE | /:id | Deleta o artigo publicado na plataforma |

<h2 align="center">
    <br>
    <p align="center">Implementações futuras<p>
</h2>

* Adição de uma nova entidade de usuários
* Desenvolvimento do front-end do projeto