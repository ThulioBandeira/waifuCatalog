const express = require('express');
const rotas = require('./router/rotas');
const {Pool}= require("pg")
require("dotenv").config()

const PORT = 6969

const pool = new Pool({
    connectionString: process.env.POSTGRES_URL
})

const app = express();

app.use(express.json())
app.use(rotas)

app.listen(PORT,()=>console.log(`Server running on port ${PORT}`))