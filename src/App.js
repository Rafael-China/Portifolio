import React, { useState, useEffect } from 'react';
import './App.css';

const calcularIdade = (dataNascimento) => {
  const hoje = new Date();

  const diferencaAnos = hoje.getFullYear() - dataNascimento.getFullYear();

  if (
    hoje.getMonth() < dataNascimento.getMonth() ||
    (hoje.getMonth() === dataNascimento.getMonth() &&
      hoje.getDate() < dataNascimento.getDate())
  ) {
    return diferencaAnos - 1;
  } else {
    return diferencaAnos;
  }
};

function App() {
  const [idade, setIdade] = useState(null);

  useEffect(() => {
    // Data de nascimento: 24/09/2003
    const dataNascimento = new Date(2003, 8, 24);
    const idadeCalculada = calcularIdade(dataNascimento);
    setIdade(idadeCalculada);
  }, []);

  return (
    <div className="App">
      <div className="container-fluid divNav">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="container-fluid main">
        <div className="wellcome">
          <div className="cotainer divTexto">
            <h2>
              Olá me chamo <span className="animate-charcter">Rafael </span>,
              seja muito bem-vindo ao{' '}
              <span className="animate-charcter">meu portfólio</span>
            </h2>
            <p>
              Atualmente tenho {idade !== null ? `${idade} anos` : 'calculando idade'}.
              Sou estudante de Análise e Desenvolvimento de Sistemas na
              Universidade Newton Paiva.
              <br /> Busco minha primeira vaga de trabalho na área de
              desenvolvimento Web.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;