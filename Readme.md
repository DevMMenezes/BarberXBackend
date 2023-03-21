https://www.npmjs.com/package/sequelize-cli

Comandos
- npx sequelize-cli

Criar DB
- npx sequelize-cli db:create

Roda todas as migrates pendentes
- npx sequelize-cli db:migrate
Reverte as ultimas migrates executadas
- npx sequelize-cli db:migrate:undo

Criar uma Tabela
- npx sequelize-cli migration:create "nome do arquivo"




Mysql on linux (ubuntu)
- sudo apt update
- sudo apt install mysql-server
- sudo systemctl start mysql.service

- sudo mysql
- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'masterkey';
- exit


Gerar arquivo swagger auto gen
https://www.npmjs.com/package/swagger-autogen
- npm run swagger-autogen