import React, { useEffect, useRef } from 'react';

function MapPage() {
  const mapRef = useRef(null);

  useEffect(() => {
    let cssLink = document.querySelector('link[href*="leaflet.css"]');
    if (!cssLink) {
      cssLink = document.createElement('link');
      cssLink.rel = 'stylesheet';
      cssLink.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      cssLink.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
      cssLink.crossOrigin = '';
      document.head.appendChild(cssLink);
    }

    function generateMarkersPosition(latitude, longitude) {
      return [
        {
          lat: latitude + 0.0018,
          lng: longitude + 0.0012,
          title: 'Parceiro Orgânico Sol Nascente',
        },
        { lat: latitude - 0.0012, lng: longitude + 0.0025, title: 'Sítio Alvorada de Frutas' },
        {
          lat: latitude + 0.0028,
          lng: longitude - 0.0015,
          title: 'Chácara Verde Vida (Hortaliças)',
        },
        {
          lat: latitude - 0.0025,
          lng: longitude - 0.0022,
          title: 'Fazenda Nova Esperança (Laticínios)',
        },
      ];
    }

    const initLeafletMap = (lat, lng) => {
      if (!mapRef.current || !window.L) return;

      if (window.mapInstance) {
        window.mapInstance.remove();
      }

      const map = window.L.map(mapRef.current).setView([lat, lng], 15);
      window.mapInstance = map;

      window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      window.L.marker([lat, lng]).addTo(map).bindPopup('<b>Sua Localização Atual</b>').openPopup();

      const positions = generateMarkersPosition(lat, lng);
      positions.forEach((pos) => {
        window.L.marker([pos.lat, pos.lng])
          .addTo(map)
          .bindPopup(`<b>${pos.title}</b><br/>Produtos Frescos e Saudáveis.`);
      });
    };

    const loadLeafletJS = (lat, lng) => {
      if (window.L) {
        initLeafletMap(lat, lng);
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
      script.integrity = 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=';
      script.crossOrigin = '';
      script.onload = () => {
        initLeafletMap(lat, lng);
      };
      document.body.appendChild(script);
    };

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        loadLeafletJS(lat, lng);
      },
      (error) => {
        console.error(
          'Geolocalização indisponível. Usando ponto padrão (Av. Paulista, SP): ',
          error
        );
        const defaultLat = -23.5617;
        const defaultLng = -46.656;
        loadLeafletJS(defaultLat, defaultLng);
      }
    );

    return () => {
      if (window.mapInstance) {
        window.mapInstance.remove();
        window.mapInstance = null;
      }
    };
  }, []);

  return (
    <div className="map-page-wrapper">
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

      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="text-center mb-4">
                <p className="text-muted leading-relaxed" style={{ fontSize: '1.1rem' }}>
                  Veja no mapa interativo abaixo os produtores familiares e parceiros mais próximos
                  da sua residência. Aceite a permissão de geolocalização para resultados baseados
                  no seu endereço.
                </p>
              </div>
              <div
                className="card shadow border-0 overflow-hidden"
                style={{ borderRadius: '15px' }}
              >
                <div id="map" ref={mapRef} style={{ height: '550px', width: '100%', zIndex: 1 }}>
                  <div className="d-flex align-items-center justify-content-center h-100 bg-light text-muted">
                    <div className="text-center">
                      <div
                        className="spinner-border spinner-border-sm mb-2 text-success"
                        role="status"
                      ></div>
                      <p className="mb-0">Carregando mapa interativo...</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MapPage;
