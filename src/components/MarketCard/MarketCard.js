
import React, { useState } from "react";
import './MarketCard.css'; 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

class MarketCard {
  constructor(id, name, category, origin, img) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.origin = origin;
    this.img = img;
  }
  
  render() {
    return <MarketCardComponent 
              id={this.id} 
              name={this.name} 
              category={this.category} 
              origin={this.origin} 
              img={this.img} 
            />;
  }
}

function MarketCardComponent({ id, name, category, origin, img }) {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const handleNavigateToProfile = () => {
    setShowModal(false);
    if (id) {
      navigate(`/perfil/${id}`);
    } else {
      console.error("ID do vendedor não fornecido para navegação.");
    }
  };

  return (
    <>
      <Card className="market-card shadow-sm h-100 border-0" onClick={handleShowModal}>
        <div className="overflow-hidden" style={{ height: '200px' }}>
          <Card.Img className="market-card-img" variant="top" src={img} alt={name} />
        </div>
        <Card.Body className="market-card-body">
          <p className="market-card-title"> {name} </p>
          <p className="market-card-origin">
            <i className="bi bi-geo-alt-fill me-1"></i> {origin}
          </p>
          <p className="market-card-category">
            {category}
          </p>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleCloseModal} id="modalVermais" centered>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={img} alt={name} style={{ width: '100%', marginBottom: '1.5rem', borderRadius: '12px', height: '250px', objectFit: 'cover' }} />
          <div className="d-flex gap-2 mb-3">
            <span className="badge bg-success-subtle text-success border border-success-subtle px-3 py-2 rounded-pill small">
              <i className="bi bi-tag-fill me-1"></i> Categoria: {category}
            </span>
            <span className="badge bg-primary-subtle text-primary border border-primary-subtle px-3 py-2 rounded-pill small">
              <i className="bi bi-geo-alt-fill me-1"></i> Origem: {origin}
            </span>
          </div>
          <p className="text-muted leading-relaxed" style={{ fontSize: '15px' }}>
            Este é um produtor local cadastrado na rede FarmGo. Os produtos disponibilizados são frescos, colhidos de forma sustentável e entregues diretamente a você. Acesse o perfil completo para ver o catálogo detalhado e iniciar um chat.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleCloseModal} id="closeBtn">
            Fechar
          </Button>
          <Button onClick={handleNavigateToProfile} id="verMaisBtn">
            Ver Perfil do Vendedor
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MarketCard;