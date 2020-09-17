# Boas vindas ao repositório backend do projeto de Deploy - Stranger Things!

Aqui você vai encontrar os locais para colocar suas repostas relativas aos requisitos de backend.

**Lembre-se**: coloque as respostas apenas dos requisitos que contém o seguinte direcionamento:

  - Adicione os comandos utilizados, de maneira sequencial, ao README do backend.

**Nota**: Este direcionamento está presente no [repositório](https://github.com/tryber/
sd-03-stranger-things) em que os requisitos do projeto são destrinchados.


########### COMANDOS UTILIZADOS ############
Primeiro fiz o download do PM2:
**sudo npm install pm2 -g**, instalei no projeto com o **npm install pm2**

Foi criado o Heroku App utilizando o comando:
**heroku create cardosolucas1-hawkins-back**;

Em seguida foram setadas as variáveis de ambiente, e logo após isso, foi feito o primeiro push para a Master do Heroku App
**git push heroku cardoso-stranger-things-backend:master**
onde cardoso-stranger-things-backend seria a branch local;

A partir deste ponto, para o outro endpoint do backend, foi necessário criar um novo App Heroku a partir do mesmo código:
**heroku create cardosolucas1-upside-down-back**
Este que seria para o endpoint para resultados invertidos;

Após isso, foi criado o ambiente de produção, renomeando o remote do Heroku
**heroku git:remote -a cardosolucas1-upside-down-back**

Logo depois de setar a variável de desenvolvimento que permite a diferenciação dos endpoints, é feito o push para a segunda aplicação:
**git push heroku cardosolucas1-upside-down-back:master**
