import React from 'react';
import '../styles/contatos.css';
import { SiGithub, SiLinkedin, SiWhatsapp } from "react-icons/si";

const contatos = () => {
    return (
        <div className='main' id='Contatos'>
            <div className='divContatos'>
                <div className='email'>
                    <p>Area "email"</p>
                </div>
                <div className='redesSociais'>
                    <h2>Redes Sociais</h2>
                    <div className='medias'>
                        <a href="mailto:rcnfuncional@gmail.com?subject=Portofólio" target='blank'><p>rcnfuncional@gmail.com</p></a>
                        <a href='tel:+5531998165044'><p>(31) 99816-5044</p></a>
                    </div>
                    <div className='mediasClicavel'>
                        <a href='https://www.linkedin.com/in/rafael-nogueira-49382b221/' target='blank_'><span><SiLinkedin /></span></a>
                        <a href='#'><span><SiGithub /></span></a>
                        {/* <a>Instagram</a> */}
                        <a href='#'><span><SiWhatsapp /></span></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default contatos;