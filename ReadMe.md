### Server Api : https://task-management-server-sand.vercel.app/


I have created this server using Node.js, MongoDB, Express and JavaScript.I have also using JsonWebtoken, bcrypt for token and hashing password.

### start server

git clone
```
cd task-management-server
```
For Installation
```
npm i
```

- setup .env variables name in .env.config file

```
npm start
```
- Local Server
    - http://localhost:5000

## API Routes

### User Routes
- https://task-management-server-sand.vercel.app/api/v1/user/register (POST)
- https://task-management-server-sand.vercel.app/api/v1/user/login (POST)


### Task routes
- https://task-management-server-sand.vercel.app/api/v1/tasks (GET)
- https://task-management-server-sand.vercel.app/api/v1/tasks (POST)
- https://task-management-server-sand.vercel.app/api/v1/tasks/:id (DELETE)
- https://task-management-server-sand.vercel.app/api/v1/tasks/:id (PATCH)