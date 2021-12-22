import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';
import { useNavigate} from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const login = {
      email: email,
      password: senha,
    };

    axios.post('/auth/login', login).then((response) => {
      const token = response.data.token;
      localStorage.setItem('token', token);

      navigate('/browse')

    });
  };

  return (
    <div className="login">
      <div className="login__background">
        <div className="login__navbar">
          <Link to="/">
            <img
              className="login__logo"
              src={logo}
              title="Tele Filmes"
              alt="Logo tipo Tele Filmes"
            />
          </Link>
        </div>
        <div className="login__background__bottom">
          <form className="login__cadastrar" onSubmit={handleSubmit}>
            <div className="login__cadastrar__titulo">
              <h1>Entrar</h1>
            </div>
            <input
              type="email"
              id="id_email"
              className="login__cadastrar__form"
              name="email"
              placeholder="Email"
              required
              onChange={(event) => setEmail(event.target.value.toUpperCase())}
            />
            <input
              type="password"
              className="login__cadastrar__form"
              id="id_pass"
              name="password"
              placeholder="Adicione uma senha"
              required
              onChange={(event) => setSenha(event.target.value)}
            />
            <button
              type="submit"
              value="Login"
              className="login__cadastrar__button"
              title="Cadastrar"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
