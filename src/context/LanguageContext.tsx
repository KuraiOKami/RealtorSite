"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type Language = "en" | "es";

type LanguageContextType = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
};

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    "nav.about": "About",
    "nav.services": "Services",
    "nav.homeValue": "Home Value",
    "nav.contact": "Contact Me",

    // Hero
    "hero.tagline": "La Rosa Realty — Polk County & All of Florida",
    "hero.firstName": "IVAN",
    "hero.lastName": "MARTINEZ",
    "hero.subtitle": "Helping you buy, sell, and find your place in Florida.",
    "hero.cta": "Get in Touch",
    "hero.learnMore": "Learn More",
    "hero.scroll": "Scroll",

    // Contact form
    "contact.title": "Let's Connect",
    "contact.subtitle": "Tell me about your real estate goals.",
    "contact.name": "Full name",
    "contact.email": "Email address",
    "contact.phone": "Phone number",
    "contact.message": "How can I help you?",
    "contact.submit": "Get in Touch",
    "contact.thanks": "Thank you!",
    "contact.thanksMsg": "I'll be in touch shortly.",

    // About
    "about.label": "About Me",
    "about.name": "Ivan Martinez",
    "about.title": "Realtor® · La Rosa Realty",
    "about.bio1": "I'm a Florida-based realtor with deep roots in Polk County and a reach that extends across the entire state. My approach is simple: listen first, then deliver results. Whether you're a first-time buyer navigating the market or a seller looking for top dollar, I bring the local knowledge and statewide connections to make your real estate goals a reality.",
    "about.bio2": "I believe everyone deserves a place to call home — and I work tirelessly to make that happen for every client I serve.",
    "about.statewide": "Statewide",
    "about.homeCounty": "Home County",
    "about.clientFirst": "Client-First",

    // Services
    "services.label": "What I Offer",
    "services.title": "Services",
    "services.buy": "Buy a Home",
    "services.buyDesc": "From your first home to your forever home, I'll guide you through every step of the buying process across Florida.",
    "services.sell": "Sell Your Home",
    "services.sellDesc": "Strategic pricing, professional marketing, and skilled negotiation to get you the best return on your investment.",
    "services.market": "Market Analysis",
    "services.marketDesc": "Data-driven insights on property values, market trends, and neighborhood comparisons to inform your decisions.",
    "services.relocation": "Relocation Help",
    "services.relocationDesc": "Moving to Florida? I'll help you find the right community, school district, and home — no matter where in the state.",

    // Home Value section
    "homeValue.label": "For Sellers",
    "homeValue.title": "What's Your Home",
    "homeValue.titleHighlight": "Worth?",
    "homeValue.description": "Thinking about selling? Get a free, no-obligation market analysis of your property. I'll provide you with a detailed report on your home's current value based on recent sales in your area.",
    "homeValue.free": "Free",
    "homeValue.noObligation": "No obligation",
    "homeValue.response": "24hr",
    "homeValue.responseTime": "Response time",
    "homeValue.cma": "CMA",
    "homeValue.detailedReport": "Detailed report",
    "homeValue.formTitle": "Get Your Free Valuation",
    "homeValue.formSubtitle": "Tell me about your property.",
    "homeValue.address": "Property address",
    "homeValue.bedrooms": "Bedrooms",
    "homeValue.bathrooms": "Bathrooms",
    "homeValue.notes": "Any updates or features? (optional)",
    "homeValue.submit": "Get My Home Value",
    "homeValue.thanks": "Request Received!",
    "homeValue.thanksMsg": "I'll send your home valuation within 24 hours.",

    // Footer
    "footer.rights": "All rights reserved.",
  },
  es: {
    // Navbar
    "nav.about": "Sobre Mí",
    "nav.services": "Servicios",
    "nav.homeValue": "Valor de Casa",
    "nav.contact": "Contáctame",

    // Hero
    "hero.tagline": "La Rosa Realty — Condado de Polk y Todo Florida",
    "hero.firstName": "IVAN",
    "hero.lastName": "MARTINEZ",
    "hero.subtitle": "Te ayudo a comprar, vender y encontrar tu lugar en Florida.",
    "hero.cta": "Contáctame",
    "hero.learnMore": "Más Información",
    "hero.scroll": "Desliza",

    // Contact form
    "contact.title": "Conectemos",
    "contact.subtitle": "Cuéntame sobre tus metas de bienes raíces.",
    "contact.name": "Nombre completo",
    "contact.email": "Correo electrónico",
    "contact.phone": "Número de teléfono",
    "contact.message": "¿Cómo puedo ayudarte?",
    "contact.submit": "Enviar Mensaje",
    "contact.thanks": "¡Gracias!",
    "contact.thanksMsg": "Me pondré en contacto contigo pronto.",

    // About
    "about.label": "Sobre Mí",
    "about.name": "Ivan Martinez",
    "about.title": "Realtor® · La Rosa Realty",
    "about.bio1": "Soy un agente de bienes raíces en Florida con raíces profundas en el Condado de Polk y un alcance que se extiende por todo el estado. Mi enfoque es simple: escuchar primero, luego entregar resultados. Ya sea que seas un comprador primerizo navegando el mercado o un vendedor buscando el mejor precio, traigo el conocimiento local y las conexiones estatales para hacer realidad tus metas de bienes raíces.",
    "about.bio2": "Creo que todos merecen un lugar al que llamar hogar — y trabajo incansablemente para que eso suceda para cada cliente que sirvo.",
    "about.statewide": "Todo el Estado",
    "about.homeCounty": "Condado Local",
    "about.clientFirst": "Cliente Primero",

    // Services
    "services.label": "Lo Que Ofrezco",
    "services.title": "Servicios",
    "services.buy": "Comprar Casa",
    "services.buyDesc": "Desde tu primera casa hasta tu hogar definitivo, te guiaré en cada paso del proceso de compra en Florida.",
    "services.sell": "Vender Tu Casa",
    "services.sellDesc": "Precios estratégicos, marketing profesional y negociación experta para obtener el mejor retorno de tu inversión.",
    "services.market": "Análisis de Mercado",
    "services.marketDesc": "Información basada en datos sobre valores de propiedades, tendencias del mercado y comparaciones de vecindarios.",
    "services.relocation": "Ayuda de Reubicación",
    "services.relocationDesc": "¿Te mudas a Florida? Te ayudaré a encontrar la comunidad, el distrito escolar y la casa adecuada.",

    // Home Value section
    "homeValue.label": "Para Vendedores",
    "homeValue.title": "¿Cuánto Vale",
    "homeValue.titleHighlight": "Tu Casa?",
    "homeValue.description": "¿Pensando en vender? Obtén un análisis de mercado gratuito y sin compromiso de tu propiedad. Te proporcionaré un informe detallado sobre el valor actual de tu casa basado en ventas recientes en tu área.",
    "homeValue.free": "Gratis",
    "homeValue.noObligation": "Sin compromiso",
    "homeValue.response": "24hr",
    "homeValue.responseTime": "Tiempo de respuesta",
    "homeValue.cma": "CMA",
    "homeValue.detailedReport": "Informe detallado",
    "homeValue.formTitle": "Obtén Tu Valuación Gratis",
    "homeValue.formSubtitle": "Cuéntame sobre tu propiedad.",
    "homeValue.address": "Dirección de la propiedad",
    "homeValue.bedrooms": "Habitaciones",
    "homeValue.bathrooms": "Baños",
    "homeValue.notes": "¿Actualizaciones o características? (opcional)",
    "homeValue.submit": "Obtener Valor de Mi Casa",
    "homeValue.thanks": "¡Solicitud Recibida!",
    "homeValue.thanksMsg": "Te enviaré la valuación de tu casa en 24 horas.",

    // Footer
    "footer.rights": "Todos los derechos reservados.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[lang][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
