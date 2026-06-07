import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};


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

    setErrors({});
    setSuccessMsg('Login realizado com sucesso! Redirecionando...');

    setTimeout(() => {
      navigate('/shop');
    }, 1500);
  };

  return (
    <div className="login-page-wrapper">

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
                      <a href="#/" onClick={(e) => e.preventDefault()} className="facebook btn btn-outline-primary rounded-circle p-2">
                        <i className="lni lni-facebook-filled"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#/" onClick={(e) => e.preventDefault()} className="twitter btn btn-outline-info rounded-circle p-2">
                        <i className="lni lni-twitter-filled"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#/" onClick={(e) => e.preventDefault()} className="google btn btn-outline-danger rounded-circle p-2">
                        <i className="lni lni-google"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="text-center mt-3">
                  <a className="forget-pass text-decoration-none text-muted small" href="#/" onClick={(e) => e.preventDefault()}>
                    Esqueceu sua senha?
                  </a>
                  <p className="signup-option mt-3 mb-0 small">
                    Ainda não possui conta? <a href="#/" onClick={(e) => e.preventDefault()} className="text-primary text-decoration-none fw-bold">Cadastre-se</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



    </div>
  );
}

export default LoginPage;
