<h1 align="center">
    <br>
    <p align="center">OpenScientia Projeto Final Backend {Reprograma} <p>
</h1>

<h2 align="center">
    <br>
    <p align="center">Olá, este é o meu projeto final de Backend da Reprograma, o OpenScientia.<p>
</h2> 

![OpenScientiaProblemática](./frontend/images/OPENcutted.jpg)

## Democratização do acesso a informação de qualidade e produção científica das Universidades brasileiras.

### Problemática e objetivo geral do projeto.

Você provavelmente já escutou, ou leu, uma dessas frases durante a sua vida:
* A Terra é plana!
* Aquecimento Global não existe!
* A NASA é uma farsa...
* Mandaram aqui no grupo do zap!!

E durante a pandemia do Covid-19 então...
* É uma gripezinha!
* Estamos no finalzinho da pandemia.
* Essa vacina é água!

Essas frases são consequencias da disseminação de fake news para a população em geral. A ciência, em sua essência, nos dá respostas para diversos questonamentos do universo, se baseando em estudos metodológicos, estudos á realizados anteriormente e claro, muita experimentação!

Porém, a ciência tem perdido a sua credibilidade e espaço pois a linguagem utilizada não é democrática. Os artigos científicos que são publicados possuem uma tipologia técnica, na qual restringe a leitura da comunidade em geral.

Pensando nisso, o OpenScientia é projeto de Divulgação Científica que busca disponibilizar artigos cientificos numa linguagem mais acessível e mais dinâmica, democratizando o acesso a informação de qualidade.

## Tecnologias utilizadas no desenvolvimento

* JavaScript
* Node.js
* MONGODB
* Postman
* Heroku

## Contratos e rotas das entidades
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
* Adição de novas rotas nas entidades de artigos e autores
* Desenvolvimento do front-end do projeto

## Link da API no Heroku

https://openscientia.herokuapp.com/

## Agradecimentos

Agradeço a Reprograma pela oportunidade, professoras, monitoras e a minhas colegas de turma!