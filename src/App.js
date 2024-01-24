import React from 'react';
import './App.css';
import imagem from "./assents/img/Foto.jpeg"
import DatadeNascimento from "./codes/dataNascimento.js"
import NavBar from './codes/navbar.js';  

function App() {

  const idade = DatadeNascimento();

  return (
    <div className="App">
      <NavBar /> {/* Corrigido para o nome do componente ser NavBar */}
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
              <br /> Busco vaga de trabalho na área de
              desenvolvimento Web.
            </p>
          </div>
          <div className="divAvatar">
            <div className="avatar">
              <img src={imagem} alt="avatar" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;