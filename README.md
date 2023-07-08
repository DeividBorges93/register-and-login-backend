# Registration and Login Backend System
 - Welcome to the Registration and Login backend system! This application allows users to register and login to their accounts.

  ## Features
  - User registration route
  - User login route
  - Password encryption
  - User token validation
  - Validation for existing users
  - Login with username or email

  ## User and Password requirements:
  - Username must be at least 3 characters long
  - Password must be at least 8 characters long
  - Password must contain a number
  - Password must contain a capital letter

  ## Technologies and tools:
  [![TypeScript Badge](https://img.shields.io/badge/-TypeScript-black?style=flat-square&logo=TypeScript)](https://www.typescriptlang.org/docs/)
  [![Nodejs Badge](https://img.shields.io/badge/-Nodejs-black?style=flat-square&logo=Node.js)](https://nodejs.org/en/)
  [![prisma Badge](https://img.shields.io/badge/-Prisma-black?style=flat-square&logo=prisma)](https://www.prisma.io/docs)
  [![postgreSQL Badge](https://img.shields.io/badge/-postgreSQL-black?style=flat-square&logo=postgreSQL)](https://www.postgresql.org/docs/)

  [![JsonWebToken Badge](https://img.shields.io/badge/-JsonWebToken-black?style=flat-square&logo=JsonWebToken)](https://jwt.io/)
  [![zod Badge](https://img.shields.io/badge/-zod-black?style=flat-square&logo=zod)](https://www.npmjs.com/package/zod)
  [![bcrypt Badge](https://img.shields.io/badge/-bcrypt-black?style=flat-square&logo=bcrypt)](https://www.npmjs.com/package/bcrypt)
  [![HTTPSC Badge](https://img.shields.io/badge/-HTTPSatusCode-black?style=flat-square&logo=HTTPSC)](https://www.npmjs.com/package/http-status-code)
  [![express Badge](https://img.shields.io/badge/-Express-black?style=flat-square&logo=express)](https://www.npmjs.com/package/express)
  [![express-async-errors Badge](https://img.shields.io/badge/-ExpressAsyncErrors-black?style=flat-square&logo=express-async-errors)](https://www.npmjs.com/package/express-async-errors)

# Prerequisites

Before you start, you will need to have the following tools installed on your machine: [![Git Badge](https://img.shields.io/badge/-Git-black?style=flat-square&logo=git)](https://git-scm.com) [![Nodejs Badge](https://img.shields.io/badge/-Nodejs-black?style=flat-square&logo=Node.js)](https://nodejs.org/en/)

# Getting Started

Follow these steps to get the application up and running:

- Clone the repository
~~~Java
git@github.com:DeividBorges93/register-and-login-backend.git
~~~

- Install the dependencies
~~~Java
npm install
~~~

- Rename the file .env.example to .env
~~~Java
define your JWT_SECRET and your DATABASE_URL in file .env
~~~

- Run the command to create the Database and its tables
~~~Java
npx prisma migrate dev
~~~

- Start the application
~~~Java
npm start
~~~

## With Docker

 - Loading...

## End points

- POST - User register
> http://localhost:3001/register
~~~Java
Body:

{
"username": "your.username",
"email": "myemail@emal.com"
"password": "Yourpasw0rd"
}
~~~
~~~Java
Response:

{
  "id": 1,
  "username": "your.username",
  "email": "myemail@emal.com"
}
~~~

- POST - Login - registered user only.
> http://localhost:3001/login - username at least 3 and password at least 8 characters, a number and a capital letter
~~~Java
Body:
{
"username": "your.username",
"password": "Yourpasw0rd"
}
~~~
~~~Java
Response:

"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ1c2VyNCIsImlhdCI6MTY4MTQxOTUyMywiZXhwIjoxNjgxNTA1OTIzfQ.cQUVcOyNC1eyPzEqIuWzQcZ5_IEVG2UMklwsIxdUyXk"
~~~
