import "./Footer.css";
import { NavLink } from "react-router-dom";
import logo from '../../assets/logo.png'
import githubLogo from '../../assets/githubLogo.png'
import linkedinLogo from '../../assets/linkedinLogo.png'

const handleClickGithub = ()=>{
  window.open('https://github.com/SaloToranzo/Manganifico-ReactJS', '_blank')
  }
  const handleClickLinkedin = ()=>{
    window.open('https://www.linkedin.com/in/msalome-toranzo/', '_blank')
    }

const Footer = () => {
  return (
    <footer>

      <div className="footerCenter">
        <NavLink to={"/"}>
          <img src={logo} className='footerLogo' alt="Manganifico" />
          <p className="pageTitle">MANGANÍFICO</p>
        </NavLink>
      </div>

      <div className="footerLeft">
        <p className="footerText">
          Proyecto final para el curso ReactJS de CoderHouse
        </p>
      </div>

      <div className="footerRight">
        <p className="footerText">Desarrollado por María Salomé Toranzo</p>
        <img src={githubLogo} className='socialLogos' alt="Github" onClick={handleClickGithub} />
        <img src={linkedinLogo} className='socialLogos' alt="LinkedIn" onClick={handleClickLinkedin} />
      </div>
    </footer>
  );
};

export default Footer;