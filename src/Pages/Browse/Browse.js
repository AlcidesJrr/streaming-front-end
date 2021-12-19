import { useState, useEffect } from 'react';
import './Browse.scss';
import Navbar from '../../components/Navbar/Navbar';
import Frame from '../../components/Frame/Frame';
import Card from '../../components/Card/Card';
import axios from 'axios';

const Browse = () => {
  const [filmes, setFilmes] = useState([]);
  const [montado, setMontado] = useState(false);

  const getFilmes = async () => {
    await axios.get('/plant/findMany').then((response) => {
      if (montado) {
        setFilmes(response.data);
      }
    });
  };

  useEffect(() => {
    setMontado(true);
    getFilmes();
  }, [montado]);

  return (
    <div className="browse">
      <Navbar />
      <Frame />
      <div className="browse__background">
        <div className="browse__card">
          {filmes.map((item) => (
            <Card
              id={item.id}
              image={item.imageUrl}
              name={item.commonName}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Browse;
