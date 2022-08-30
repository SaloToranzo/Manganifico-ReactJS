import logo from '../logo.svg';

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
        </div>
    )
}
export default NavBar;