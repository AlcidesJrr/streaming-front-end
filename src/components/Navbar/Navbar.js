/* eslint-disable jsx-a11y/anchor-is-valid */
import './Navbar.scss';
import logo from '../../img/logo.png';
import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar__left'>
                <img className='navbar__left__logo' src={ logo }  title= 'Tele Filmes' alt='Logo tipo Tele Filmes' />
                <ul className='navbar__left__links'>    
                    <li className='navbar__left__links__itens'>
                        <Link 
                            className='navbar__left__links__text'
                            title="Início"
                            style={{fontSize:'1.1em'}}
                            to= "/browse"
                        >
                            Inicio
                        </Link>
                    </li>
                    <li className='navbar__left__links__itens'>
                        <Link 
                            className='navbar__left__links__text'
                            title="Minha lista"
                            to= "/mylist"
                        >
                            Minha lista
                        </Link>
                    </li>        
                </ul>
            </div>
            <div className='navbar__right'>
                <ul className='navbar__right__links'>
                    <li className='navbar__right__links__itens'>
                        <Link className='navbar__right__links__icons'
                            title='Perfil'
                            to='/perfil'
                        >
                            <CgProfile size={35} />
                        </Link>
                    </li>
                </ul>
            </div>   
        </div>
    );
};

export default Navbar;