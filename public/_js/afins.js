fetch('http://localhost:3000/pessoas')
    .then(resposta => resposta.json())
    .then(dados => {
        //Selecionar a tabela tbody
        var tabelaCorpo = document.getElementById('tabela-corpo')


        //Para cada objeto do JSON, cria uma linha da tabela
        dados.forEach(objeto => {
            var tr = document.createElement('tr')
            var tdId = document.createElement('td')
            var tdNome = document.createElement('td')
            var tdSobrenome = document.createElement('td')
            var tdCpf = document.createElement('td')
            var tdEmail = document.createElement('td')
            var tdSenha = document.createElement('td')
            var tdCep = document.createElement('td')
            var tdEstado = document.createElement('td')
            var tdCidade = document.createElement('td')
            var tdBairro = document.createElement('td')
            var tdRua = document.createElement('td')
            var tdTelefone = document.createElement('td')


            //Preenche as celula da linha com as informações
            tdId.innerText = objeto.id
            tdNome.innerText = objeto.nome
            tdSobrenome.innerText = objeto.sobrenome
            tdCpf.innerText = objeto.cpf
            tdEmail.innerText = objeto.email
            tdSenha.innerText = objeto.senha
            tdCep.innerText = objeto.cep
            tdEstado.innerText = objeto.estado
            tdCidade.innerText = objeto.cidade
            tdBairro.innerText = objeto.bairro
            tdRua.innerText = objeto.rua 
            tdTelefone.innerText = objeto.telefone


            tr.appendChild(tdId)
            tr.appendChild(tdNome)
            tr.appendChild(tdSobrenome)
            tr.appendChild(tdCpf)
            tr.appendChild(tdEmail)
            tr.appendChild(tdSenha)
            tr.appendChild(tdCep)
            tr.appendChild(tdEstado)
            tr.appendChild(tdCidade)
            tr.appendChild(tdBairro)
            tr.appendChild(tdRua)
            tr.appendChild(tdTelefone)
            tabelaCorpo.appendChild(tr)
        })
    })

//===================================================================================================================================================

function deletarDados() {
    var id = document.getElementById('identificadorDelete').value


    fetch(`http://localhost:3000/pessoas/${id}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
}

//====================================================================================================================================================

function buscarDados() {
    let id = document.getElementById('identificadorAtualizar').value
    
    fetch('http://localhost:3000/pessoas', {
        method: 'GET'
    }) 
    .then(resposta => resposta.json())
    .then(dados => {
        let pessoaEncontrada = dados.find(pessoa => pessoa.id == id)

        if(pessoaEncontrada) {
            document.getElementById('identificadorAtualizar').value = pessoaEncontrada.id
            document.getElementById('nomeAtualizar').value = pessoaEncontrada.nome
            document.getElementById('sobrenomeAtualizar').value = pessoaEncontrada.sobrenome
            document.getElementById('cpfAtualizar').value = pessoaEncontrada.cpf
            document.getElementById('emailAtualizar').value = pessoaEncontrada.email
            document.getElementById('senhaAtualizar').value = pessoaEncontrada.senha
            document.getElementById('cepAtualizar').value = pessoaEncontrada.cep
            document.getElementById('estadoAtualizar').value = pessoaEncontrada.estado
            document.getElementById('cidadeAtualizar').value = pessoaEncontrada.cidade
            document.getElementById('bairroAtualizar').value = pessoaEncontrada.bairro
            document.getElementById('ruaAtualizar').value = pessoaEncontrada.rua
            document.getElementById('telefoneAtualizar').value = pessoaEncontrada.telefone
        } else {
            alert("Pessoa não encontrada")
        }
    })
}

function atualizarDados() {
    let id = document.getElementById('identificadorAtualizar').value
    let nome = document.getElementById('nomeAtualizar').value
    let sobrenome = document.getElementById('sobrenomeAtualizar').value
    let cpf = document.getElementById('cpfAtualizar').value
    let email = document.getElementById('emailAtualizar').value
    let senha = document.getElementById('senhaAtualizar').value
    let cep = document.getElementById('cepAtualizar').value
    let estado = document.getElementById('estadoAtualizar').value
    let cidade = document.getElementById('cidadeAtualizar').value
    let bairro = document.getElementById('bairroAtualizar').value
    let rua = document.getElementById('ruaAtualizar').value
    let telefone = document.getElementById('telefoneAtualizar').value
    

    fetch(`http://localhost:3000/pessoas/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({nome: nome, sobrenome: sobrenome, cpf: cpf, email: email, senha: senha, cep: cep, estado: estado, cidade: cidade, bairro: bairro, rua: rua, telefone: telefone})
    })
    .then(resposta => resposta.json())
}