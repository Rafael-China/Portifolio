import React, { useState, useEffect } from 'react';

const DatadeNascimento = () => {
  const calcularIdade = (dataNascimento) => {
    const hoje = new Date();

    const diferencaAnos = hoje.getFullYear() - dataNascimento.getFullYear();

    if (
      hoje.getMonth() < dataNascimento.getMonth() ||
      (hoje.getMonth() === dataNascimento.getMonth() &&
        hoje.getDate() < dataNascimento.getDate())
    ) {
      return diferencaAnos - 1;
    } else {
      return diferencaAnos;
    }
  };

  const [idade, setIdade] = useState(null);

  useEffect(() => {
    // Data de nascimento: 24/09/2003
    const dataNascimento = new Date(2003, 8, 24);
    const idadeCalculada = calcularIdade(dataNascimento);
    setIdade(idadeCalculada);
  }, []);

  return idade;
};

export default DatadeNascimento;
