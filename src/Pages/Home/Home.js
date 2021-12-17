import './Home.scss';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';

const Home = () => {
    return (
        <div className='home'>
            <div className='home__background'>
                <div className='home__navbar'>
                    <img className='home__logo' src={ logo }  title= 'Tele Filmes' alt='Logo tipo Tele Filmes' />
                    <ul className='home__links'>    
                        <li className='home__links__itens'>
                            <Link 
                                className='home__links__text'
                                title="Entrar"
                                to= "/login"
                            >
                                Entrar
                            </Link>
                        </li>
                    </ul>     
                </div>
                <div className='home__background__bottom'>
                    <div className='home__text'>
                        <h1>
                        Filmes, séries e muito mais.<br />
                        Sem limites.
                        </h1>
                    </div>
                    <form className='home__cadastrar'>
                        <div className='home__cadastrar__titulo'>
                            <h1>Cadastrar</h1>
                        </div>
                        <input 
                        type='email' 
                        id='id_email' className='home__cadastrar__form' 
                        name='email' 
                        placeholder='Email' 
                        required />
                        <input 
                        type='password'
                        className='home__cadastrar__form' 
                        id='id_pass' 
                        name='password' 
                        placeholder='Adicione uma senha' required />
                        <input 
                        type='password' 
                        className='home__cadastrar__form' id='id_passconfirmacao' 
                        name='passwordconfirmacao' 
                        placeholder='Adicione a mesma senha' 
                        required />
                        <button type='submit' className='home__cadastrar__button' title='Cadastrar'>Enviar</button>
                    </form>
                </div>
            </div>   
        </div>
    )
}

export default Home