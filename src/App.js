import React, { useRef }  from 'react';
import ConfirmationPage from './ConfirmationPage';
import banner1Desktop from './imagens/banner1desktop.png';
import banner1Mobile from './imagens/banner1mobile.png';
import banner2Desktop from './imagens/banner2desktop.png';
import banner2Mobile from './imagens/banner2mobile.png';
import banner3Desktop from './imagens/banner3desktop.png';
import banner3Mobile from './imagens/banner3mobile.png';
import banner4Desktop from './imagens/banner4desktop.png';
import banner4Mobile from './imagens/banner4mobile.png';
import banner5Desktop from './imagens/banner5desktop.png';
import banner5Mobile from './imagens/banner5mobile.png';

const App = () => {
  const cadastroRef = useRef(null);

  const handleScrollToCadastro = () => {
    cadastroRef.current.scrollIntoView({behavior: 'smooth'});
  };

  const isMobile = window.innerWidth <= 500;

  return (
    <div>
      <div className="banner">
      <img src={isMobile ? banner1Mobile : banner1Desktop} alt='banner1'/>
      </div>

      <div className="banner">
      <img src={isMobile ? banner2Mobile : banner2Desktop} alt='banner2'/>
      </div>

      <div className="banner">
      <img src={isMobile ? banner3Mobile : banner3Desktop} alt='banner3'/>
      <div className="arrow" onClick={handleScrollToCadastro}>
        ▼ 
      </div>
      </div>

      <div className="cadastro-section" ref={cadastroRef}>
      <ConfirmationPage />
      </div>

      <div className="banner">
      <img src={isMobile ? banner4Mobile : banner4Desktop} alt='banner4'/>
      </div>

      <div className="banner">
      <img src={isMobile ? banner5Mobile : banner5Desktop} alt='banner5'/>
      </div>

      </div>
  );
};

export default App;


