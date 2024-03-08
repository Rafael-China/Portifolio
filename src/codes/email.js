import React from 'react';
import '../styles/contatos.css';

const email = () => {
    return (
        <div className='email'>
            <h2>Vamos Conversar?</h2>
            <form action="#" method="post">
                <label for="nome">Nome:</label>
                <input type="text" id="name" name="nome" placeholder='Digite seu nome' required />

                <label for="email">E-mail:</label>
                <input type="email" id="email" name="email" placeholder='Digite seu email' required />


                <label for="mensagem">Mensagem:</label>
                <textarea id="mensagem" name="mensagem" placeholder='Digite sua mensagem' required></textarea>

                <input type="submit" value="Enviar" />
            </form>
        </div>
    );
};

export default email;