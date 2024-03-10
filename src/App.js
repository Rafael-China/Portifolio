import React from 'react';
import './styles/App.css';
import NavBar from './codes/navbar.js';
import Projetos from './codes/projetos.js';
import Main from './codes/main.js';
import Contatos from './codes/contatos.js';
import Footer from './codes/footer.js';
// import WidgetComponent from './codes/windget.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
      <Projetos />
      <Contatos />
      {/* <WidgetComponent /> */}
      <Footer />
    </div>
  );
}

export default App;