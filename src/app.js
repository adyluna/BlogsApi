const express = require('express');
const router = require('./routers');

// ...

const app = express();

app.use(express.json());

// ...

app.use('/login', router.loginRoute);
app.use('/user', router.userRoute);
app.use('/categories', router.categoryRoute);
app.use('/post', router.postRoute);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
