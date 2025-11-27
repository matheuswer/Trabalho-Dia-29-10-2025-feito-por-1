document.addEventListener("DOMContentLoaded", () => {
    
    const loginForm = document.getElementById("loginForm");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    
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

    
    const autenticar = (usuario, senha) => {
        
        try {
            
            localStorage.setItem("usuarioLogado", usuario);
            localStorage.setItem("logado", "true");
            return true;
        } catch (erro) {
            console.error("Erro ao autenticar:", erro);
            return false;
        }
    };

    
    loginForm.addEventListener("submit", (evento) => {
        evento.preventDefault();

        if (validarCampos()) {
            const usuario = usernameInput.value.trim();
            const senha = passwordInput.value.trim();

            if (autenticar(usuario, senha)) {
                
                window.location.href = "principal.html";
            } else {
                alert("Erro ao fazer login. Tente novamente.");
            }
        }
    });

    
    usernameInput.value = "";
    passwordInput.value = "";
});