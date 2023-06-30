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

- npx sequelize-cli migration:create --name nome do arquivo

Mysql on linux (ubuntu)

- sudo apt update
- sudo apt install mysql-server
- sudo systemctl start mysql.service

- sudo mysql
- CREATE USER 'dev'@'%' IDENTIFIED BY 'navapp!@#'
- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'masterkey';
  GRANT ALL PRIVILEGES ON navapp.\* TO 'dev'@'%'
  FLUSH PRIVILEGES;
- exit

GRANT ALL PRIVILEGES ON *.* TO 'dev'@'%' IDENTIFIED BY "navapp!@#";
FLUSH PRIVILEGES;

PM2 -https://pm2.io/docs/runtime/guide/installation/

Gerar arquivo swagger auto gen
https://www.npmjs.com/package/swagger-autogen

- npm run swagger

## Nginx

https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-20-04

    server {
        listen 80;
        server_name api-navapp.space www.api-navapp.space;

        # Redirect all port 80 (HTTP) requests to port 443 (HTTPS).

        return 301 https://api-navapp.space$request_uri;
    }
    server {
        listen 443 ssl;
        server_name api-navapp.space;

        ssl_certificate     /etc/letsencrypt/live/www.api-navapp.space/fullchain.pem;
        ssl_certificate_key  /etc/letsencrypt/live/www.api-navapp.space/privkey.pem;

        # all other site settings go here (e.g. ssl, logs, site root)
    }
