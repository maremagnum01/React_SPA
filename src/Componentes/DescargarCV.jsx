import React from 'react';

const DescargarCV = () => {
  const descargarCV = () => {
    const url = '/CV_Ezequiel_Di_lallo_2025.pdf';
    
    const enlace = document.createElement('a');
    enlace.href = url;
    enlace.download = 'CV_Ezequiel_Di_lallo_2025.pdf';
    enlace.click();
  };

  return (
    <button className="btn btn-outline-danger" onClick={()=> descargarCV()}>
      <i className="icon-down-circled2"></i>Descargar mi CV
    </button>
  );
};

export default DescargarCV;
