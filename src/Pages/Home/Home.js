import './Home.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import logo from '../../img/logo.png';

const Home = () => {
  let navigate = useNavigate();

  const handleSubmit = async (evento) => {
    evento.preventDefault();

    const name = evento.target.name.value;
    const email = evento.target.email.value;
    const birthdate = evento.target.birthdate.value;
    const password = evento.target.password.value;
    const passwordConfirmation = evento.target.passwordConfirmation.value;
    const imageUrl = evento.target.imageUrl.value;

    const user = {
      name,
      email: email.toUpperCase(),
      birthdate,
      password,
      passwordConfirmation,
      imageUrl,
    };

    axios.post('/user/create', user).then((response) => {
      navigate('/browse');
    });
  };

  return (
    <div className="home">
      <div className="home__background">
        <div className="home__navbar">
          <img
            className="home__logo"
            src={logo}
            title="Tele Filmes"
            alt="Logo tipo Tele Filmes"
          />
          <ul className="home__links">
            <li className="home__links__itens">
              <Link className="home__links__text" title="Entrar" to="/login">
                Entrar
              </Link>
            </li>
          </ul>
        </div>
        <div className="home__background__bottom">
          <div className="home__text">
            <h1>
              Filmes, séries e muito mais.
              <br />
              Sem limites.
            </h1>
          </div>
          <form className="home__cadastrar" onSubmit={handleSubmit}>
            <div className="home__cadastrar__titulo">
              <h1>Cadastrar</h1>
            </div>
            <input
              type="text"
              id="id_text"
              className="home__cadastrar__form"
              name="name"
              placeholder="Name"
              required
            />
            <input
              type="email"
              id="id_email"
              className="home__cadastrar__form"
              name="email"
              placeholder="Email"
              required
            />
            <input
              type="date"
              id="id_birday"
              className="home__cadastrar__form"
              name="birthdate"
              placeholder="Data de nascimento"
              required
            />
            <input
              type="text"
              id="id_image"
              className="home__cadastrar__form"
              name="imageUrl"
              placeholder="Imagem"
              required
            />
            <input
              type="password"
              className="home__cadastrar__form"
              id="id_pass"
              name="password"
              placeholder="Adicione uma senha"
              required
            />
            <input
              type="password"
              className="home__cadastrar__form"
              id="id_passconfirmacao"
              name="passwordConfirmation"
              placeholder="Adicione a mesma senha"
              required
            />
            <button
              type="submit"
              className="home__cadastrar__button"
              title="Cadastrar"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
