//Função para enviar os dados POST - CREATE
function enviarDados() {
    //Obter os valores dos campos informados pelo usuário
    var estiloMusicalFv = document.getElementById('musica').value
    var nome = document.getElementById('nome').value
    var sobrenome = document.getElementById('sobrenome').value
    var cpf = document.getElementById('cpf').value
    var email = document.getElementById('email').value
    var senha = document.getElementById('senha').value
    var cep = document.getElementById('cep').value
    var estado = document.getElementById('estado').value
    var cidade = document.getElementById('cidade').value
    var bairro = document.getElementById('bairro').value
    var rua = document.getElementById('rua').value
    var telefone = document.getElementById('telefone').value


    
    //Enviar um função que puxa o valor de uma API - FETCH
    fetch('http://localhost:3000/pessoas', {
        method: 'POST', //Metodo POST HTTP
        headers: {
            'Content-Type': 'application/json' //Tipo de conteudo enviado JSON
        },
        body: JSON.stringify({estiloMusicalFv: estiloMusicalFv ,nome: nome, sobrenome: sobrenome, cpf: cpf, email: email, senha:senha, cep: cep, estado: estado, cidade: cidade, bairro: bairro, rua: rua, telefone: telefone}) //Dados a serem enviados e convertidos
    }).then(res => res.json())
    .then(data => {
        console.log("Cadastro enviado:", data);
        alert("Cadastro realizado com sucesso!");
        window.location.href = "/index.html"; // Redireciona após sucesso ✅
    })
    .catch(error => console.error("Erro:", error));
}

//Preencher os inputs com arrow functions
const preencherFormulario = (endereco) => {
    document.getElementById("estado").value = endereco.uf
    document.getElementById("cidade").value = endereco.localidade
    document.getElementById("bairro").value = endereco.bairro
    document.getElementById("rua").value = endereco.logradouro
}

//Autopreenchido
const CepValido = (cep) => {
    if (cep.length == 8) {
        return true;
    } else {
        return false;
    }
}

//Buscar API
const pesquisaCep = async () => {
    const cep = document.getElementById("cep").value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    if(CepValido(cep)) {
        const dados = await fetch(url);
        const endereco = await dados.json();
        preencherFormulario(endereco);
    }
}

