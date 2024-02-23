import React from 'react';
import '../styles/contatos.css';
import { SiGithub, SiLinkedin, SiWhatsapp } from "react-icons/si";
import WidgetComponent from './windget.js';

const contatos = () => {
    return (
        <div className='main' id='Contatos'>
            <WidgetComponent />
            <div className='divContatos'>
                <div className='email'>
                    <h2>Vamos Conversar?</h2>
                    <form action="#" method="post">
                        <label for="email">E-mail:</label>
                        <input type="email" id="email" name="email" required />

                        <label for="assunto">Assunto:</label>
                        <input type="text" id="assunto" name="assunto" required />

                        <label for="mensagem">Mensagem:</label>
                        <textarea id="mensagem" name="mensagem" required></textarea>

                        <input type="submit" value="Enviar" />
                      </form>
                </div>
                <div className='redesSociais'>
                    <h2>Redes Sociais</h2>
                    <div className='medias'>
                        <a href="mailto:rcnfuncional@gmail.com?subject=Portofólio" target='blank'><p>rcnfuncional@gmail.com</p></a>
                        <a href='tel:+5531998165044'><p>(31) 99816-5044</p></a>
                    </div>
                    <div className='mediasClicavel'>
                        <a href='https://www.linkedin.com/in/rafael-nogueira-49382b221/' target='blank_'><span><SiLinkedin /></span></a>
                        <a href='https://github.com/Rafael-China' target='blank_'><span><SiGithub /></span></a>
                        {/* <a>Instagram</a> */}
                        <a href='#'><span><SiWhatsapp /></span></a>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default contatos;