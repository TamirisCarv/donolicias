import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./indexx.css";

const Login = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [checked, setChecked] = useState(false);
  const [nomeError, setNomeError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [cpfError, setCpfError] = useState(false);

  const validarNome = (value) => {
    const nameRegex = /^.{3,}$/;
    return nameRegex.test(value);
  };

  const validarEmail = (value) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}(?:\.[A-Za-z]{2,})?$/;
    return emailRegex.test(value);
  };

  const validarCpf = (value) => {
    const  cpfRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    return cpfRegex.test(value);
  };

  const handleNomeChange = (value) => {
    setNome(value);
    setNomeError(!validarNome(value));
  };

  const handleEmailChange = (value) => {
    setEmail(value);
    setEmailError(!validarEmail(value));
  };

  const handleCpfChange = (value) => {
    setCpf(value);
    setCpfError(!validarCpf(value));
  };

  const validarFormulario = (event) => {
    event.preventDefault();

    setNomeError(!validarNome(nome));
    setEmailError(!validarEmail(email));
    setCpfError(!validarCpf(cpf));

    if (!validarNome(nome) || !validarEmail(email) || !validarCpf(cpf) || !checked) {
      alert("Preencha corretamente todos os campos obrigatórios e aceite as leis LGPD!");
    } else {
      alert("Boas vindas à Donolícias");
      window.location.href = "/cadastro";
    }
  };

  return (
    <div id="container2">
      <header className="page-header">
        <div className="header-content">
          <div class="title2">Formulário de cadastro</div>
          <div className="loginbotao">
           <Link to="/cadastro"> Já tenho login </Link> 
          </div> 
        </div>
      </header>
      <main>
        <div className="login-container">
          <div className="formulario">
            <form onSubmit={validarFormulario} id="create-class">
              <fieldset>
                <div className="input-block">
                  <label htmlFor="name">Nome:</label>
                  <input type="text" value={nome} onChange={(e) => handleNomeChange(e.target.value)} className={`name ${nomeError ? 'input-vermelho' : 'input-verde'}`} id="name" required />
                  {nomeError && <div className="warning" id="nomeWarning"><span id="nomeErro" className="erro">Nome inválido. Insira pelo menos 3 caracteres.</span></div>}
                </div>
                <div className="input-block">
                  <label htmlFor="email">E-mail:</label>
                  <input type="text" value={email} onChange={(e) => handleEmailChange(e.target.value)} className={`email ${emailError ? 'input-vermelho' : 'input-verde'}`} id="email" required />
                  {emailError && <div className="warning" id="emailWarning"><span id="emailErro" className="erro">E-mail inválido. Utilize o formato "xxxx@xxxx.xxx".</span></div>}
                </div>
                <div className="input-block">
                  <label htmlFor="cpf">Senha:</label>
                  <input type="password" value={cpf} onChange={(e) => handleCpfChange(e.target.value)} className={`cpf ${cpfError ? 'input-vermelho' : 'input-verde'}`} id="cpf" required />
                  {cpfError && <div className="warning" id="cpfWarning"><span id="cpfErro" className="erro">Senha inválida. Sua senha deve conter 8 caracteres (1 letra maiúscula, 1 caracter especial e 1 número).</span></div>}
                </div>
              </fieldset>
              <div className="footer2">
                <button type="submit">Enviar</button>
              </div>
            </form>
            <div className="terms">
              <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} id="terms" />
              <label htmlFor="terms" className="terms-label">Li e concordo com as <a href="https://www.gov.br/esporte/pt-br/acesso-a-informacao/lgpd#:~:text=A%20Lei%20Geral%20de%20Prote%C3%A7%C3%A3o%20de%20Dados%20Pessoais%20(LGPD)%20estabelece%20regras%20sobre%20coleta%2C%20armazenamento%2C%20tratamento%20e%20compartilhamento%20de%20dados%20pessoais%2C%20impondo%20mais%20prote%C3%A7%C3%A3o%20e%20mais%20direitos%20aos%20titulares.%20Sua%20entrada%20em%20vigor%20ocorreu%20em%20setembro%20de%202020%20e%20ela%20afeta%20todas%20as%20empresas%20brasileiras%20que%20coletam%20dados%20de%20clientes%2C%20independentemente%20do%20tamanho%20ou%20do%20setor%20em%20que%20atuam." className="terms-link">leis LGPD</a></label>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
