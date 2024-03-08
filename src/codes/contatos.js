import React from 'react';
import '../styles/contatos.css';
import { SiGithub, SiLinkedin, SiWhatsapp } from "react-icons/si";
import Email from '../codes/email'

const contatos = () => {
    return (
        <div className='divContatos' id='Contatos'>
            <Email/>
            <div className='redesSociais'>
                <h2>Redes Sociais</h2>
                <div className='medias'>
                    <a href="mailto:rcnfuncional@gmail.com?subject=Portofólio" target='blank'><p>rcnfuncional@gmail.com</p></a>
                    <a href='tel:+5531998165044' target='blank_'><p>(31) 99816-5044</p></a>
                </div>
                <div className='mediasClicavel'>
                    <a href='https://www.linkedin.com/in/rafael-nogueira-49382b221/' target='blank_'><span><SiLinkedin /></span></a>
                    <a href='https://github.com/Rafael-China' target='blank_'><span><SiGithub /></span></a>
                    <a href="https://api.whatsapp.com/send?phone=5531998165044&text=Olá%20gostei%20de%20seu%20portifólio!" target="_blank"><span><SiWhatsapp /></span></a>
                </div>
            </div>
        </div>
    );
};

export default contatos;