import React, { useRef }  from 'react';
import ConfirmationPage from './ConfirmationPage';
import banner1 from './imagens/banner1.jpg';
import banner2 from './imagens/banner2.jpg';
import banner3 from './imagens/banner3.jpg';
import banner4 from './imagens/banner4.jpg';
import banner5 from './imagens/banner5.jpg';


const App = () => {
  const cadastroRef = useRef(null);

  const handleScrollToCadastro = () => {
    cadastroRef.current.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <div>
      <div className="banner">
      <img src={banner1} alt='banner1'/>
      </div>

      <div className="banner">
      <img src={banner2} alt='banner2'/>
      </div>

      <div className="banner">
      <img src={banner3} alt='banner3'/>
      <div className="arrow" onClick={handleScrollToCadastro}>
        🠗
      </div>
      </div>

      <div className="cadastro-section" ref={cadastroRef}>
      <ConfirmationPage />
      </div>

      <div className="banner">
      <img src={banner4} alt='banner4'/>
      </div>

      <div className="banner">
      <img src={banner5} alt='banner5'/>
      </div>

      </div>
  );
};

export default App;


