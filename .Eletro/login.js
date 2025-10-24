document.addEventListener("DOMContentLoaded", () => {
    // Elementos do formulário
    const loginForm = document.getElementById("loginForm");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    // Função para validar campos
    const validarCampos = () => {
        const usuario = usernameInput.value.trim();
        const senha = passwordInput.value.trim();

        if (!usuario) {
            alert("Por favor, insira um nome de usuário!");
            usernameInput.focus();
            return false;
        }

        if (!senha) {
            alert("Por favor, insira uma senha!");
            passwordInput.focus();
            return false;
        }

        return true;
    };

    // Função para simular autenticação
    const autenticar = (usuario, senha) => {
        // Aqui você pode adicionar sua lógica de autenticação real
        try {
            // Armazenar informações do usuário
            localStorage.setItem("usuarioLogado", usuario);
            localStorage.setItem("logado", "true");
            return true;
        } catch (erro) {
            console.error("Erro ao autenticar:", erro);
            return false;
        }
    };

    // Evento de submit do formulário
    loginForm.addEventListener("submit", (evento) => {
        evento.preventDefault();

        if (validarCampos()) {
            const usuario = usernameInput.value.trim();
            const senha = passwordInput.value.trim();

            if (autenticar(usuario, senha)) {
                window.location.href = "../index.html";
            } else {
                alert("Erro ao fazer login. Tente novamente.");
            }
        }
    });

    // Limpar campos ao carregar a página
    usernameInput.value = "";
    passwordInput.value = "";
});