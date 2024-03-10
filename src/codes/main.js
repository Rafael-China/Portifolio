import React from 'react';
import imagem from "../assents/img/Foto.jpeg"
import DatadeNascimento from "./dataNascimento"
import '../styles/main.css'
import DetalhesAba from '../codes/details'

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
                        <span className="animate-charcter">meu portfólio!</span>
                    </h2>
                    <p>
                        Atualmente, tenho {idade !== null ? `${idade} anos` : 'calculando idade'} e
                        sou apaixonado por tecnologia em todas as suas formas. Desde a montagem
                        e manutenção de computadores até explorar hacks e criar infraestrutura, mergulho de cabeça em todos os
                        aspectos desse universo. Além disso, tenho uma paixão pela programação, encontrando grande satisfação em
                        resolver problemas e criar soluções inovadoras. <br />
                        Fora do mundo da tecnologia, encontro prazer na música e na arte de tocar bateria durante meu tempo livre.
                        Também tenho um interesse pela culinária, mesmo que minhas habilidades nessa área ainda estejam em desenvolvimento.
                        E para exercitar minha mente de uma forma divertida, não há nada como montar quebra-cabeças desafiadores. Claro,
                        também adoro passar tempo jogando jogos online, explorando novos mundos virtuais e desafiando amigos em partidas
                        emocionantes.
                    </p>
                    <div>
                        <DetalhesAba titulo="-> Competências / Conhecimentos <-">
                            <p>Competência em HTML, CSS, JavaScript, React, MySQL, Responsividade, Git.<br /> </p>
                            <p>Conhecimento em UI/UX, Metodologias ágeis.</p>
                        </DetalhesAba>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Main;