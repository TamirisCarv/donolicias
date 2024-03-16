import React, { useState } from "react";
import "./indexx.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validarEmail = () => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}(?:\.[A-Za-z]{2,})?$/;
    return emailRegex.test(email);
  };

  const validarSenha = () => {
    return password.length >= 6;
  };

  const handleLogin = (event) => {
    event.preventDefault();

    if (!validarEmail() || !validarSenha()) {
      alert("Preencha corretamente o e-mail e a senha!");
    } else {
      // Lógica para fazer login
      alert("Login realizado com sucesso!");
    }
  };

  const handleCadastro = () => {
    // Lógica para redirecionar para a página de cadastro
    alert("Redirecionando para a página de cadastro...");
  };

  return (
    <div id="container2">
      <header className="page-header">
        <div className="header-content">
          <div class="title">Login</div>
        </div>
      </header>
      <main>
        <div className="login-container">
          <div className="formulario">
            <form onSubmit={handleLogin}>
              <div className="input-block">
                <label htmlFor="email">E-mail:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={`email ${!validarEmail() ? 'input-vermelho' : 'input-verde'}`} id="email" required />
                {!validarEmail() && <div className="warning" id="emailWarning"><span id="emailErro" className="erro">E-mail inválido. Utilize o formato "xxxx@xxxx.xxx".</span></div>}
              </div>
              <div className="input-block">
                <label htmlFor="password">Senha:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className={`password ${!validarSenha() ? 'input-vermelho' : 'input-verde'}`} id="password" required />
                {!validarSenha() && <div className="warning" id="senhaWarning"><span id="senhaErro" className="erro">A senha deve conter no mínimo 6 caracteres.</span></div>}
              </div>
              <div className="footer2">
                <button type="submit">Login</button>
              </div>
            </form>
            <div className="footer2">
              <button onClick={handleCadastro}>Cadastrar</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginForm;
