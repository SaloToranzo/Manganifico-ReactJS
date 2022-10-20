import './NavBar.css';
import logo from '../../assets/logo.png'
import CartWidget from '../CartWidget/CartWidget';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const {cart} = useContext(CartContext);

    return (

        <div className='navContainer'>
            <nav className="navbar navbar-expand-lg navbar-dark sticky-lg-top">
                <div className="container-fluid container_fluid">
                    <NavLink to={"/"}>
                        <div className="navbar_brand navbarLogo">
                            <img src={logo} alt="logo" className='navLogo'/>
                            <h1 className="navTitle">MANGANÍFICO</h1>
                        </div>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                <div className="collapse navbar-collapse navMenu" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item me-3">
                            <NavLink to={"/"}>
                                <div className="nav-link">Inicio</div>
                            </NavLink>
                        </li>
                        <div className="dropdown">
                            <div className="nav-item me-3 nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categorías
                        </div>

                        <ul className="dropdown-menu">
                            <NavLink to={'/category/action'} className='dropdown-item'>
                                Acción
                            </NavLink>
                            <NavLink to={'/category/adventure'} className='dropdown-item'>
                                Aventura
                            </NavLink>
                            <NavLink to={'/category/romantic comedy'} className='dropdown-item'>
                                Comedia Romántica
                            </NavLink>
                            <NavLink to={'/category/sports'} className='dropdown-item'>
                                Deportes
                            </NavLink>
                            <NavLink to={'/category/fantasy'} className='dropdown-item'>
                                Fantasía
                            </NavLink>
                            <NavLink to={'/category/slice of life'} className='dropdown-item'>
                                Slice of life
                            </NavLink>
                        </ul>
                </div>
            </ul>
            {cart.length > 0 ? 
                    <NavLink to={"/cart"}>        
                        <CartWidget/>        
                    </NavLink> 
                : ""}
          </div>
          
        </div>
      </nav>
        </div>




        // <div className='navContainer'>
        //     <NavLink to={'/'}>
        //         <img src={logo} className='navLogo' alt='logo'></img>
        //     </NavLink>
        //     <ul className='navMenu'>
        //         <li>
        //             <NavLink to={'/'} className={({isActive}) => (isActive ? 'active' : 'notActive')}>
        //                 Inicio
        //             </NavLink>
        //         </li>
        //             <li><a href='#'>Categorías</a>
        //                 <ul class="dropdown-menu">
        //                     <li>
        //                         <NavLink to={'/category/action'} className={({ isActive }) => (isActive ? 'active' : 'notActive')}>
        //                             Acción
        //                         </NavLink>
        //                     </li>
        //                     <li>
        //                         <NavLink to={'/category/adventure'} className={({ isActive }) => (isActive ? 'active' : 'notActive')}>
        //                             Aventura
        //                         </NavLink>
        //                     </li>
        //                     <li>
        //                         <NavLink to={'/category/romantic comedy'} className={({ isActive }) => (isActive ? 'active' : 'notActive')}>
        //                             Comedia Romántica
        //                         </NavLink>
        //                     </li>
        //                     <li>
        //                         <NavLink to={'/category/sports'} className={({ isActive }) => (isActive ? 'active' : 'notActive')}>
        //                             Deportes
        //                         </NavLink>
        //                     </li>
        //                     <li>
        //                         <NavLink to={'/category/fantasy'} className={({ isActive }) => (isActive ? 'active' : 'notActive')}>
        //                             Fantasía
        //                         </NavLink>
        //                     </li>
        //                     <li>
        //                         <NavLink to={'/category/slice of life'} className={({ isActive }) => (isActive ? 'active' : 'notActive')}>
        //                             Slice of Life
        //                         </NavLink>
        //                     </li>
        //                 </ul>
        //             </li>
                
        //     </ul>
        //     <NavLink to={'/cart'}>
        //         <CartWidget/>
        //     </NavLink>
        // </div>
    )
}
export default NavBar;