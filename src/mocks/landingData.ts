
export const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CEO",
    company: "TechFlow Inc",
    avatar: "https://readdy.ai/api/search-image?query=professional%20asian%20woman%20ceo%20business%20portrait%20clean%20white%20background%20corporate%20headshot%20confident%20smile&width=120&height=120&seq=testimonial1&orientation=squarish",
    content: "FlowMetrics transformó la forma en que seguimos el rendimiento de nuestro negocio. Los datos en tiempo real nos ayudaron a aumentar los ingresos un 34% en solo tres meses."
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Director de Crecimiento",
    company: "Startup Labs",
    avatar: "https://readdy.ai/api/search-image?query=professional%20hispanic%20man%20business%20portrait%20clean%20white%20background%20corporate%20headshot%20friendly%20smile&width=120&height=120&seq=testimonial2&orientation=squarish",
    content: "Los reportes automáticos nos ahorran más de 10 horas cada semana. El dashboard es intuitivo y la visualización de datos es exactamente lo que necesitábamos."
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Directora de Marketing",
    company: "Digital Ventures",
    avatar: "https://readdy.ai/api/search-image?query=professional%20caucasian%20woman%20marketing%20director%20portrait%20clean%20white%20background%20corporate%20headshot%20warm%20smile&width=120&height=120&seq=testimonial3&orientation=squarish",
    content: "La mejor plataforma de analítica que hemos usado. Las funciones de seguimiento de conversiones son increíblemente potentes y fáciles de entender. ¡Totalmente recomendada!"
  }
];

export const pricingPlans = [
  {
    id: "starter",
    name: "Inicial",
    price: 29,
    description: "Perfecto para pequeñas empresas que están comenzando",
    features: [
      "Hasta 10.000 eventos mensuales",
      "Dashboard de analítica en tiempo real",
      "Retención de datos 7 días",
      "Soporte por correo",
      "Reportes básicos"
    ],
    popular: false
  },
  {
    id: "growth",
    name: "Crecimiento",
    price: 79,
    description: "Para equipos en expansión que necesitan más potencia",
    features: [
      "Hasta 100.000 eventos mensuales",
      "Analítica avanzada e insights",
      "Retención de datos 90 días",
      "Soporte prioritario",
      "Reportes personalizados",
      "Acceso a API",
      "Colaboración en equipo"
    ],
    popular: true
  },
  {
    id: "pro",
    name: "Pro",
    price: 199,
    description: "Solución de analítica de nivel empresarial",
    features: [
      "Eventos mensuales ilimitados",
      "Predicciones con inteligencia artificial",
      "Retención de datos ilimitada",
      "Soporte dedicado 24/7",
      "Reportes con marca blanca",
      "Acceso avanzado a API",
      "SSO e integraciones personalizadas",
      "Pipelines de datos a medida"
    ],
    popular: false
  }
];

export const features = [
  {
    id: 1,
    title: "Analítica en Tiempo Real",
    description: "Monitorea el rendimiento de tu negocio con actualizaciones de datos en vivo e insights instantáneos",
    icon: "ri-line-chart-line"
  },
  {
    id: 2,
    title: "Seguimiento de Conversiones",
    description: "Rastrea cada conversión y optimiza tu embudo para obtener el máximo rendimiento",
    icon: "ri-funnel-line"
  },
  {
    id: 3,
    title: "Monitor de Campañas",
    description: "Mide el rendimiento de tus campañas en todos los canales desde un dashboard unificado",
    icon: "ri-megaphone-line"
  },
  {
    id: 4,
    title: "Reportes Automáticos",
    description: "Recibe reportes detallados entregados automáticamente en tu bandeja de entrada cada semana",
    icon: "ri-file-chart-line"
  }
];

export const benefits = [
  {
    id: 1,
    title: "Insights en Tiempo Real",
    description: "Obtén visibilidad instantánea de las métricas de tu negocio con actualizaciones en vivo y alertas inteligentes",
    icon: "ri-dashboard-line",
    stat: "99.9%",
    statLabel: "Uptime garantizado"
  },
  {
    id: 2,
    title: "Reportes Automáticos",
    description: "Ahorra horas cada semana con reportes automatizados que entregan insights directamente en tu correo",
    icon: "ri-file-check-line",
    stat: "10h+",
    statLabel: "Ahorro semanal"
  },
  {
    id: 3,
    title: "Predicciones Inteligentes",
    description: "Aprovecha la analítica impulsada por IA para predecir tendencias y tomar decisiones basadas en datos",
    icon: "ri-brain-line",
    stat: "94%",
    statLabel: "Precisión predictiva"
  },
  {
    id: 4,
    title: "Integraciones Fáciles",
    description: "Conecta con más de 50 herramientas que ya usas en minutos, sin necesidad de código ni configuración técnica",
    icon: "ri-plug-line",
    stat: "50+",
    statLabel: "Integraciones disponibles"
  }
];

export const howItWorksSteps = [
  {
    id: 1,
    title: "Conecta tus datos",
    description: "Integra con tus herramientas existentes en minutos con nuestro proceso de configuración sencillo"
  },
  {
    id: 2,
    title: "Analiza el rendimiento",
    description: "Observa cómo FlowMetrics organiza y visualiza automáticamente todos tus datos"
  },
  {
    id: 3,
    title: "Optimiza tu crecimiento",
    description: "Usa insights accionables para tomar decisiones más inteligentes y crecer más rápido"
  }
];
