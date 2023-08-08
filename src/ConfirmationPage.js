import React, { useState } from 'react';
import './ConfirmationPage.css'

const ConfirmationPage = ({ initialData }) => {
  const [formData, setFormData] = useState(initialData || {
    nome: '',
    nomeEmpresa: '',
    telefone: '',
    email: '',
    documento: '',
    autorização: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
    localStorage.setItem('cadastroData', JSON.stringify(formData));
    setShowSuccessMessage(true); 
  };

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  return (
    <div className="container">
    
      <h1>Faça seu cadastro aqui:</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Nome da Empresa:
          <input
            type="text"
            name="nomeEmpresa"
            value={formData.nomeEmpresa}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Telefone:
          <input
            type="tel"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          E-mail:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          CPF/CNPJ:
          <input
            type="text"
            name="documento"
            value={formData.documento}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          *Autorizo o recebimento de notificações no WhatsApp, SMS e e-mails sobre promoções e novidades do Mega Atacado:
          <input
            type="checkbox"
            name="autorização"
            checked={formData.autorização}
            onChange={handleChange}
          />
        </label>

        <button type="submit" className="btn">Confirmar Cadastro</button>
      </form>
      {showSuccessMessage && (
        <div className="success-message">
          Cadastro realizado com sucesso!
          <button onClick={() => setShowSuccessMessage(false)}>Fechar</button>
        </div>
      )}
    </div>
  );
};

export default ConfirmationPage;



