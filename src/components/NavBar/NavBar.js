import './NavBar.css';
import logo from '../../assets/logo.png'
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';

const NavBar = () =>{
    return(
        <div className='navContainer'>
            <NavLink to={'/'}>
                <img src={logo} className='navLogo' alt='logo'></img>
            </NavLink>
            <ul className='navMenu'>
                <li>
                    <NavLink to={'/'}>
                        Inicio
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/categoryId/action'}>
                        Accion
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/categoryId/adventure'}>
                        Aventura
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/categoryId/sports'}>
                        Deportes
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/categoryId/fantasy'}>
                        Fantasia
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/contact'}>
                        Contacto
                    </NavLink>                  
                </li>
            </ul>
            <CartWidget/>
        </div>
    )
}
export default NavBar;