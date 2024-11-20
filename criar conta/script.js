document.getElementById('form-criar-conta').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio do formulário para não recarregar a página

    // Coletando os dados do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const cpf = document.getElementById('cpf').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmar-senha').value;

    // Verificando se as senhas coincidem
    if (senha !== confirmarSenha) {
        document.getElementById('mensagem-erro').innerText = 'As senhas não coincidem!';
        return;
    }

    // Criando um objeto com os dados do usuário
    const usuario = {
        nome: nome,
        email: email,
        cpf: cpf,
        senha: senha
    };

    // Salvando os dados no LocalStorage
    localStorage.setItem('usuario', JSON.stringify(usuario));

    // Redirecionando para a página de criação de perfil
    window.location.href = 'file:///C:/Users/winin/OneDrive/%C3%81rea%20de%20Trabalho/site%20da%20manda/perfil/perfil.html';
});
