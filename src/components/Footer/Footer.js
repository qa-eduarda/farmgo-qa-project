import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Footer() {
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
    <footer className="ud-footer wow fadeInUp" data-wow-delay=".15s">
      <div className="shape shape-1">
        <img src="/assets/images/footer/shape-1.svg" alt="shape" />
      </div>
      <div className="shape shape-2">
        <img src="/assets/images/footer/shape-2.svg" alt="shape" />
      </div>
      <div className="shape shape-3">
        <img src="/assets/images/footer/shape-3.svg" alt="shape" />
      </div>
      <div className="ud-footer-widgets">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="ud-widget">
                <a href="/" className="ud-footer-logo mb-3 d-block">
                  <img
                    src="/assets/images/logo/logo.svg"
                    alt="logo"
                    style={{ maxWidth: '150px' }}
                  />
                </a>
                <p className="ud-widget-desc">
                  Nós conectamos produtores locais com os seus consumidores. Alimentos frescos e
                  sustentáveis, direto da colheita para a sua mesa.
                </p>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 offset-xl-1">
              <div className="ud-widget">
                <h5 className="ud-widget-title">Sobre nós</h5>
                <ul className="ud-widget-links list-unstyled">
                  <li className="mb-2">
                    <a
                      href="#home"
                      onClick={(e) => handleAnchorClick(e, '#home')}
                      className="text-decoration-none"
                    >
                      Início
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="#features"
                      onClick={(e) => handleAnchorClick(e, '#features')}
                      className="text-decoration-none"
                    >
                      Recursos
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="#about"
                      onClick={(e) => handleAnchorClick(e, '#about')}
                      className="text-decoration-none"
                    >
                      Sobre
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="#contact"
                      onClick={(e) => handleAnchorClick(e, '#contact')}
                      className="text-decoration-none"
                    >
                      Contato
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div className="ud-widget">
                <h5 className="ud-widget-title font-weight-bold">Contato</h5>
                <p className="small mb-2">
                  <i className="bi bi-geo-alt-fill me-2 text-success"></i> Av. Paulista, 1106 - Bela
                  Vista, São Paulo - SP
                </p>
                <p className="small mb-2">
                  <i className="bi bi-envelope-fill me-2 text-success"></i> suporte@farmgo.app
                </p>
                <p className="small mb-0">
                  <i className="bi bi-telephone-fill me-2 text-success"></i> +55 (11) 99999-9999
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
