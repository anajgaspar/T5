# Pet Lovers - Parte V 🐾
>✅ Concluído

Aplicação web desenvolvida como parte da disciplina **Técnicas de Programação I**, voltada ao gerenciamento de **pet shops** e **clínicas veterinárias**, permitindo maior organização e controle das atividades.

---

## 🔧 Tecnologias utilizadas:

### Back-end
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Fastify](https://img.shields.io/badge/fastify-%23000000.svg?style=for-the-badge&logo=fastify&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white)

### Front-end
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)

---

## 📋 Guia de Instalação:

### Pré-requisitos
- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)
- `npm` ou `yarn` instalado globalmente

### 1. Clone o Repositório:

```bash
 git clone https://github.com/anajgaspar/T5.git
  ```
### 2. Configure o back-end:

##### 1. Em um terminal, acesse a pasta do back-end e instale as dependências:

```bash
 cd backend
 npm install
```

##### 2. Crie o arquivo .env com sua string de conexão:

```bash
 DATABASE_URL="mysql://usuario:senha@localhost:3306/pet_lovers"
  ```

##### 3. Execute as migrações e gere o Prisma Client:

```bash
 npx prisma migrate dev --schema=./src/prisma/schema.prisma
```

##### 4. Inicie o servidor:

```bash
 npm run dev
```

### Configure o Front-end:

##### 1. Em outro terminal, acesse a pasta do front-end e instale as dependências:

```bash
 cd frontend
 npm install
```

##### 2. Inicie o servidor:

```bash
 npm run dev
```
