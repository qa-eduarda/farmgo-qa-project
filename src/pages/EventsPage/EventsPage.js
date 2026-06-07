
import React from 'react';
import './EventsPage.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const mockEvents = [
  {
    id: 1,
    title: 'Promoção de Orgânicos da Fazenda Sol Nascente',
    description: 'Descontos de até 30% em todas as frutas e verduras orgânicas. Aproveite!',
    sellerName: 'Fazenda Sol Nascente',
    img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=600&h=400',
    endDate: '2026-06-15',
    sellerId: 'fazenda-avela'
  },
  {
    id: 2,
    title: 'Festival do Morango na Horta Feliz',
    description: 'Morangos frescos e deliciosos direto do produtor. Venha conferir nossas geleias e doces!',
    sellerName: 'Horta Feliz',
    img: 'https://images.unsplash.com/photo-1518635017498-87f514b751ba?auto=format&fit=crop&q=80&w=600&h=400',
    endDate: '2026-06-20',
    sellerId: 'canteiro-de-frutas'
  },
  {
    id: 3,
    title: 'Queima de Estoque: Queijos Artesanais',
    description: 'Grandes ofertas em queijos frescais, curados e laticínios artesanais. Estoque limitado!',
    sellerName: 'Queijaria do Vale',
    img: 'https://images.unsplash.com/photo-1552767059-ce182ead6c1b?auto=format&fit=crop&q=80&w=600&h=400',
    endDate: '2026-06-10',
    sellerId: 'granja-boa-vista'
  }
];

function EventsPage() {
  const { t } = useTranslation();

  return (
    <div className="events-page-wrapper bg-light min-vh-100">

      <section className="ud-page-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ud-banner-content">
                <h1>{t('events_title')}</h1>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Container className="events-page-container py-5">
        <div className="text-center mb-5">
          <p className="text-muted leading-relaxed" style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto' }}>
            {t('events_description')}
          </p>
        </div>
        
        <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
          {mockEvents.map(event => (
            <Col key={event.id} className="d-flex">
              <Card className="event-card shadow-sm border-0 w-100" style={{ borderRadius: '12px', overflow: 'hidden' }}>
                <div className="overflow-hidden" style={{ height: '220px' }}>
                  <Card.Img 
                    variant="top" 
                    src={event.img} 
                    alt={event.title} 
                    style={{ height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                    className="event-card-img"
                  />
                </div>
                <Card.Body className="d-flex flex-column p-4">
                  <Card.Title className="font-weight-bold text-dark mb-2" style={{ fontSize: '1.2rem', fontFamily: 'Inter, sans-serif' }}>
                    {event.title}
                  </Card.Title>
                  <Card.Subtitle className="mb-3 text-muted small">
                    <i className="bi bi-shop me-1 text-success"></i> Oferecido por: <strong>{event.sellerName}</strong>
                  </Card.Subtitle>
                  <Card.Text className="text-muted mb-4" style={{ fontSize: '14px', flexGrow: 1 }}>
                    {event.description}
                  </Card.Text>
                  <Card.Text className="border-top pt-3 mt-auto">
                    <small className="text-danger fw-bold">
                      <i className="bi bi-calendar-event-fill me-1"></i> Válido até: {new Date(event.endDate).toLocaleDateString()}
                    </small>
                  </Card.Text>
                  <Link 
                    to={`/perfil/${event.sellerId}`} 
                    className="ud-main-btn mt-2 py-2 w-100 text-center text-white d-block"
                    style={{ fontSize: '14px', borderRadius: '50px', border: 'none', textDecoration: 'none' }}
                  >
                    {t('view_seller_details')}
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default EventsPage;