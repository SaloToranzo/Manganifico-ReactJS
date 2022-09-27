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
                    <NavLink to={'/'} className={({isActive}) => (isActive ? 'active' : 'notActive')}>
                        Inicio
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/category/action'} className={({isActive}) => (isActive ? 'active' : 'notActive')}>
                        Accion
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/category/adventure'} className={({isActive}) => (isActive ? 'active' : 'notActive')}>
                        Aventura
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/category/sports'} className={({isActive}) => (isActive ? 'active' : 'notActive')}>
                        Deportes
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/category/fantasy'} className={({isActive}) => (isActive ? 'active' : 'notActive')}>
                        Fantasia
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/contact'} className={({isActive}) => (isActive ? 'active' : 'notActive')}>
                        Contacto
                    </NavLink>                  
                </li>
            </ul>
            <NavLink to={'/cart'}>
                <CartWidget/>
            </NavLink>
        </div>
    )
}
export default NavBar;