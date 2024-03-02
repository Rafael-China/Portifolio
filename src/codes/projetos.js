import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/projeto.css';

const Projetos = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const projetos = [
        {
            id: 1,
            nome: 'C++',
            descricao: 'O projeto foi elaborado com o objetivo de simular uma loja de venda de peças de computadores intitulada como GG-Hardware.',
            linkGitHub: 'https://github.com/Rafael-China/GGHARDWARE',
            imagem: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg',
        },
        {
            id: 2,
            nome: 'MySQL',
            descricao: 'O banco de dados foi elaborado com o objetivo de simular uma loja de venda de peças de veiculos intitulada como Auto Peças Rubão.',
            linkGitHub: 'https://github.com/Rafael-China/Auto-Pecas-Rubao',
            imagem: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg',
        },
        {
            id: 3,
            nome: 'Bootstrap',
            descricao: 'O site foi desenvolvido com intuito de ser meu portifólio.',
            linkGitHub: 'https://github.com/Rafael-China/Curriculo-Rafael',
            imagem: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg',
        },
        {
            id: 4,
            nome: 'React',
            descricao: 'Esse site foi desenvolvido com proposito de adiquirir ainda mais conhecimento em desenvolvimento web.',
            linkGitHub: 'https://github.com/Rafael-China/buscador-de-cep',
            imagem: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 2, // Alterado para mostrar três projetos de uma vez
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768, // Ajuste o ponto de interrupção conforme necessário
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className='projetos' id='Projetos'>
            <h2>Projetos</h2>
            <Slider {...settings}>
                {projetos.map((projeto, index) => (
                    <div
                        key={projeto.id}
                        className='projeto-item'
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <img src={projeto.imagem} />
                        <h3>{projeto.nome}</h3>
                        <h5>Descrição</h5>
                        <p>{projeto.descricao}</p>
                        <a href={projeto.linkGitHub} target='_blank' rel='noopener noreferrer'>
                            Ver no GitHub
                        </a>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Projetos;
