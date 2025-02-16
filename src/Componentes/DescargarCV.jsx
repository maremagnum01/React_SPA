import React from 'react';

const DescargarCV = () => {
  const descargarCV = () => {
    const url = '../Descargas/Ezequiel_Di_lallo.pdf';
    
    const enlace = document.createElement('a');
    enlace.href = url;
    enlace.download = 'Ezequiel_Di_lallo.pdf';
    enlace.click();
  };

  return (
    <button className="btn btn-outline-danger" onClick={()=> descargarCV()}>
      <i className="icon-down-circled2"></i>Descargar mi CV
    </button>
  );
};

export default DescargarCV;
