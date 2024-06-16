let users = []
let contact = []

function cadastro(){
    let user = document.getElementById("cadastro-username").value
    let senha = document.getElementById("cadastro-password").value
    if (user && senha) {
        users.push({nome: user, password: senha})
       alert("Cadastro realizado")
       document.getElementById("cadastro-username").value = ""
       document.getElementById("cadastro-password").value = ""
    } else {
       alert("Por favor, preencha todos os campos")
    }
}

function login() {
    let user = document.getElementById("login-username").value
    let senha = document.getElementById("login-password").value
    let foundUser = users.find(u => u.nome === user && u.password === senha)
    if (foundUser) {
        alert("Login bem-sucedido!")
        document.getElementById("login-username").value = ""
        document.getElementById("login-password").value = ""
    } else {
        alert("Usuário ou senha incorretos")
    }
}

function submitContact() {
    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value
    let msg = document.getElementById("msg").value

    if (nome && email && msg){
        contact.push({nome: nome, email: email, mensagem: msg})
        alert("Enviado com sucesso")
        document.getElementById("nome").value = ""
        document.getElementById("email").value = ""
        document.getElementById("msg").value = ""
    } else {
        alert("Preencha todos os campos")
    }

    alert("Enviado com sucesso!")
}