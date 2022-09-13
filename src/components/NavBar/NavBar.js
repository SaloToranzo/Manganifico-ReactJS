import './NavBar.css';
import logo from '../../assets/logo.png'
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () =>{
    return(
        <div className='navContainer'>
            <Link to={'/'}>
                <img src={logo} className='navLogo' alt='logo'></img>
            </Link>
            <ul className='navMenu'>
                <li>
                    <Link to={'/'}>
                        Inicio
                    </Link>
                </li>
                <li>
                    Novedades
                </li>
                <li>
                    Mas vendidos
                </li>
                <li>
                    <Link to={'/contact'}>
                    Contacto                    
                    </Link>
                </li>
            </ul>
            <CartWidget/>
        </div>
    )
}
export default NavBar;