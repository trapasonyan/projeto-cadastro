import { initializeApp } from "firebase/app";
import { collection, getFirestore, getDocs, addDoc} from "firebase/firestore";
import React, { useState, useEffect }  from 'react';
import './ConfirmationPage.css'

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBDQquVs0sC_fxyxtBWvKFNSkmYg-YmqZ4",
  authDomain: "cadastrofeira-ad2cf.firebaseapp.com",
  projectId: "cadastrofeira-ad2cf"
});

const ConfirmationPage = () => {
  const [formData, setFormData] = useState({
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
    const docRef = await addDoc(userCollectionRef, formData);
    console.log("Documento adicionado com ID: ", docRef.id);
    setShowSuccessMessage(true);
    setFormData({
      nome: '',
      nomeEmpresa: '',
      telefone: '',
      email: '',
      documento: '',
      autorização: false,
    });
  } catch (error) {
    console.error("Erro ao adicionar documento: ", error);
  }
  };

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const db = getFirestore(firebaseApp);
  const userCollectionRef = collection(db, "clientes");

  useEffect(() => {
    const getUsers = async () => {
      const data =  await getDocs(userCollectionRef);
      console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
    getUsers();
  }, [userCollectionRef]);

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



