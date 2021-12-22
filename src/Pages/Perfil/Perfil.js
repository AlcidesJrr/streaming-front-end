import './Perfil.scss';
import Navbar from '../../components/Navbar/Navbar';
import React, { useState, useEffect } from 'react/cjs/react.development';
import axios from 'axios';

const Perfil = () => {
  const [list, setList] = useState({});


  const getProfile = async () => {
    await axios.get(`auth/profile`).then((response) => {
      const token = response.data.token;
      localStorage.setItem('token', token);

      setList(response.data);
    });
  };

  useEffect(() => {
    setList(list);
    getProfile();
  }, []);

  return (
    <div
      className="perfil
    "
    >
      <div
        className="perfil__background">
        <Navbar />
        <div
          className="perfil__card">
        <p
          className="perfil__titulos__img">
          {list.imageUrl}
        </p>
        <p
          className="perfil__titulos">
          Nome:{' '}
          <span
            className="perfil__titulos">
            {list.name}
          </span>{' '}
        </p>
        <p
          className="perfil__titulos"
        >
          Email:{' '}
          <span
            className="perfil__titulos">
            {list.email}
          </span>
        </p>
        <p
          className="perfil__titulos">
          Nascimento:{' '}
          <span
            className="perfil__titulos__">
            {list.birthdate}
          </span>
        </p>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
