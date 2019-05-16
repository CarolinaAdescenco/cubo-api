const porta = 3000;
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const db = require('./dataBase')


// retorna uma função middleware para transformar em objeto - body parser
app.use(bodyParser.urlencoded({ extended: true }));

// CORS
app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
    res.header("Access-Control-Allow-Methods", "GET, POST", "PUT");
    next();
});


//Retorna todos funcionarios
app.get('/funcionarios', (req, res, next) => {
    res.send(db.getFuncionarios()) //Converter para JSON
})

// Retorna um funcionario
app.get('/funcionarios/:id', (req, res, next) => {
    res.send(db.getFuncionario(req.params.id))  
})

// insere novo funcionario
app.post('/funcionarios', (req, res, next) => {
    const funcionario = db.salvarFuncionario({
        // informações que vem do corpo da requisição
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        participacao: req.body.participacao
    })
    res.send(funcionario) //Gera um JSON

})

// Altera um funcionário
app.put('/funcionarios/:id', (req, res, next) => {
    const funcionario = db.salvarFuncionario({
        id: req.params.id,
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        participacao: req.body.participacao
    })
    res.send(funcionario)

})

// Deleta um funcionario
app.delete('/funcionarios/:id', (req, res, next) => {
    const funcionario = db.excluirFuncionario(req.params.id)
    res.send(funcionario)
})

// Definição da porta que será escutada
app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}`)
})