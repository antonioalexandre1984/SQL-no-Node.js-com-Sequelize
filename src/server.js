const express = require('express');
const routes = require('../src/routes/routes');
const app = express();
require('./database');


app.use(express.json());
app.use(routes);



app.listen(3000,()=> console.log("Server is running on port 3000"));
