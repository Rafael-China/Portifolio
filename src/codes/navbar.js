import React from 'react';
import '../styles/navBar.css';

const NavBar = () => {
  return (
    <div className="container-fluid divNav">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#Main">
                Sobre Mim
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Projetos">
                Projetos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Contatos">
                Contatos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://drive.google.com/file/d/1SotDA8_FsHdC_5ywbLneqbR2L8cLw6rq/view?usp=drive_link" target='blank_'>
                Curriculo
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
