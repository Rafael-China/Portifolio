import React, { useState } from 'react';

function DetalhesAba({ titulo, children }) {
  const [mostrarDetalhes, setMostrarDetalhes] = useState(false);

  return (
    <div>
      <div onClick={() => setMostrarDetalhes(!mostrarDetalhes)} style={{ cursor: 'pointer', marginBottom: '5px' }}>
        <strong>{titulo}</strong>
      </div>
      {mostrarDetalhes && (
        <div style={{ marginLeft: '20px' }}>
          {children}
        </div>
      )}
    </div>
  );
}

export default DetalhesAba;