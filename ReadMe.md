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

## Create task example
```
{
   "title": "Frontend Part",
    "description": "Login Page.",
    "priority": "high"
    
  }
```

### User Routes
- https://task-management-server-sand.vercel.app/api/v1/user/register (POST)
- https://task-management-server-sand.vercel.app/api/v1/user/login (POST)


### Task routes
- https://task-management-server-sand.vercel.app/api/v1/tasks (GET)
- https://task-management-server-sand.vercel.app/api/v1/tasks (POST)
- https://task-management-server-sand.vercel.app/api/v1/tasks/:6547ef4f1da6d32cba7503c5 (DELETE)
- https://task-management-server-sand.vercel.app/api/v1/tasks/:6547ef4f1da6d32cba7503c5 (PATCH)