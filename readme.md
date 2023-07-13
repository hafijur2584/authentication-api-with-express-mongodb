<!-- Project run process:

-> First need to create a .env file copy from .env.example file & rename it to .env then fill up with credential.
-> Need to install node js dependency by command "npm install".
-> For start service run command "npm start" -->


## Installation

```js
$ git clone https://github.com/hafijur2584/authentication-api-with-express-mongodb
$ cd authentication-api-with-express-mongodb
$ npm install
```

After installing the required packages

- Browse to .env file and setup your mongo link, Secret and token
  expiration duration

```js
PORT=4000
DB_URL="Your database name here"
APP_URL="/api"
SECRET="authentication-secret"
JWT_TIME=360000000
```

> Authentication:
>
> > http://localhost:4000/api/users/register
> > http://localhost:3000/api/users/login

> > http://localhost:3000/api/users/me
> > http://localhost:3000/api/users/logout


Thanks