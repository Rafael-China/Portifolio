import React from 'react';
import '../styles/contatos.css';

const email = () => {
    return (
        <div className='email'>
            <h2>Vamos Conversar?</h2>
            <form action="https://api.staticforms.xyz/submit" method="post">
                <input type="hidden" name="accessKey" value="25997593-0143-4b7d-b408-990f26fcf7aa" />

                <label for="nome">Nome:</label>
                <input type="text" id="name" name="name" placeholder='Digite seu nome' autoComplete='off' required />

                <label for="email">E-mail:</label>
                <input type="email" id="email" name="email" placeholder='Digite seu email ' autoComplete='off' required />


                <label for="mensagem">Mensagem:</label>
                <textarea id="mensagem" name="message" placeholder='Digite sua mensagem' required></textarea>
                
                <input type="hidden" name="redirectTo" value="https://rafael-nogueira.netlify.app/" />
                <input type="submit" value="Enviar" />

            </form>
        </div>
    );
};

export default email;