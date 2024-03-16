import React, { useState } from "react";
import { Link } from "react-router-dom";
import foto from './login_image.png';
import googleIcon from './google-icon.svg'; 

const Cadastro = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [senhaError, setSenhaError] = useState(false);

  const validarEmail = (value) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}(?:\.[A-Za-z]{2,})?$/;
    return emailRegex.test(value);
  };

  const validarSenha = (value) => {
    const senhaRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    return senhaRegex.test(value);
  };

  const handleEmailChange = (value) => {
    setEmail(value);
    setEmailError(!validarEmail(value));
  };

  const handleSenhaChange = (value) => {
    setSenha(value);
    setSenhaError(!validarSenha(value));
  };

  const validarFormulario = (event) => {
    event.preventDefault();

    if (!validarEmail(email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (!validarSenha(senha)) {
      setSenhaError(true);
    } else {
      setSenhaError(false);
    }

    if (!validarEmail(email) || !validarSenha(senha)) {
      alert("Preencha corretamente o e-mail e a senha!");
    } else {
      
      window.location.href = "/dashboard";
    }
  };

  return (
    <div id="container2">
      <header className="page-header">
        <div className="header-content">
          <div className="title">Login</div>
        </div>
      </header>
      <main>
        <div className="login-container">
          <div className="formulario">
            <form onSubmit={validarFormulario} id="create-class">
              <fieldset>
                <div className="input-block">
                  <label htmlFor="email">E-mail:</label>
                  <input type="text" value={email} onChange={(e) => handleEmailChange(e.target.value)} className={`email ${emailError ? 'input-vermelho' : 'input-verde'}`} id="email" required />
                  {emailError && <div className="warning" id="emailWarning"><span id="emailErro" className="erro">E-mail inválido. Utilize o formato "xxxx@xxxx.xxx".</span></div>}
                </div>
                <div className="input-block">
                  <label htmlFor="senha">Senha:</label>
                  <input type="password" value={senha} onChange={(e) => handleSenhaChange(e.target.value)} className={`senha ${senhaError ? 'input-vermelho' : 'input-verde'}`} id="senha" required />
                  {senhaError && <div className="warning" id="senhaWarning"><span id="senhaErro" className="erro">Senha inválida. Deve conter pelo menos 8 caracteres, 1 dígito, 1 letra minúscula, 1 letra maiúscula e 1 caractere especial.</span></div>}
                </div>
              </fieldset>
              <div className="footer2">
                <button type="submit">Logar</button>
              </div>
            </form>
            <div className="terms">
              <label htmlFor="terms" className="terms-label">Não tem cadastro? <Link to="/dashboard">Cadastrar</Link></label>
            </div>
            <button className="google-login" onClick={() => alert("Logar com o Google")}>
              <span>Logar com o Google</span>
              <img src={googleIcon} alt="Google Icon" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cadastro;
