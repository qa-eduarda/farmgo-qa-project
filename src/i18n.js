import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  pt: {
    translation: {
      "events_title": "Eventos e Promoções",
      "events_description": "Acompanhe os feirões, festivais e ofertas especiais lançadas diretamente pelos nossos produtores locais. Apoie a agricultura familiar consumindo produtos de qualidade com descontos incríveis.",
      "view_seller_details": "Ver Detalhes do Vendedor"
    }
  },
  en: {
    translation: {
      "events_title": "Events and Promotions",
      "events_description": "Follow the street markets, festivals and special offers launched directly by our local producers. Support family farming by consuming quality products with amazing discounts.",
      "view_seller_details": "View Seller Details"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt',
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
