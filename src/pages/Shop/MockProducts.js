import MarketCard from '../../components/MarketCard/MarketCard';

function MockProducts() {
  return [
    new MarketCard("fazenda-avela", "Fazenda Avelã", "Frutas", "Bahia", "https://agfeed.com.br/wp-content/uploads/2023/12/fazenda-porteira.jpg"),
    new MarketCard("canteiro-de-frutas", "Canteiro de Frutas", "Frutas", "Santa Catarina", "https://blog4.mfrural.com.br/wp-content/uploads/2020/02/fazendas.jpg"),
    new MarketCard("fazenda-sao-jorge", "Fazenda São Jorge", "Frutas", "Minas Gerais", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1uHVmVE1NlwR79f6T-EFher1Bti4t_HVBRw&s"),
    new MarketCard("caverna-das-uvas", "Caverna das Uvas", "Frutas", "Rio Grande do Sul", "https://cf.bstatic.com/xdata/images/hotel/max1024x768/447802176.jpg?k=f0b6fb5091a4086673b7f60bb6b847c558c857f6628cc0167bb37f4679ba3fbd&o=&hp=1"),
    
    new MarketCard("granja-boa-vista", "Granja Boa Vista", "Produtos Animais", "Paraná", "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=600&q=80"),
    new MarketCard("sitio-tradicao", "Sítio Tradição", "Produtos Animais", "São Paulo", "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80"),
    new MarketCard("fazenda-beira-mar", "Fazenda Beira-Mar", "Produtos Animais", "Rio de Janeiro", "https://png.pngtree.com/thumb_back/fw800/background/20220926/pngtree-free-range-pig-farming-pig-farm-animals-grain-photo-image_33960204.jpg"),
    new MarketCard("estancia-do-sol", "Estância do Sol", "Produtos Animais", "Goiás", "https://img.freepik.com/fotos-gratis/bela-foto-de-galinhas-na-grama-da-fazenda-em-um-dia-ensolarado_181624-11060.jpg"),
    
    new MarketCard("horta-do-vale", "Horta do Vale", "Verduras", "Pernambuco", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo65llie32uDYgttky7z2eYhRox9LohgPVaA&s"),
    new MarketCard("chacara-verde", "Chácara Verde", "Verduras", "Espírito Santo", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO7Fw0GiL3JW_OZr6LPs_V_tGwJwYxb9_FGg&s"),
    new MarketCard("fazenda-exotica", "Fazenda Exótica", "Verduras", "Mato Grosso", "https://d2yghbees9788u.cloudfront.net/agrishow/2024/09/fazendas-verticais.jpg"),
    new MarketCard("sitio-mangueira", "Sítio Mangueira", "Verduras", "Pará", "https://ciclovivo.com.br/wp-content/uploads/2019/11/mercedes-benz-inaugura-primeira-fazenda-urbana-dentro-de-uma-fabrica-begreen-ciclovivo-divulgacao.jpg"),
  
    new MarketCard("fazenda-verde", "Fazenda Verde", "Frutas", "Bahia", "https://agfeed.com.br/wp-content/uploads/2023/12/fazenda-porteira.jpg"),
    new MarketCard("laranja-do-sul", "Laranja do Sul", "Frutas", "Santa Catarina", "https://blog4.mfrural.com.br/wp-content/uploads/2020/02/fazendas.jpg"),
    new MarketCard("vinicola-sao-pedro", "Vinícola São Pedro", "Frutas", "Minas Gerais", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1uHVmVE1NlwR79f6T-EFher1Bti4t_HVBRw&s"),
    new MarketCard("fazenda-sao-paulo", "Fazenda São Paulo", "Frutas", "Rio Grande do Sul", "https://cf.bstatic.com/xdata/images/hotel/max1024x768/447802176.jpg?k=f0b6fb5091a4086673b7f60bb6b847c558c857f6628cc0167bb37f4679ba3fbd&o=&hp=1"),
  
    new MarketCard("granja-boa-vista-2", "Granja Boa Vista", "Produtos Animais", "Rio de Janeiro", "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=600&q=80"),
    new MarketCard("sitio-tradicao-2", "Sítio Tradição", "Produtos Animais", "São Paulo", "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80"),
    new MarketCard("estancia-do-sol-2", "Estância do Sol", "Produtos Animais", "Goiás", "https://img.freepik.com/fotos-gratis/bela-foto-de-galinhas-na-grama-da-fazenda-em-um-dia-ensolarado_181624-11060.jpg"),
    new MarketCard("fazenda-beira-mar-2", "Fazenda Beira-Mar", "Produtos Animais", "Paraná", "https://png.pngtree.com/thumb_back/fw800/background/20220926/pngtree-free-range-pig-farming-pig-farm-animals-grain-photo-image_33960204.jpg"),
    
    new MarketCard("horta-do-vale-2", "Horta do Vale", "Verduras", "Bahia", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo65llie32uDYgttky7z2eYhRox9LohgPVaA&s"),
    new MarketCard("chacara-verde-2", "Chácara Verde", "Verduras", "Pernambuco", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO7Fw0GiL3JW_OZr6LPs_V_tGwJwYxb9_FGg&s"),
    new MarketCard("sitio-mangueira-2", "Sítio Mangueira", "Verduras", "Minas Gerais", "https://d2yghbees9788u.cloudfront.net/agrishow/2024/09/fazendas-verticais.jpg"),
    new MarketCard("fazenda-exotica-2", "Fazenda Exótica", "Verduras", "São Paulo", "https://ciclovivo.com.br/wp-content/uploads/2019/11/mercedes-benz-inaugura-primeira-fazenda-urbana-dentro-de-uma-fabrica-begreen-ciclovivo-divulgacao.jpg"),
  
    new MarketCard("fazenda-verde-2", "Fazenda Verde", "Frutas", "Mato Grosso", "https://agfeed.com.br/wp-content/uploads/2023/12/fazenda-porteira.jpg"),
    new MarketCard("vinicola-sao-pedro-2", "Vinícola São Pedro", "Frutas", "Goiás", "https://blog4.mfrural.com.br/wp-content/uploads/2020/02/fazendas.jpg"),
    new MarketCard("fazenda-sao-jorge-2", "Fazenda São Jorge", "Frutas", "Rio Grande do Sul", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1uHVmVE1NlwR79f6T-EFher1Bti4t_HVBRw&s"),
    new MarketCard("canteiro-de-frutas-2", "Canteiro de Frutas", "Frutas", "Santa Catarina", "https://cf.bstatic.com/xdata/images/hotel/max1024x768/447802176.jpg?k=f0b6fb5091a4086673b7f60bb6b847c558c857f6628cc0167bb37f4679ba3fbd&o=&hp=1"),
  
    new MarketCard("fazenda-boa-vista", "Fazenda Boa Vista", "Produtos Animais", "Paraná", "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=600&q=80"),
    new MarketCard("estancia-do-sol-3", "Estância do Sol", "Produtos Animais", "Minas Gerais", "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80"),
    new MarketCard("granja-boa-vista-3", "Granja Boa Vista", "Produtos Animais", "São Paulo", "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=600&q=80"),
    new MarketCard("fazenda-beira-mar-3", "Fazenda Beira-Mar", "Produtos Animais", "Rio de Janeiro", "https://png.pngtree.com/thumb_back/fw800/background/20220926/pngtree-free-range-pig-farming-pig-farm-animals-grain-photo-image_33960204.jpg"),
  
    new MarketCard("chacara-verde-3", "Chácara Verde", "Verduras", "Pará", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo65llie32uDYgttky7z2eYhRox9LohgPVaA&s"),
    new MarketCard("fazenda-exotica-3", "Fazenda Exótica", "Verduras", "Espírito Santo", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO7Fw0GiL3JW_OZr6LPs_V_tGwJwYxb9_FGg&s"),
    new MarketCard("sitio-mangueira-3", "Sítio Mangueira", "Verduras", "São Paulo", "https://d2yghbees9788u.cloudfront.net/agrishow/2024/09/fazendas-verticais.jpg"),
    new MarketCard("horta-do-vale-3", "Horta do Vale", "Verduras", "Pará", "https://ciclovivo.com.br/wp-content/uploads/2019/11/mercedes-benz-inaugura-primeira-fazenda-urbana-dentro-de-uma-fabrica-begreen-ciclovivo-divulgacao.jpg"),
  
    new MarketCard("fazenda-sao-jorge-3", "Fazenda São Jorge", "Frutas", "Minas Gerais", "https://agfeed.com.br/wp-content/uploads/2023/12/fazenda-porteira.jpg"),
    new MarketCard("caverna-das-uvas-2", "Caverna das Uvas", "Frutas", "Pará", "https://blog4.mfrural.com.br/wp-content/uploads/2020/02/fazendas.jpg"),
    new MarketCard("vinicola-sao-pedro-3", "Vinícola São Pedro", "Frutas", "Goiás", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1uHVmVE1NlwR79f6T-EFher1Bti4t_HVBRw&s"),
    new MarketCard("canteiro-de-frutas-3", "Canteiro de Frutas", "Frutas", "Rio Grande do Sul", "https://cf.bstatic.com/xdata/images/hotel/max1024x768/447802176.jpg?k=f0b6fb5091a4086673b7f60bb6b847c558c857f6628cc0167bb37f4679ba3fbd&o=&hp=1"),
  
    new MarketCard("sitio-tradicao-3", "Sítio Tradição", "Produtos Animais", "Santa Catarina", "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80"),
    new MarketCard("estancia-do-sol-4", "Estância do Sol", "Produtos Animais", "Pará", "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80"),
    new MarketCard("fazenda-beira-mar-4", "Fazenda Beira-Mar", "Produtos Animais", "Minas Gerais", "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=600&q=80"),
    new MarketCard("granja-boa-vista-4", "Granja Boa Vista", "Produtos Animais", "Goiás", "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=600&q=80"),
  
    new MarketCard("chacara-verde-4", "Chácara Verde", "Verduras", "Rio de Janeiro", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo65llie32uDYgttky7z2eYhRox9LohgPVaA&s"),
    new MarketCard("fazenda-exotica-4", "Fazenda Exótica", "Verduras", "Bahia", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO7Fw0GiL3JW_OZr6LPs_V_tGwJwYxb9_FGg&s"),
    new MarketCard("sitio-mangueira-4", "Sítio Mangueira", "Verduras", "São Paulo", "https://d2yghbees9788u.cloudfront.net/agrishow/2024/09/fazendas-verticais.jpg"),
    new MarketCard("horta-do-vale-4", "Horta do Vale", "Verduras", "Pará", "https://ciclovivo.com.br/wp-content/uploads/2019/11/mercedes-benz-inaugura-primeira-fazenda-urbana-dentro-de-uma-fabrica-begreen-ciclovivo-divulgacao.jpg")
  ];
}

export default MockProducts;