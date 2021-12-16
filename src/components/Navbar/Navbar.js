/* eslint-disable jsx-a11y/anchor-is-valid */
import './Navbar.scss';
import logo from './img/logo.png';
import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar__right'>
                <img className='navbar__right__logo' src={ logo }  title= 'Tele Filmes' alt='Logo tipo Tele Filmes' />
                <ul className='navbar__right__links'>    
                    <li className='navbar__right__links__itens'>
                        <a>
                            <Link 
                                className='navbar__right__links__text'
                                title="Início"
                                to= "/"
                            >
                                Inicio
                            </Link>
                        </a>
                    </li>
                    <li className='navbar__right__links__itens'>
                        <a>
                            <Link 
                                className='navbar__right__links__text'
                                title="Filme"
                                to= "/filmes"
                            >
                                Filmes
                            </Link>
                        </a>
                    </li>        
                </ul>
            </div>
            <div className='navbar__right'>
                <ul className='navbar__left__links'>
                    <li className='navbar__left__links__intes'>
                        <a>
                            <Link className='navbar__right__links__icons'
                            title='Perfil'
                            to='/perfil'
                            >
                                <CgProfile size={35} color={'white'} />
                            </Link>
                        </a>
                    </li>
                </ul> 
            </div>   
        </div>
    );
};

export default Navbar;