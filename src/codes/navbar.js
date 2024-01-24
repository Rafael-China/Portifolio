import React from 'react';

const NavBar = () => {
  return (
    <div className="container-fluid divNav">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Sobre Mim
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Projetos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contatos
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;