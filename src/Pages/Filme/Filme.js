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
    await axios.get(`movie/findUnique/${id}`).then((response) => {
      setFilme(response.data);
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.patch(`/user/addlist${id}`).then((response) => {
      console.log(id);
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
          <img src={filme.cover} alt={filme.title} />
          <div className="filme__header">
            <h3>{filme.title}</h3>
            <AiOutlinePlusCircle
              size={40}
              title="Visto"
              className="filme__header__icon"
              onSubmit={handleSubmit}
            />
          </div>
          <p className='filme__titulos__resume'>{filme.resume}</p>
          <p className='filme__titulos'>Ano lançamento: <span className='filme__titulos__'>{filme.year}</span> </p>
          <p className='filme__titulos'>Gêneros: <span className='filme__titulos__'>{filme.genres}</span></p>
          <p className='filme__titulos'>Elenco: <span className='filme__titulos__'>{filme.cast}</span></p>
        </div>
      </div>
    </div>
  );
};

export default Filme;
