const express = require('express');
const app = express();
const PORT = 3001;
const HOSTNAME = 'localhost';
const homeRouter = require('./route/home');

homeRouter(app);

app.listen(PORT, HOSTNAME, () => {
    console.log(`Server doit m'écouter`);
})
