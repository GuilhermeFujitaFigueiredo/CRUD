//Função que é chamada quando o botão de login é clicado
function fazerLogin() {
    //Obter os valores dos inputs
    var usuario = document.getElementById('usuario').value
    var senha = document.getElementById('senha').value

    //Fazer um requisição GET - READ e busca a pessoa
    fetch('http://localhost:3000/pessoas').then(resposta => resposta.json())
    .then(data => {
        //Busca a pessoa cujo e senha estejam com o valores digitados
        //Esse seria um parametro do FIND
        var pessoa = data.find(pessoas => pessoas.email === usuario && pessoas.senha === senha)
        //Se existir tal pessoa, redirecionar para a página de bem'vindo.html
        if(pessoa) {
            window.location.href = "/public/_html/home.html"
            //Caso contrário exibir um alerta com erro de usuário ou senha
        } else {
            alert("Usuário/Senha incorretos! Tente novamente!")
        }
    })
}