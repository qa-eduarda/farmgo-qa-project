import React, { useEffect, useRef } from 'react';

function MapPage() {
  const mapRef = useRef(null);

  useEffect(() => {
    // 1. Injetar folhas de estilo específicas do mapa/landing page
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
      link.className = 'map-page-style';
      document.head.appendChild(link);
      return link;
    });

    // Função auxiliar para gerar marcadores baseados na localização atual do usuário
    function generateMarkersPosition(latitude, longitude) {
      return [
        { lat: latitude * 0.99999 + 0.00008, lng: longitude * 1.0001 + 0.00002, title: "Parceiro Orgânico Sol Nascente" },
        { lat: latitude * 0.99994 + 0.00007, lng: longitude * 1.00005 + 0.00003, title: "Sítio Alvorada de Frutas" },
        { lat: latitude * 0.99987 + 0.00006, lng: longitude * 1.0002 + 0.00004, title: "Chácara Verde Vida (Hortaliças)" },
        { lat: latitude * 0.99974 + 0.00005, lng: longitude * 1.00019 + 0.00005, title: "Fazenda Nova Esperança (Laticínios)" }
      ];
    }

    // 2. Definir o callback initMap na window para ser chamado pelo Google Maps SDK
    window.initMap = async () => {
      if (!window.google || !mapRef.current) return;

      try {
        const { Map } = await window.google.maps.importLibrary("maps");
        const { AdvancedMarkerElement } = await window.google.maps.importLibrary("marker");

        navigator.geolocation.getCurrentPosition(
          function (position) {
            const userLat = position.coords.latitude;
            const userLng = position.coords.longitude;

            const mapInstance = new Map(mapRef.current, {
              zoom: 17,
              center: { lat: userLat, lng: userLng },
              mapId: "DEMO_MAP_ID",
            });

            console.log("Localização encontrada: ", userLat, userLng);
            const positions = generateMarkersPosition(userLat, userLng);
            positions.forEach((pos) => {
              new AdvancedMarkerElement({
                map: mapInstance,
                position: { lat: pos.lat, lng: pos.lng },
                title: pos.title,
              });
            });
          },
          function (error) {
            console.error("Erro ao obter geolocalização, usando padrão: ", error);
            // Fallback para uma coordenada padrão se a permissão for negada
            const defaultPos = { lat: -23.5617, lng: -46.6560 }; // Av. Paulista, SP
            const mapInstance = new Map(mapRef.current, {
              zoom: 15,
              center: defaultPos,
              mapId: "DEMO_MAP_ID",
            });

            const positions = generateMarkersPosition(defaultPos.lat, defaultPos.lng);
            positions.forEach((pos) => {
              new AdvancedMarkerElement({
                map: mapInstance,
                position: { lat: pos.lat, lng: pos.lng },
                title: pos.title,
              });
            });
          }
        );
      } catch (e) {
        console.error("Falha ao inicializar o Google Maps: ", e);
      }
    };

    // 3. Injetar script do Google Maps se ainda não estiver presente no DOM
    let script = document.querySelector('script[src*="maps.googleapis.com"]');
    if (!script) {
      script = document.createElement('script');
      script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAji1v0bLIlcJro-CfJVGekzq9YNJsjcKU&callback=initMap&libraries=maps,marker&v=beta";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    } else {
      // Se o script já existir, chama initMap imediatamente
      if (window.google) {
        window.initMap();
      }
    }

    return () => {
      // Limpeza dos estilos injetados ao desmontar
      linkElements.forEach(link => {
        if (link.parentNode) link.parentNode.removeChild(link);
      });
      // Limpeza do callback global
      delete window.initMap;
    };
  }, []);

  return (
    <div className="map-page-wrapper">
      {/* ====== Banner Start ====== */}
      <section className="ud-page-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ud-banner-content">
                <h1>Parceiros Próximos</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ====== Banner End ====== */}

      {/* ====== Map Section ====== */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card shadow-sm border-0 overflow-hidden" style={{ borderRadius: '15px' }}>
                <div 
                  id="map" 
                  ref={mapRef} 
                  style={{ height: '600px', width: '100%' }}
                >
                  <div className="d-flex align-items-center justify-content-center h-100 bg-light text-muted">
                    <div className="text-center">
                      <div className="spinner-border spinner-border-sm mb-2" role="status"></div>
                      <p className="mb-0">Carregando mapa interativo...</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

export default MapPage;
