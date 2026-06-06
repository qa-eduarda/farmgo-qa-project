// src/components/NavBar/Navbar.js
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Logo from './logo.svg'; 
import './Navbar.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleAnchorClick = (e, hash) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img id='logoImg' src={Logo} alt="FarmGo Logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" id="navBarLinks">
            <Nav.Link as={Link} className='navBarLink' to="/">Home</Nav.Link>
            <Nav.Link className='navBarLink' href="#features" onClick={(e) => handleAnchorClick(e, '#features')}>Recursos</Nav.Link>
            <Nav.Link className='navBarLink' href="#about" onClick={(e) => handleAnchorClick(e, '#about')}>Sobre</Nav.Link>
            <Nav.Link className='navBarLink' href="#team" onClick={(e) => handleAnchorClick(e, '#team')}>Time</Nav.Link>
            <Nav.Link className='navBarLink' href="#contact" onClick={(e) => handleAnchorClick(e, '#contact')}>Contato</Nav.Link>
            <Nav.Link as={Link} className='navBarLink' to="/mapa">Mapa</Nav.Link>
            <Nav.Link as={Link} className='navBarLink' to="/shop">Nossos Parceiros</Nav.Link>
            <Nav.Link as={Link} className='navBarLink' to="/eventos">Eventos</Nav.Link>
          </Nav>
          <Button as={Link} to="/login" id="navBarBtn">Acessar</Button> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;