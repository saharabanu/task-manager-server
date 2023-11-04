### Server Api : https://task-management-server-sand.vercel.app/


I have created this server using Node.js, MongoDB, Express and JavaScript.

### start server

git clone

```
npm i
```

- setup .env variables name in config file

```
npm start
```
- Local Server
    - http://localhost:5000

## API Routes

### User Routes
- https://task-management-server-sand.vercel.app/api/v1/signup (POST)
- https://task-management-server-sand.vercel.app/api/v1/login (POST)
- https://task-management-server-sand.vercel.app/api/v1/user (GET)

### Task routes
- https://task-management-server-sand.vercel.app/api/v1/tasks (GET)
- https://task-management-server-sand.vercel.app/api/v1/tasks (POST)
- https://task-management-server-sand.vercel.app/api/v1/tasks/:id (DELETE)
- https://task-management-server-sand.vercel.app/api/v1/tasks/:id (PATCH)