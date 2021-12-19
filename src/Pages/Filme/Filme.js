/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react/cjs/react.development';
import './Filme.scss';
import Navbar from '../../components/Navbar/Navbar';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { AiOutlineCheck } from 'react-icons/ai';

const Filme = () => {
  const [filme, setFilme] = useState({});

  const { id } = useParams();
  const getFilmeById = async () => {
    await axios.get(`plant/findUnique/${id}`).then((response) => {
      setFilme(response.data);
    });
  };

  useEffect(() => {
    setFilme(filme);
    getFilmeById();
  }, []);

  return (
    <div className="filme">
      <div className="filme__background">
        <Navbar />
        <div className="filme__card">
          <img src={filme.imageUrl} alt={filme.commonName} />
          <div className="filme__header">
            <h3>{filme.commonName}</h3>
            <AiOutlinePlusCircle
              size={40}
              title="Visto"
              className="filme__header__icon"
            />
          </div>
          <p>{filme.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Filme;
