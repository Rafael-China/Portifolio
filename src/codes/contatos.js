import React from 'react';
import '../styles/contatos.css';

const contatos = () => {
    return (
        <div className='main' id='Contatos'>
            <div className='divContatos'>
                <div className='email'>
                    <p>asdfasdfa</p>
                </div>
                <div className='redesSociais'>
                    <h2>Redes Sociais</h2>
                    <div className='medias'>
                        <a href="mailto:rcnfuncional@gmail.com?subject=Portofólio" target='blank'><p>rcnfuncional@gmail.com</p></a>
                        <p>(31) 99816-5044</p>
                    </div>
                    <div className='mediasClicavel'>
                        <a>Linkedin</a>
                        <a>Github</a>
                        <a>Instagram</a>
                        <a>wpp</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default contatos;