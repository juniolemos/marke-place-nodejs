const express = require("express");
const connectToDatabase = require("./src/database/database")

const app = express();

const port = 3000

app.use(express.json());

connectToDatabase();

app.get("/", (req,res) => {
    res.send({
        message: "Bem vindo ao nosso marketplace"
    });
})

app.listen(port, ()=>{
    console.log(`Servidor rodado em: http://localhost:${port}`);
})