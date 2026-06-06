import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();

  // Estados dos inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // Estados de feedback e erros (excelente para asserções de testes QA)
  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState('');

  // Injetar estilos
  useEffect(() => {
    const cssFiles = [
      '/assets/css/bootstrap.min.css',
      '/assets/css/animate.css',
      '/assets/css/lineicons.css',
      '/assets/css/ud-styles.css'
    ];

    const linkElements = cssFiles.map(href => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      link.className = 'login-page-style';
      document.head.appendChild(link);
      return link;
    });

    return () => {
      linkElements.forEach(link => {
        if (link.parentNode) link.parentNode.removeChild(link);
      });
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validação Simples (Útil para testes negativos de QA)
    if (!email) {
      newErrors.email = 'O e-mail é obrigatório.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Formato de e-mail inválido.';
    }

    if (!password) {
      newErrors.password = 'A senha é obrigatória.';
    } else if (password.length < 6) {
      newErrors.password = 'A senha deve conter no mínimo 6 caracteres.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSuccessMsg('');
      return;
    }

    // Login Simulado com sucesso (Caminho feliz para QA)
    setErrors({});
    setSuccessMsg('Login realizado com sucesso! Redirecionando...');

    // Redireciona para o Marketplace após 1.5s
    setTimeout(() => {
      navigate('/shop');
    }, 1500);
  };

  return (
    <div className="login-page-wrapper">
      {/* ====== Banner Start ====== */}
      <section className="ud-page-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ud-banner-content">
                <h1>Acesse sua Conta</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ====== Banner End ====== */}

      {/* ====== Login Start ====== */}
      <section className="ud-login py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ud-login-wrapper mx-auto" style={{ maxWidth: '500px' }}>
                <div className="ud-login-logo mb-4 text-center">
                  <img src="/assets/images/logo/logo-2.svg" alt="logo" style={{ maxWidth: '150px' }} />
                </div>
                
                {/* Mensagem de Sucesso (QA: data-testid="success-message") */}
                {successMsg && (
                  <div 
                    className="alert alert-success" 
                    role="alert" 
                    data-testid="success-message"
                  >
                    {successMsg}
                  </div>
                )}

                <form className="ud-login-form" onSubmit={handleSubmit} noValidate>
                  <div className="ud-form-group mb-3">
                    <input
                      type="email"
                      name="email"
                      placeholder="E-mail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      data-testid="email-input"
                    />
                    {errors.email && (
                      <div className="invalid-feedback text-start" data-testid="email-error">
                        {errors.email}
                      </div>
                    )}
                  </div>
                  
                  <div className="ud-form-group mb-4">
                    <input
                      type="password"
                      name="password"
                      placeholder="Senha"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                      data-testid="password-input"
                    />
                    {errors.password && (
                      <div className="invalid-feedback text-start" data-testid="password-error">
                        {errors.password}
                      </div>
                    )}
                  </div>
                  
                  <div className="ud-form-group mb-3">
                    <button 
                      type="submit" 
                      className="ud-main-btn w-100" 
                      data-testid="login-submit-btn"
                    >
                      Entrar
                    </button>
                  </div>
                </form>

                <div className="ud-socials-connect mt-4 text-center">
                  <p>Conectar com</p>
                  <ul className="d-flex justify-content-center list-unstyled gap-2 mt-2">
                    <li>
                      <a href="javascript:void(0)" className="facebook btn btn-outline-primary rounded-circle p-2">
                        <i className="lni lni-facebook-filled"></i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="twitter btn btn-outline-info rounded-circle p-2">
                        <i className="lni lni-twitter-filled"></i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="google btn btn-outline-danger rounded-circle p-2">
                        <i className="lni lni-google"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="text-center mt-3">
                  <a className="forget-pass text-decoration-none text-muted small" href="javascript:void(0)">
                    Esqueceu sua senha?
                  </a>
                  <p className="signup-option mt-3 mb-0 small">
                    Ainda não possui conta? <a href="javascript:void(0)" className="text-primary text-decoration-none fw-bold">Cadastre-se</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ====== Login End ====== */}

      {/* ====== Footer Start ====== */}
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
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="ud-widget">
                  <a href="/" className="ud-footer-logo">
                    <img src="/assets/images/logo/logo.svg" alt="logo" />
                  </a>
                  <p className="ud-widget-desc">
                    Nós conectamos produtores locais com os seus consumidores.
                  </p>
                </div>
              </div>

              <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
                <div className="ud-widget">
                  <h5 className="ud-widget-title">Sobre nós</h5>
                  <ul className="ud-widget-links">
                    <li>
                      <a href="/#home">Início</a>
                    </li>
                    <li>
                      <a href="/#features">Recursos</a>
                    </li>
                    <li>
                      <a href="/#about">Sobre</a>
                    </li>
                    <li>
                      <a href="/#contact">Contato</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* ====== Footer End ====== */}
    </div>
  );
}

export default LoginPage;
