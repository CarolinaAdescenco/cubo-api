const sequence = {
    _id: 1,
    get id(){ return this._id++ }
}

const funcionarios = {}

function salvarFuncionario(funcionario){
    if(!funcionario.id) funcionario.id = sequence.id
    // Chave recebe valor de produtos
    funcionarios[funcionario.id] = funcionario
    return funcionario
}

// Retorna um funcionário
function getFuncionario(id){
    return funcionarios[id] || {}
}

//Retorna todos os funcionários
function getFuncionarios(){
    return Object.values(funcionarios)
}

function excluirFuncionario(id){
    const funcionario = funcionarios[id]
    delete funcionarios[id]
    return funcionario
}

module.exports = { salvarFuncionario, getFuncionario, getFuncionarios, excluirFuncionario }