const express = require("express");
const cors = require("cors");
const conectDB = require("./db/connectDB");
require('dotenv').config();
const app = express();

app.use(cors());
conectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const rotaDenuncia = require('./routes/denunciaRota')

app.use(rotaDenuncia)

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Conectado na porta ${port}`));
