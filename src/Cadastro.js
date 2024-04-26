import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cadastro = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [senhaError, setSenhaError] = useState(false);

  useEffect(() => {
   
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

  }, [history, location.search])

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
                <button type="submit" className="button-login">Logar</button>
              </div>
            </form>
            <div className="terms">
              <label htmlFor="terms" className="terms-label">Não tem cadastro? <Link to="/login">Cadastrar</Link></label>
            </div>
            <div id="g_id_onload"
              data-client_id="827530296413-3uqvmhgvkjt76cmmo9vn2m5k17imdcch.apps.googleusercontent.com"
              data-context="signin"
              data-ux_mode="redirect"
              data-login_uri="https://donolicias.onrender.com"
              data-auto_prompt="false">
            </div>

            <div class="g_id_signin"
              data-type="standard"
              data-shape="rectangular"
              data-theme="outline"
              data-text="signin_with"
              data-size="large"
              data-logo_alignment="left">
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cadastro;
