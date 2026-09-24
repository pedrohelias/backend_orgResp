# Instalação, uso e criação do projeto.

## Construção da estrutura

### 1 - Construção do package.json

    npm init -y

### 2 - Criação do src com todo projeto dentro, em adição do server.js para centralizar o código

### 3 - Instalação do Express

    npm install express

### 4 - Instalação do Nodemon

    npm install nodemon --save-dev

### 5 - Adição do Nodemon para executar os códigos em modo dev
    "dev": "nodemon src/server.js"
    npm run dev

### 5.5 - trocar o type de commonjs para module

### 6 - Adição das rotas (uma camada de rota para cada parte da api)

    npm install @prisma/orm-postgres
    npm install -D prisma@latest
    npx prisma orm init --yes --target postgres --authoring psl (caso o projeto já exista)

O Prisma 8 gera contract.prisma, os arquivos derivados do contrato e um db.ts para criar o cliente

O novo fluxo: 

contract.prisma
       ↓
contract emit
       ↓
contract.json
       ↓
migration plan
       ↓
db migrate
       ↓
PostgreSQL

    npx prisma db verify  (para verificar se há uma conexão)

    npx prisma contract emit (vai emitir o contrato, vai gerar um arquivo .json e ouutro .d.ts, que o runtime do prisma 8 utiliza)  


### 7 - Toda vez que alterar a estrutura do banco de dados: 

    npx prisma db update
    npx prisma db sign
    npx prisma generate (se necessário)

### 7.5 Se for projeto de equipe 

    # 1. Aplica as mudanças no seu banco remoto
    npx prisma db update

    # 2. Atualiza os tipos do autocomplete no projeto
    npx prisma generate