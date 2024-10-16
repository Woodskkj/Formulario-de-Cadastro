// Seleciona o formulário de registro pelo seu ID
const form = document.getElementById('registrationForm');

// Seleciona o elemento onde as mensagens de feedback serão exibidas
const message = document.getElementById('message');

// Adiciona um listener para o evento de submissão do formulário
form.addEventListener('submit', function(event) {

    // Previne o comportamento padrão do formulário (não recarregar a página)
    event.preventDefault();

    // Obtém os valores dos campos de entrada (nome, email e senha)
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;

    // Verifica se algum dos campos está vazio
    if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
        // Se algum campo estiver vazio, exibe uma mensagem de erro
        message.textContent = 'Todos os campos são obrigatorios.';
        return; // Interrompe a execução da função
    }

    // Define um padrão de expressão regular para validar o formato do email
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // Verifica se o email não corresponde ao padrão definido
    if (!email.match(emailPattern)) {
        // Se o email não for válido, exibe uma mensagem de erro
        message.textContent = "Por favor, insira um email válido";
        return; // Interrompe a execução da função
    }

    // Verifica se a senha tem menos de 6 caracteres
    if (password.length < 6) {
        // Se a senha for muito curta, exibe uma mensagem de erro
        message.textContent = "A senha deve ter pelo menos 6 caracteres.";
        return; // Interrompe a execução da função
    }

    // Se todas as validações forem bem-sucedidas, envia o formulário
    form.submit();
});
