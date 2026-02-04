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

    // First Time Buyer
    "nav.firstTime": "First-Time Buyers",
    "ftb.tagline": "First-Time Home Buyer Programs",
    "ftb.title": "Your First Home",
    "ftb.titleHighlight": "Is Closer Than You Think",
    "ftb.subtitle": "Florida offers several programs to help first-time buyers with down payments, closing costs, and favorable loan terms. Let me help you find the right program for your situation.",
    "ftb.cta": "Check My Eligibility",
    "ftb.whatLabel": "What Are These Programs?",
    "ftb.whatTitle": "First-Time Buyer Assistance",
    "ftb.whatDesc": "Florida has state and local programs designed to make homeownership accessible. These programs can provide down payment assistance, reduced interest rates, and help with closing costs.",
    "ftb.program1Title": "Florida Hometown Heroes",
    "ftb.program1Desc": "Up to 5% of the loan amount for down payment and closing costs for eligible community workers including teachers, healthcare workers, law enforcement, and more.",
    "ftb.program2Title": "Florida Assist (FL Assist)",
    "ftb.program2Desc": "A second mortgage of up to $10,000 at 0% interest, deferred until you sell, refinance, or pay off your first mortgage.",
    "ftb.program3Title": "HFA Preferred / HFA Advantage",
    "ftb.program3Desc": "Reduced mortgage insurance and down payment assistance for borrowers at or below 80% of area median income.",
    "ftb.program4Title": "USDA & VA Loans",
    "ftb.program4Desc": "Zero down payment options for eligible rural properties (USDA) or veterans and active military (VA).",
    "ftb.eligLabel": "Am I Eligible?",
    "ftb.eligTitle": "General Eligibility Requirements",
    "ftb.eligDesc": "Requirements vary by program, but here are common criteria:",
    "ftb.elig1": "First-time buyer (haven't owned a home in 3+ years)",
    "ftb.elig2": "Meet income limits (varies by county and program)",
    "ftb.elig3": "Minimum credit score (typically 620-640+)",
    "ftb.elig4": "Complete a homebuyer education course",
    "ftb.elig5": "Use the home as your primary residence",
    "ftb.elig6": "Meet purchase price limits for your county",
    "ftb.eligNote": "Not sure if you qualify? Fill out the form below and I'll review your situation personally.",
    "ftb.howLabel": "How It Works",
    "ftb.howTitle": "Getting Started Is Easy",
    "ftb.step1Title": "Share Your Info",
    "ftb.step1Desc": "Fill out the qualification form with basic details about your income, credit, and goals.",
    "ftb.step2Title": "I Review & Research",
    "ftb.step2Desc": "I'll analyze which programs you may qualify for and identify the best options.",
    "ftb.step3Title": "We Connect",
    "ftb.step3Desc": "I'll reach out to discuss your options and connect you with trusted lenders who specialize in these programs.",
    "ftb.formLabel": "Free & No Obligation",
    "ftb.formTitle": "Check Your Eligibility",
    "ftb.formSubtitle": "Tell me about your situation.",
    "ftb.income": "Estimated annual household income",
    "ftb.credit": "Estimated credit score range",
    "ftb.creditSelect": "Select range",
    "ftb.credit1": "Excellent (740+)",
    "ftb.credit2": "Good (700-739)",
    "ftb.credit3": "Fair (640-699)",
    "ftb.credit4": "Below 640",
    "ftb.credit5": "Not sure",
    "ftb.employment": "Employment status",
    "ftb.employmentSelect": "Select status",
    "ftb.emp1": "W-2 Employee",
    "ftb.emp2": "Self-Employed",
    "ftb.emp3": "1099 Contractor",
    "ftb.emp4": "Other",
    "ftb.county": "Which Florida county are you looking in?",
    "ftb.notes": "Anything else I should know? (optional)",
    "ftb.submit": "Check My Eligibility",
    "ftb.thanks": "Request Received!",
    "ftb.thanksMsg": "I'll review your info and reach out within 24 hours.",
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

    // First Time Buyer
    "nav.firstTime": "Compradores Primerizos",
    "ftb.tagline": "Programas para Compradores Primerizos",
    "ftb.title": "Tu Primera Casa",
    "ftb.titleHighlight": "Está Más Cerca de Lo Que Crees",
    "ftb.subtitle": "Florida ofrece varios programas para ayudar a compradores primerizos con el pago inicial, costos de cierre y términos de préstamo favorables. Déjame ayudarte a encontrar el programa adecuado.",
    "ftb.cta": "Verificar Mi Elegibilidad",
    "ftb.whatLabel": "¿Qué Son Estos Programas?",
    "ftb.whatTitle": "Asistencia para Compradores Primerizos",
    "ftb.whatDesc": "Florida tiene programas estatales y locales diseñados para hacer accesible la compra de vivienda. Estos programas pueden proporcionar asistencia para el pago inicial, tasas de interés reducidas y ayuda con los costos de cierre.",
    "ftb.program1Title": "Florida Hometown Heroes",
    "ftb.program1Desc": "Hasta el 5% del monto del préstamo para pago inicial y costos de cierre para trabajadores comunitarios elegibles incluyendo maestros, trabajadores de salud, policías y más.",
    "ftb.program2Title": "Florida Assist (FL Assist)",
    "ftb.program2Desc": "Una segunda hipoteca de hasta $10,000 al 0% de interés, diferida hasta que vendas, refinancies o pagues tu primera hipoteca.",
    "ftb.program3Title": "HFA Preferred / HFA Advantage",
    "ftb.program3Desc": "Seguro hipotecario reducido y asistencia para pago inicial para prestatarios en o por debajo del 80% del ingreso medio del área.",
    "ftb.program4Title": "Préstamos USDA y VA",
    "ftb.program4Desc": "Opciones sin pago inicial para propiedades rurales elegibles (USDA) o veteranos y militares activos (VA).",
    "ftb.eligLabel": "¿Soy Elegible?",
    "ftb.eligTitle": "Requisitos Generales de Elegibilidad",
    "ftb.eligDesc": "Los requisitos varían por programa, pero estos son criterios comunes:",
    "ftb.elig1": "Comprador primerizo (no ha sido propietario en 3+ años)",
    "ftb.elig2": "Cumplir límites de ingresos (varía por condado y programa)",
    "ftb.elig3": "Puntaje de crédito mínimo (típicamente 620-640+)",
    "ftb.elig4": "Completar un curso de educación para compradores",
    "ftb.elig5": "Usar la casa como residencia principal",
    "ftb.elig6": "Cumplir límites de precio de compra para tu condado",
    "ftb.eligNote": "¿No estás seguro si calificas? Llena el formulario y revisaré tu situación personalmente.",
    "ftb.howLabel": "Cómo Funciona",
    "ftb.howTitle": "Comenzar Es Fácil",
    "ftb.step1Title": "Comparte Tu Información",
    "ftb.step1Desc": "Llena el formulario con detalles básicos sobre tus ingresos, crédito y metas.",
    "ftb.step2Title": "Yo Reviso e Investigo",
    "ftb.step2Desc": "Analizaré para qué programas podrías calificar e identificaré las mejores opciones.",
    "ftb.step3Title": "Nos Conectamos",
    "ftb.step3Desc": "Me comunicaré para discutir tus opciones y conectarte con prestamistas de confianza especializados en estos programas.",
    "ftb.formLabel": "Gratis y Sin Compromiso",
    "ftb.formTitle": "Verifica Tu Elegibilidad",
    "ftb.formSubtitle": "Cuéntame sobre tu situación.",
    "ftb.income": "Ingreso anual estimado del hogar",
    "ftb.credit": "Rango de puntaje de crédito estimado",
    "ftb.creditSelect": "Selecciona rango",
    "ftb.credit1": "Excelente (740+)",
    "ftb.credit2": "Bueno (700-739)",
    "ftb.credit3": "Regular (640-699)",
    "ftb.credit4": "Menor de 640",
    "ftb.credit5": "No estoy seguro",
    "ftb.employment": "Estado de empleo",
    "ftb.employmentSelect": "Selecciona estado",
    "ftb.emp1": "Empleado W-2",
    "ftb.emp2": "Autoempleado",
    "ftb.emp3": "Contratista 1099",
    "ftb.emp4": "Otro",
    "ftb.county": "¿En qué condado de Florida estás buscando?",
    "ftb.notes": "¿Algo más que deba saber? (opcional)",
    "ftb.submit": "Verificar Mi Elegibilidad",
    "ftb.thanks": "¡Solicitud Recibida!",
    "ftb.thanksMsg": "Revisaré tu información y me comunicaré en 24 horas.",
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
