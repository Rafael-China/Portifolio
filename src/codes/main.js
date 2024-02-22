import React from 'react';
import imagem from "../assents/img/Foto.jpeg"
import DatadeNascimento from "./dataNascimento"
import '../styles/main.css'

const Main = () => {
    const idade = DatadeNascimento();

    return (
        <div className="main" id='Main'>
            <div className="wellcome">
                <div className="divAvatar">
                    <div className="avatar">
                        <img src={imagem} alt="avatar" />
                    </div>
                </div>
                <div className="divTexto">
                    <h2>
                        Olá me chamo <span className="animate-charcter">Rafael </span>,
                        seja muito bem-vindo ao{' '}
                        <span className="animate-charcter">meu portfólio</span>
                    </h2>
                    <p>
                        Atualmente tenho {idade !== null ? `${idade} anos` : 'calculando idade'}.
                        Sou estudante de Análise e Desenvolvimento de Sistemas na
                        Universidade Newton Paiva.
                        <br /> Busco vaga de trabalho na área de <span>Desenvolvimento Web</span>.
                    </p>
                    {/* colocar tag datails e sumary para adicionar mais informações */}
                </div>
            </div>
        </div>
    );
};

export default Main;