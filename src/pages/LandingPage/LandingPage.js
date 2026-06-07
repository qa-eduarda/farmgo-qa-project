import React, { useEffect, useState } from 'react';

function LandingPage() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  useEffect(() => {
    const cssFiles = [
      '/assets/css/bootstrap.min.css',
      '/assets/css/animate.css',
      '/assets/css/lineicons.css',
      '/assets/css/ud-styles.css',
    ];

    const linkElements = cssFiles.map((href) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      link.className = 'landing-page-style';
      document.head.appendChild(link);
      return link;
    });

    const script = document.createElement('script');
    script.src = '/assets/js/wow.min.js';
    script.async = true;
    script.onload = () => {
      if (window.WOW) {
        try {
          new window.WOW().init();
        } catch (e) {
          console.log('WOW.js init failed: ', e);
        }
      }
    };
    document.body.appendChild(script);

    const handleScroll = () => {
      const backToTop = document.querySelector('.back-to-top');
      if (backToTop) {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
          backToTop.style.display = 'flex';
        } else {
          backToTop.style.display = 'none';
        }
      }
    };
    window.addEventListener('scroll', handleScroll);

    const handleHashScroll = (e) => {
      const target = e.target.closest('a');
      if (target && target.hash && target.hash.startsWith('#')) {
        const element = document.querySelector(target.hash);
        if (element) {
          e.preventDefault();
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    document.addEventListener('click', handleHashScroll);

    return () => {
      linkElements.forEach((link) => {
        if (link.parentNode) link.parentNode.removeChild(link);
      });
      if (script.parentNode) script.parentNode.removeChild(script);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleHashScroll);
    };
  }, []);

  const handleBackToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="landing-page-wrapper">
      <section className="ud-hero" id="home">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ud-hero-content wow fadeInUp" data-wow-delay=".2s">
                <h1 className="ud-hero-title">Cultivando conexões: Uma nova forma de consumir.</h1>
                <p className="ud-hero-desc">
                  Descubra produtos frescos e sustentáveis, diretamente do produtor.
                </p>
              </div>
              <div className="ud-hero-image wow fadeInUp" data-wow-delay=".25s">
                <img
                  src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=1200&h=600"
                  alt="hero-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="ud-features">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ud-section-title">
                <h2>Nossas Funcionalidades</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="ud-single-feature wow fadeInUp" data-wow-delay=".1s">
                <div className="ud-feature-icon">
                  <i className="lni lni-pencil"></i>
                </div>
                <div className="ud-feature-content">
                  <h3 className="ud-feature-title">Cadastro simples</h3>
                  <p className="ud-feature-desc">Crie sua conta e comece a comprar ou vender</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="ud-single-feature wow fadeInUp" data-wow-delay=".15s">
                <div className="ud-feature-icon">
                  <i className="lni lni-search"></i>
                </div>
                <div className="ud-feature-content">
                  <h3 className="ud-feature-title">Busca</h3>
                  <p className="ud-feature-desc">
                    Encontre produtos por categoria, localização, preço e outros filtros
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="ud-single-feature wow fadeInUp" data-wow-delay=".2s">
                <div className="ud-feature-icon">
                  <i className="lni lni-coin"></i>
                </div>
                <div className="ud-feature-content">
                  <h3 className="ud-feature-title">Pagamento</h3>
                  <p className="ud-feature-desc">
                    Pagamento seguro e prático direto com o fornecedor
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="ud-single-feature wow fadeInUp" data-wow-delay=".25s">
                <div className="ud-feature-icon">
                  <i className="lni lni-delivery"></i>
                </div>
                <div className="ud-feature-content">
                  <h3 className="ud-feature-title">Entrega</h3>
                  <p className="ud-feature-desc">Agendamento de entrega ou retirada no local</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="ud-single-feature wow fadeInUp" data-wow-delay=".25s">
                <div className="ud-feature-icon">
                  <i className="lni lni-star"></i>
                </div>
                <div className="ud-feature-content">
                  <h3 className="ud-feature-title">Avaliações</h3>
                  <p className="ud-feature-desc">Conheça a reputação dos produtores e produtos.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="ud-single-feature wow fadeInUp" data-wow-delay=".25s">
                <div className="ud-feature-icon">
                  <i className="lni lni-bubble"></i>
                </div>
                <div className="ud-feature-content">
                  <h3 className="ud-feature-title">Chat integrado</h3>
                  <p className="ud-feature-desc">Maior conexão entre compradores e vendedores</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="ud-single-feature wow fadeInUp" data-wow-delay=".25s">
                <div className="ud-feature-icon">
                  <i className="lni lni-layout"></i>
                </div>
                <div className="ud-feature-content">
                  <h3 className="ud-feature-title">Ferramentas de análise</h3>
                  <p className="ud-feature-desc">Análises para auxiliar suas vendas</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="ud-single-feature wow fadeInUp" data-wow-delay=".25s">
                <div className="ud-feature-icon">
                  <i className="lni lni-layout"></i>
                </div>
                <div className="ud-feature-content">
                  <h3 className="ud-feature-title">Gestão de estoques e preço</h3>
                  <p className="ud-feature-desc">
                    Gerencie seus produtos da forma mais benéfica para seu negócio
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" class="ud-about">
        <div className="container">
          <div className="ud-about-wrapper wow fadeInUp" data-wow-delay=".2s">
            <div className="ud-about-content-wrapper">
              <div className="ud-about-content">
                <span className="tag">Sobre nós</span>
                <h2>A solução para produtores e consumidores</h2>
                <p>
                  Nosso aplicativo conecta pequenos produtores a consumidores, promovendo a venda
                  direta de alimentos frescos e sustentáveis. <br />
                  Você, produtor rural, que deseja ter um aumento na sua renda, maior visibilidade
                  para seus produtos e uma gestão eficiente do seu estoque de produtos. <br />E para
                  você, consumidor, que deseja ter um fácil acesso a produtos frescos e saudáveis,
                  dando apoio à agricultura familiar.
                </p>
                <p>Seja um produtor e conecte-se à nossa plataforma e amplie seus negócios!</p>
              </div>
            </div>
            <div className="ud-about-image">
              <img src="/assets/images/about/about-image.jpeg" alt="about-image" />
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="ud-faq">
        <div className="shape">
          <img src="/assets/images/faq/shape.svg" alt="shape" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ud-section-title text-center mx-auto">
                <span>FAQ</span>
                <h2>Dúvidas sobre o produto? Nós respondemos!</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="ud-single-faq wow fadeInUp" data-wow-delay=".1s">
                <div className="accordion">
                  <button
                    className={`ud-faq-btn ${activeFaq === 1 ? '' : 'collapsed'}`}
                    onClick={() => toggleFaq(1)}
                  >
                    <span className="icon flex-shrink-0">
                      <i className="lni lni-chevron-down"></i>
                    </span>
                    <span>Como funciona para acessar?</span>
                  </button>
                  <div
                    id="collapseOne"
                    className={`accordion-collapse collapse ${activeFaq === 1 ? 'show' : ''}`}
                  >
                    <div className="ud-faq-body">
                      Você poderá criar uma conta como vendedor ou como consumidor em nosso
                      aplicativo, lá você coloca seus dados e informações principais para outros
                      usuários saberem mais sobre você e o que você está buscando na plataforma.
                    </div>
                  </div>
                </div>
              </div>
              <div className="ud-single-faq wow fadeInUp" data-wow-delay=".15s">
                <div className="accordion">
                  <button
                    className={`ud-faq-btn ${activeFaq === 2 ? '' : 'collapsed'}`}
                    onClick={() => toggleFaq(2)}
                  >
                    <span className="icon flex-shrink-0">
                      <i className="lni lni-chevron-down"></i>
                    </span>
                    <span>Como faço para adquirir o aplicativo?</span>
                  </button>
                  <div
                    id="collapseTwo"
                    className={`accordion-collapse collapse ${activeFaq === 2 ? 'show' : ''}`}
                  >
                    <div className="ud-faq-body">
                      Estamos ainda em construção e desenvolvimento. Em breve nosso website e
                      aplicativo completo poderá ser acessado na internet pelo computador ou
                      celular.
                    </div>
                  </div>
                </div>
              </div>
              <div className="ud-single-faq wow fadeInUp" data-wow-delay=".2s">
                <div className="accordion">
                  <button
                    className={`ud-faq-btn ${activeFaq === 3 ? '' : 'collapsed'}`}
                    onClick={() => toggleFaq(3)}
                  >
                    <span className="icon flex-shrink-0">
                      <i className="lni lni-chevron-down"></i>
                    </span>
                    <span>Preciso pagar para ter acesso?</span>
                  </button>
                  <div
                    id="collapseThree"
                    className={`accordion-collapse collapse ${activeFaq === 3 ? 'show' : ''}`}
                  >
                    <div className="ud-faq-body">
                      Não, não precisa. No primeiro momento nosso aplicativo será gratuito e irá
                      contar com as principais funcionalidades de graça para os usuários poderem
                      desfrutar e testar. No futuro iremos disponibilizar duas opções para os
                      usuários: uma completa que será paga e irá apresentar mais funcionalidaes e
                      contará com suporte e uma versão básica somente com as principais
                      funcionalidades e de forma gratuita.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ud-single-faq wow fadeInUp" data-wow-delay=".1s">
                <div className="accordion">
                  <button
                    className={`ud-faq-btn ${activeFaq === 4 ? '' : 'collapsed'}`}
                    onClick={() => toggleFaq(4)}
                  >
                    <span className="icon flex-shrink-0">
                      <i className="lni lni-chevron-down"></i>
                    </span>
                    <span>Como faço se quiser comprar algum produto?</span>
                  </button>
                  <div
                    id="collapseFour"
                    className={`accordion-collapse collapse ${activeFaq === 4 ? 'show' : ''}`}
                  >
                    <div className="ud-faq-body">
                      Em nosso aplicativo será disponibilizado uma vitrine e um catálogo dos
                      produtos adicionados pelos vendedores, lá você terá fotos dos produtos e
                      informações como preço, peso e data dos alimentos. Após selecionar o produto,
                      colocar no carrinho, escolher o método de pagamento e a entrega, irá ser
                      direcionado direto ao chat do produtor para confirmar pagamento e recebimento
                      da compra.
                    </div>
                  </div>
                </div>
              </div>
              <div className="ud-single-faq wow fadeInUp" data-wow-delay=".15s">
                <div className="accordion">
                  <button
                    className={`ud-faq-btn ${activeFaq === 5 ? '' : 'collapsed'}`}
                    onClick={() => toggleFaq(5)}
                  >
                    <span className="icon flex-shrink-0">
                      <i className="lni lni-chevron-down"></i>
                    </span>
                    <span>Vou poder aceitar e realizar pagamentos das compras?</span>
                  </button>
                  <div
                    id="collapseFive"
                    className={`accordion-collapse collapse ${activeFaq === 5 ? 'show' : ''}`}
                  >
                    <div className="ud-faq-body">
                      Não, não poderá. Somente agendar com o vendedor a data e o formato em que
                      deseja pagar a mercadoria adquirida.
                    </div>
                  </div>
                </div>
              </div>
              <div className="ud-single-faq wow fadeInUp" data-wow-delay=".2s">
                <div className="accordion">
                  <button
                    className={`ud-faq-btn ${activeFaq === 6 ? '' : 'collapsed'}`}
                    onClick={() => toggleFaq(6)}
                  >
                    <span className="icon flex-shrink-0">
                      <i className="lni lni-chevron-down"></i>
                    </span>
                    <span>Como saber se o vendedor ou o comprador são confiáveis?</span>
                  </button>
                  <div
                    id="collapseSix"
                    className={`accordion-collapse collapse ${activeFaq === 6 ? 'show' : ''}`}
                  >
                    <div className="ud-faq-body">
                      Nosso aplicativo contará com validação dos dados dos usuários cadastrados e
                      com um sistema de avaliação e histórico de compras. Vendedores e compradores
                      poderão avaliar uns aos outros em fatores como, qualidade do produto,
                      pontualidade, pagamento recebido, confiável e várias outras opções que
                      servirão como base na hora de escolher os produtos e/ou aceitar a compra.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ====== FAQ End ====== */}

      {/* ====== Team Start ====== */}
      <section id="team" className="ud-team">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ud-section-title mx-auto text-center">
                <span>Nosso time</span>
                <h2>Conheça nosso time</h2>
                <p>
                  Somos um grupo de jovens estudantes do curso de Engenharia de Software da FIAP que
                  buscam entregar à população um facilitador de negociações entre os personagens do
                  campo aos seus consumidores.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-3 col-lg-3 col-sm-6">
              <div className="ud-single-team wow fadeInUp" data-wow-delay=".1s">
                <div className="ud-team-image-wrapper">
                  <div className="ud-team-image">
                    <img src="/assets/images/team/WSF-5282 alta qualidade.webp" alt="team" />
                  </div>
                  <img
                    src="/assets/images/team/dotted-shape.svg"
                    alt="shape"
                    className="shape shape-1"
                  />
                  <img
                    src="/assets/images/team/shape-2.svg"
                    alt="shape"
                    className="shape shape-2"
                  />
                </div>
                <div className="ud-team-info">
                  <h5>João Gabriel Fröhlich</h5>
                  <h6>Engenheiro de software</h6>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-sm-6">
              <div className="ud-single-team wow fadeInUp" data-wow-delay=".15s">
                <div className="ud-team-image-wrapper">
                  <div className="ud-team-image">
                    <img src="/assets/images/team/Liondas-pfp.png" alt="team" />
                  </div>
                  <img
                    src="/assets/images/team/dotted-shape.svg"
                    alt="shape"
                    className="shape shape-1"
                  />
                  <img
                    src="/assets/images/team/shape-2.svg"
                    alt="shape"
                    className="shape shape-2"
                  />
                </div>
                <div className="ud-team-info">
                  <h5>Gabriel Liondas</h5>
                  <h6>Engenheiro de software</h6>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-sm-6">
              <div className="ud-single-team wow fadeInUp" data-wow-delay=".2s">
                <div className="ud-team-image-wrapper">
                  <div className="ud-team-image">
                    <img src="/assets/images/team/foto-rene.png" alt="team" />
                  </div>
                  <img
                    src="/assets/images/team/dotted-shape.svg"
                    alt="shape"
                    className="shape shape-1"
                  />
                  <img
                    src="/assets/images/team/shape-2.svg"
                    alt="shape"
                    className="shape shape-2"
                  />
                </div>
                <div className="ud-team-info">
                  <h5>René Gabriel Portela Duarte</h5>
                  <h6>Engenheiro de software</h6>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-sm-6">
              <div className="ud-single-team wow fadeInUp" data-wow-delay=".25s">
                <div className="ud-team-image-wrapper">
                  <div className="ud-team-image">
                    <img src="/assets/images/team/foto-perfil-duda.png" alt="team" />
                  </div>
                  <img
                    src="/assets/images/team/dotted-shape.svg"
                    alt="shape"
                    className="shape shape-1"
                  />
                  <img
                    src="/assets/images/team/shape-2.svg"
                    alt="shape"
                    className="shape shape-2"
                  />
                </div>
                <div className="ud-team-info">
                  <h5>Eduarda Zorzi Rigo</h5>
                  <h6>Engenheira de Software</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="ud-contact">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-8 col-lg-7">
              <div className="ud-contact-content-wrapper">
                <div className="ud-contact-title">
                  <span>ENTRE EM CONTATO </span>
                  <h2>
                    Vamos conversar <br />
                    Queremos ouvir você!
                  </h2>
                </div>
                <div className="ud-contact-info-wrapper">
                  <div className="ud-single-info">
                    <div className="ud-info-icon">
                      <i className="lni lni-map-marker"></i>
                    </div>
                    <div className="ud-info-meta">
                      <h5>Nossa Localização</h5>
                      <p>Av. Paulista, 1106 - 7* andar - Bela Vista, São Paulo - SP, 01311-000</p>
                    </div>
                  </div>
                  <div className="ud-single-info">
                    <div className="ud-info-icon">
                      <i className="lni lni-envelope"></i>
                    </div>
                    <div className="ud-info-meta">
                      <h5>Como podemos te ajudar?</h5>
                      <p>suporte@farmgo.app</p>
                      <p>contato@farmgo.app</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="ud-contact-form-wrapper wow fadeInUp" data-wow-delay=".2s">
                <h3 className="ud-contact-form-title">Nos envie uma mensagem</h3>
                <form className="ud-contact-form">
                  <div className="ud-form-group">
                    <label htmlFor="fullName">Nome Completo*</label>
                    <input type="text" name="fullName" placeholder="João Pedro" />
                  </div>
                  <div className="ud-form-group">
                    <label htmlFor="email">Email*</label>
                    <input type="email" name="email" placeholder="exemplo@SeuEmail.com" />
                  </div>
                  <div className="ud-form-group">
                    <label htmlFor="phone">Telefone*</label>
                    <input type="text" name="phone" placeholder="+55 (99)9999-9999" />
                  </div>
                  <div className="ud-form-group">
                    <label htmlFor="message">Mensagem*</label>
                    <textarea
                      name="message"
                      rows="1"
                      placeholder="Escreva Aqui Sua Mensagem"
                    ></textarea>
                  </div>
                  <div className="ud-form-group mb-0">
                    <button type="submit" className="ud-main-btn">
                      Enviar Mensagem
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <a href="/" className="back-to-top" onClick={handleBackToTop}>
        <i className="lni lni-chevron-up"> </i>
      </a>
    </div>
  );
}

export default LandingPage;
