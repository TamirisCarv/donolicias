import logo from '../components/Logo.png';
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
import { Link } from "react-router-dom";

export default function Header() {
 return(
   
      
      <header>
      <nav className="navbar">
        <div className="logo">
          <a href="#"><img className="logo" src={logo} alt="logo" /></a>
        </div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Catálogo</a></li>
          <li><a href="#">Benefícios</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
        <div className="right-side">
        
          
          <div className="login-button">
           <Link to="/cadastro"><a href="#">Login</a> </Link> 
           
          </div>
          {/* <div className="login-button">
           <Link to="/cadastro"><a href="#">Cadastrar</a> </Link> 
           
          </div> */}
        </div>
      </nav>
    </header>
   
 ); 
}