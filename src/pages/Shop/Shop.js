import './Shop.css';
import Form from 'react-bootstrap/Form';

import { useState } from 'react';
import MockProducts from './MockProducts';

function Shop() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("0");
  const [estadoSelecionado, setEstadoSelecionado] = useState("0");

  const produtos = MockProducts();

  const filtrarProdutos = () => {
    return produtos.filter((produto) => {
      const categoriaMatch = categoriaSelecionada === "0" || produto.category === categoriaSelecionada;
      const estadoMatch = estadoSelecionado === "0" || produto.origin === estadoSelecionado;
      return categoriaMatch && estadoMatch;
    });
  };

  return (
    <div id="ShopPage" className="bg-light min-vh-100">

      <section className="ud-page-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ud-banner-content">
                <h1>Nossos Parceiros</h1>
              </div>
            </div>
          </div>
        </div>
      </section>


      <div className="container py-5">

        <div className="row mb-5 justify-content-center">
          <div className="col-lg-10">
            <div className="card shadow-sm border-0 p-4" style={{ borderRadius: '15px' }}>
              <Form className="row g-3 align-items-center justify-content-between">
                <div className="col-md-4">
                  <Form.Label className="small text-muted mb-1 fw-bold">Filtrar por Estado</Form.Label>
                  <Form.Select
                    className="form-select rounded-pill px-3 py-2 border-secondary-subtle"
                    value={estadoSelecionado}
                    onChange={(e) => setEstadoSelecionado(e.target.value)}
                  >
                    <option value="0">Todos os Estados</option>
                    <option value="Acre">Acre</option>
                    <option value="Alagoas">Alagoas</option>
                    <option value="Amapá">Amapá</option>
                    <option value="Amazonas">Amazonas</option>
                    <option value="Bahia">Bahia</option>
                    <option value="Ceará">Ceará</option>
                    <option value="Distrito Federal">Distrito Federal</option>
                    <option value="Espírito Santo">Espírito Santo</option>
                    <option value="Goiás">Goiás</option>
                    <option value="Maranhão">Maranhão</option>
                    <option value="Mato Grosso">Mato Grosso</option>
                    <option value="Mato Grosso do Sul">Mato Grosso do Sul</option>
                    <option value="Minas Gerais">Minas Gerais</option>
                    <option value="Pará">Pará</option>
                    <option value="Paraíba">Paraíba</option>
                    <option value="Paraná">Paraná</option>
                    <option value="Pernambuco">Pernambuco</option>
                    <option value="Piauí">Piauí</option>
                    <option value="Rio de Janeiro">Rio de Janeiro</option>
                    <option value="Rio Grande do Norte">Rio Grande do Norte</option>
                    <option value="Rio Grande do Sul">Rio Grande do Sul</option>
                    <option value="Rondônia">Rondônia</option>
                    <option value="Roraima">Roraima</option>
                    <option value="Santa Catarina">Santa Catarina</option>
                    <option value="São Paulo">São Paulo</option>
                    <option value="Sergipe">Sergipe</option>
                    <option value="Tocantins">Tocantins</option>
                  </Form.Select>
                </div>
                
                <div className="col-md-4">
                  <Form.Label className="small text-muted mb-1 fw-bold">Filtrar por Categoria</Form.Label>
                  <Form.Select
                    className="form-select rounded-pill px-3 py-2 border-secondary-subtle"
                    value={categoriaSelecionada}
                    onChange={(e) => setCategoriaSelecionada(e.target.value)}
                  >
                    <option value="0">Todos os Produtos</option>
                    <option value="Frutas">Frutas</option>
                    <option value="Verduras">Verduras</option>
                    <option value="Produtos Animais">Produtos Animais</option>
                  </Form.Select>
                </div>

                <div className="col-md-3 text-md-end text-center pt-md-4">
                  <button 
                    type="button" 
                    className="ud-main-btn py-2 px-4 w-100" 
                    style={{ fontSize: '14px', borderRadius: '50px' }}
                  >
                    Quer se cadastrar?
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>


        <div className="row justify-content-center">
          <div className="col-lg-10">
            {filtrarProdutos().length > 0 ? (
              <div className="shop-grid">
                {filtrarProdutos().map((produto) => (
                  <div key={produto.id} className="shop-grid-item">
                    {produto.render()}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-5">
                <i className="bi bi-search" style={{ fontSize: '3rem', color: '#ccc' }}></i>
                <h3 className="mt-3 text-muted">Nenhum parceiro encontrado</h3>
                <p className="text-muted">Tente ajustar seus filtros de estado ou categoria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
