import logo from '../../assets/logo.png'
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () =>{
    return(
        <div className='navContainer'>
            <img src={logo} className='navLogo' alt='logo'></img>
            <ul className='navMenu'>
                <li>
                    Inicio
                </li>
                <li>
                    Novedades
                </li>
                <li>
                    Mas vendidos
                </li>
                <li>
                    Contacto
                </li>
            </ul>
            <CartWidget/>
        </div>
    )
}
export default NavBar;