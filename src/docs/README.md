# Arquitectura Técnica – FlowMetrics

Documento descriptivo de la arquitectura y funcionamiento interno del sistema.


FlowMetrics está construido como una aplicación SPA (Single Page Application) utilizando React 19 con TypeScript, lo que permite desarrollar una interfaz moderna, interactiva y tipada para mayor seguridad y escalabilidad. El proyecto se monta sobre Vite como herramienta de desarrollo y build, optimizando velocidad tanto en entorno local como en producción.

El sistema de estilos se basa en Tailwind CSS, con una identidad visual coherente apoyada en una paleta tierra personalizada (#C4704B, #B8860B, #7C9070) y uso estratégico de gradientes. Para visualización de datos se utiliza Recharts, integrando AreaChart, LineChart, BarChart y PieChart para representar métricas del negocio de forma dinámica. La navegación se gestiona con React Router DOM y la internacionalización con react-i18next, actualmente configurado en español.

La estructura del proyecto está organizada de manera modular dentro de src/, separando claramente páginas (landing, auth, dashboard), componentes reutilizables, contexto global, datos mock temporales, configuración de rutas y sistema de traducción. Esto facilita mantenibilidad y escalabilidad futura.

La Landing Page está pensada como capa comercial del producto. Incluye Hero Section con propuesta de valor clara y CTA principal, sección de beneficios en grid, explicación del onboarding en tres pasos, testimonios, planes de precios y un CTA final. Está diseñada para conversión, no solo presentación visual.

El sistema de autenticación actualmente es simulado mediante un UserContext. Las rutas /login, /register y /forgot-password gestionan el flujo de acceso, almacenando el usuario en contexto global y redirigiendo al dashboard. No existe aún backend real, por lo que el estado se mantiene en memoria.

El Dashboard representa el núcleo funcional del producto. Está estructurado con sidebar lateral, header superior y área dinámica de contenido. Dentro de la sección Overview se muestran métricas clave del negocio.

Las tarjetas superiores incluyen cuatro indicadores:

Ingresos Totales (reactivo), calculado dinámicamente a partir de SalesContext mediante reduce y optimizado con useMemo.

Crecimiento Mensual (mock estático).

Usuarios Activos (mock estático).

Tasa de Conversión (mock estático con fórmula conceptual definida).

El gráfico de ingresos por mes es reactivo y agrupa ventas por mes utilizando useMemo, recalculándose automáticamente cuando se agrega una venta nueva. Representa los datos con un AreaChart y gradiente personalizado.

El gráfico de canales principales utiliza un PieChart con datos mock para mostrar distribución de adquisición.

La tabla de últimas ventas es completamente reactiva: muestra las 8 ventas más recientes y permite agregar nuevas ventas mediante un modal que despacha la acción ADD_SALE al reducer global. Al registrarse una venta, se actualizan automáticamente tarjetas, gráficos y tabla.

La sección Analytics amplía el análisis con filtros por rango de fechas, tipo de métrica y segmento de usuarios. Incluye gráficos de vistas de página, visitantes únicos y tasa de rebote, además de un resumen de rendimiento con métricas interpretables como duración media de sesión, páginas por sesión, tasa de cumplimiento de objetivos y satisfacción del cliente.

Las secciones Customers, Billing y Settings están definidas conceptualmente como módulos de expansión para gestión de clientes, facturación y configuración de cuenta.

El estado global se gestiona mediante Context API + useReducer a través de SalesContext. La interfaz Sale define estructura clara de datos (id, monto en ARS, descripción, cliente, fecha y mes). Las funciones principales incluyen addSale, cálculo de totalRevenue y agrupación revenueByMonth. Actualmente el estado no es persistente y se pierde al recargar la página, ya que no existe conexión con backend o base de datos.

En resumen, el proyecto presenta una arquitectura moderna, modular y escalable, con separación clara entre capa comercial (landing), autenticación y núcleo analítico (dashboard). Integra métricas reactivas reales dentro de un entorno simulado, preparado estructuralmente para evolucionar hacia una implementación con backend, persistencia y datos productivos.