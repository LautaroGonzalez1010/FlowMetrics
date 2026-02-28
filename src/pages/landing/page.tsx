import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { testimonials, pricingPlans, benefits, howItWorksSteps, features } from '../../mocks/landingData';

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-light-bg text-light-text">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#FDFBF7] shadow-md border-b border-[#E8E2D9] backdrop-blur-md' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="src/img/logo.png" alt="FlowMetrics" className="w-10 h-10" />
            <span className="text-xl font-bold text-light-text">FlowMetrics</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-light-muted hover:text-accent-terracota transition-colors whitespace-nowrap cursor-pointer">Características</a>
            <a href="#pricing" className="text-light-muted hover:text-accent-terracota transition-colors whitespace-nowrap cursor-pointer">Precios</a>
            <a href="#testimonials" className="text-light-muted hover:text-accent-terracota transition-colors whitespace-nowrap cursor-pointer">Testimonios</a>
            <Link to="/login" className="text-light-muted hover:text-accent-terracota transition-colors whitespace-nowrap">Iniciar sesión</Link>
            <Link to="/register" className="px-6 py-2.5 bg-gradient-to-r from-accent-terracota to-accent-mustard text-white rounded-lg hover:shadow-lg hover:shadow-accent-terracota/30 transition-all whitespace-nowrap cursor-pointer">
              Prueba Gratuita
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-light-text hover:text-accent-terracota transition-colors cursor-pointer"
            aria-label="Abrir menú"
          >
            <i className={`${isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Menu Panel */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white border-t border-[#E8E2D9] px-6 py-4 space-y-4">
            <a 
              href="#features" 
              onClick={closeMobileMenu}
              className="block text-light-muted hover:text-accent-terracota transition-colors cursor-pointer py-2"
            >
              Características
            </a>
            <a 
              href="#pricing" 
              onClick={closeMobileMenu}
              className="block text-light-muted hover:text-accent-terracota transition-colors cursor-pointer py-2"
            >
              Precios
            </a>
            <a 
              href="#testimonials" 
              onClick={closeMobileMenu}
              className="block text-light-muted hover:text-accent-terracota transition-colors cursor-pointer py-2"
            >
              Testimonios
            </a>
            <Link 
              to="/login" 
              onClick={closeMobileMenu}
              className="block text-light-muted hover:text-accent-terracota transition-colors py-2"
            >
              Iniciar sesión
            </Link>
            <Link 
              to="/register" 
              onClick={closeMobileMenu}
              className="block w-full px-6 py-2.5 bg-gradient-to-r from-accent-terracota to-accent-mustard text-white rounded-lg hover:shadow-lg hover:shadow-accent-terracota/30 transition-all text-center cursor-pointer"
            >
              Prueba Gratuita
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-cream via-light-bg to-accent-sage/10"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-accent-terracota/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-sage/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center relative z-10 w-full">
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-light-border rounded-full shadow-sm">
              <i className="ri-flashlight-line text-accent-mustard"></i>
              <span className="text-xs sm:text-sm text-light-muted">Más de 2.500 empresas confían en nosotros</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight text-light-text">
              Analítica que impulsa decisiones{' '}
              <span className="bg-gradient-to-r from-accent-terracota to-accent-mustard bg-clip-text text-transparent">
                inteligentes
              </span>
            </h1>
            
            <p className="text-base sm:text-xl text-light-muted leading-relaxed">
              Visualiza, analiza y optimiza el rendimiento de tu negocio desde un dashboard unificado
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
              <Link to="/register" className="px-8 py-4 bg-gradient-to-r from-accent-terracota to-accent-mustard text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-accent-terracota/30 transition-all flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer">
                Prueba Gratuita
                <i className="ri-arrow-right-line"></i>
              </Link>
              <a href="#features" className="px-8 py-4 border border-light-border bg-white rounded-lg font-semibold hover:bg-accent-cream transition-all whitespace-nowrap cursor-pointer text-center">
                Ver Demo
              </a>
            </div>
            
            <div className="flex items-center gap-4 pt-2 sm:pt-4 justify-center lg:justify-start">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-accent-terracota to-accent-sage border-2 border-light-bg"></div>
                ))}
              </div>
              <p className="text-xs sm:text-sm text-light-muted">Únete a más de 2.500 usuarios creciendo más rápido</p>
            </div>
          </div>
          
          <div className="relative mt-6 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-terracota/20 to-accent-sage/20 rounded-2xl blur-3xl"></div>
            <div className="relative transform lg:-rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="src/img/mascota.png" 
                alt="Dashboard FlowMetrics" 
   
              />
            </div>
          </div>
        </div>
      </section>


      {/* Benefits Section */}
      <section className="py-24 sm:py-32 relative bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-terracota/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-sage/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
            <span className="inline-block px-4 py-1.5 bg-accent-terracota/10 text-accent-terracota text-xs font-semibold rounded-full uppercase tracking-widest mb-5">
              ¿Por qué FlowMetrics?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-light-text leading-tight mb-5">
              Todo lo que necesitas para{' '}
              <span className="bg-gradient-to-r from-accent-terracota to-accent-mustard bg-clip-text text-transparent">
                crecer con datos
              </span>
            </h2>
            <p className="text-base sm:text-lg text-light-muted leading-relaxed max-w-2xl mx-auto">
              Potencia tu negocio con analítica inteligente, reportes automáticos y predicciones que te adelantan a la competencia.
            </p>
          </div>

          {/* Benefits Grid — 2x2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-14">
            {benefits.map((benefit, index) => {
              const gradients = [
                'from-[#FDF8F3] to-[#F8EDE2]',
                'from-[#F3F7F3] to-[#E8F0E6]',
                'from-[#FDF6EC] to-[#F7EDD8]',
                'from-[#F5F2F0] to-[#EDE8E3]',
              ];
              const iconGradients = [
                'from-accent-terracota to-accent-mustard',
                'from-accent-sage to-[#5a7a50]',
                'from-accent-mustard to-[#a07010]',
                'from-accent-terracota to-accent-sage',
              ];
              const statColors = [
                'from-accent-terracota to-accent-mustard',
                'from-accent-sage to-[#5a7a50]',
                'from-accent-mustard to-[#a07010]',
                'from-accent-terracota to-accent-sage',
              ];
              const borderHoverColors = [
                'hover:border-accent-terracota/40',
                'hover:border-accent-sage/40',
                'hover:border-accent-mustard/40',
                'hover:border-accent-terracota/40',
              ];

              return (
                <div
                  key={benefit.id}
                  className={`group relative bg-gradient-to-br ${gradients[index]} border border-light-border rounded-2xl p-8 sm:p-10 ${borderHoverColors[index]} hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden`}
                >
                  {/* Decorative blur */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-terracota/5 rounded-full blur-3xl group-hover:bg-accent-terracota/10 transition-all pointer-events-none"></div>
                  <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent-sage/5 rounded-full blur-2xl pointer-events-none"></div>

                  <div className="relative z-10 flex flex-col sm:flex-row sm:items-start gap-6">
                    {/* Left: Icon + Stat */}
                    <div className="flex-shrink-0 flex flex-col items-center sm:items-start gap-4">
                      <div className={`w-14 h-14 bg-gradient-to-br ${iconGradients[index]} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                        <i className={`${benefit.icon} text-2xl`}></i>
                      </div>
                      <div className="text-center sm:text-left">
                        <p className={`text-3xl sm:text-4xl font-extrabold bg-gradient-to-r ${statColors[index]} bg-clip-text text-transparent leading-none`}>
                          {benefit.stat}
                        </p>
                        <p className="text-xs text-light-muted mt-1">{benefit.statLabel}</p>
                      </div>
                    </div>

                    {/* Right: Text */}
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-lg sm:text-xl font-bold text-light-text mb-2.5">{benefit.title}</h3>
                      <p className="text-sm sm:text-base text-light-muted leading-relaxed">{benefit.description}</p>
                      <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-terracota opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                       
                       
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom trust row */}
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 pt-2">
            {[
              { label: 'Sin tarjeta de crédito', icon: 'ri-bank-card-line' },
              { label: '14 días gratis', icon: 'ri-gift-line' },
              { label: 'Cancela cuando quieras', icon: 'ri-close-circle-line' },
              { label: 'Soporte 24/7', icon: 'ri-customer-service-line' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2.5 text-sm text-light-muted">
                <div className="w-7 h-7 flex items-center justify-center rounded-full bg-accent-sage/15">
                  <i className={`${item.icon} text-accent-sage text-sm`}></i>
                </div>
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </section>

    {/* How It Works */}
      <section className="py-20 sm:py-28 bg-accent-cream/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

            {/* Left — Mascota */}
            <div className="lg:w-5/12 flex justify-center relative order-2 lg:order-1">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-br from-accent-mustard/25 to-accent-terracota/15 rounded-full blur-3xl"></div>
              </div>
              {/* Floating badges around mascot */}
              <div className="absolute top-4 right-4 lg:right-0 bg-white border border-light-border rounded-xl px-3 py-2 shadow-lg flex items-center gap-2 z-20 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-accent-sage/20">
                  <i className="ri-check-line text-accent-sage text-xs"></i>
                </div>
                <span className="text-xs font-semibold text-light-text whitespace-nowrap">¡Listo en minutos!</span>
              </div>
              <div className="absolute bottom-8 left-0 lg:-left-4 bg-white border border-light-border rounded-xl px-3 py-2 shadow-lg flex items-center gap-2 z-20 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-accent-terracota/20">
                  <i className="ri-bar-chart-line text-accent-terracota text-xs"></i>
                </div>
                <span className="text-xs font-semibold text-light-text whitespace-nowrap">+340% más insights</span>
              </div>
              <img
                src="https://static.readdy.ai/image/ab17182f417c466948e14369eb91773d/d6e1367b78f57949832a4ad3b93ed7c4.png"
                alt="Mascota FlowMetrics"
                className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] object-contain drop-shadow-2xl"
              />
            </div>

            {/* Right — Steps */}
            <div className="lg:w-7/12 order-1 lg:order-2">
              <div className="mb-10">
                <span className="inline-block px-4 py-1.5 bg-accent-terracota/10 text-accent-terracota text-xs font-semibold rounded-full uppercase tracking-widest mb-4">
                  Cómo funciona
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-light-text leading-tight">
                  Comienza en{' '}
                  <span className="bg-gradient-to-r from-accent-terracota to-accent-mustard bg-clip-text text-transparent">
                    3 pasos simples
                  </span>
                </h2>
                <p className="mt-4 text-base sm:text-lg text-light-muted leading-relaxed">
                  Sin configuraciones complicadas. En menos de 5 minutos ya tendrás tu primer dashboard funcionando.
                </p>
              </div>

              <div className="space-y-5">
                {howItWorksSteps.map((step, index) => (
                  <div
                    key={step.id}
                    className="group flex items-start gap-5 p-6 bg-white border border-light-border rounded-2xl hover:border-accent-terracota/40 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-pointer relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent-terracota/3 rounded-full blur-2xl group-hover:bg-accent-terracota/8 transition-all pointer-events-none"></div>
                    {/* Step number */}
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-accent-terracota to-accent-mustard rounded-2xl flex items-center justify-center text-white font-extrabold text-xl shadow-md group-hover:scale-110 transition-transform relative z-10">
                      {step.id}
                    </div>
                    <div className="relative z-10 flex-1">
                      <h3 className="text-base sm:text-lg font-bold text-light-text mb-1.5">{step.title}</h3>
                      <p className="text-sm text-light-muted leading-relaxed">{step.description}</p>
                    </div>
                    {/* Connector line between steps */}
                    {index < howItWorksSteps.length - 1 && (
                      <div className="absolute -bottom-5 left-[2.75rem] w-0.5 h-5 bg-gradient-to-b from-accent-terracota/30 to-transparent z-20"></div>
                    )}
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <span className="inline-block px-4 py-1.5 bg-accent-terracota/10 text-accent-terracota text-xs font-semibold rounded-full uppercase tracking-widest mb-4">Características</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-light-text">Todo lo que necesitas para crecer</h2>
            <p className="text-base sm:text-xl text-light-muted max-w-2xl mx-auto">Herramientas poderosas diseñadas para emprendedores y equipos que quieren tomar decisiones basadas en datos reales</p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">

            {/* Card grande — Analítica en Tiempo Real */}
            <div className="md:col-span-2 group relative bg-gradient-to-br from-[#FDF8F3] to-[#F5EDE0] border border-light-border rounded-2xl p-7 sm:p-9 overflow-hidden hover:shadow-xl hover:border-accent-terracota/40 transition-all duration-300 cursor-pointer">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-terracota/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent-terracota/10 transition-all"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-terracota to-accent-mustard rounded-xl flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform">
                  <i className="ri-line-chart-line text-white text-xl"></i>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-light-text">Analítica en Tiempo Real</h3>
                <p className="text-light-muted text-sm sm:text-base mb-6 max-w-md">Monitorea el rendimiento de tu negocio con actualizaciones de datos en vivo e insights instantáneos. Detecta tendencias antes que tu competencia.</p>
                <div className="flex gap-3 sm:gap-4 mb-6">
                  {[
                    { label: 'Usuarios activos', value: '12.4K', icon: 'ri-user-line', color: 'text-accent-terracota' },
                    { label: 'Sesiones hoy', value: '3.8K', icon: 'ri-eye-line', color: 'text-accent-sage' },
                    { label: 'Tasa rebote', value: '24%', icon: 'ri-arrow-go-back-line', color: 'text-accent-mustard' },
                  ].map((stat, i) => (
                    <div key={i} className="flex-1 bg-white/70 rounded-xl p-3 sm:p-4 border border-light-border/60">
                      <div className={`${stat.color} text-lg mb-1 w-6 h-6 flex items-center justify-center`}>
                        <i className={stat.icon}></i>
                      </div>
                      <p className="text-base sm:text-lg font-bold text-light-text">{stat.value}</p>
                      <p className="text-xs text-light-muted">{stat.label}</p>
                    </div>
                  ))}
                </div>
                {/* Mini chart bars */}
                <div className="flex items-end gap-1.5 h-14">
                  {[35, 55, 42, 70, 58, 80, 65, 90, 72, 85, 60, 95].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm bg-gradient-to-t from-accent-terracota to-accent-mustard opacity-70 group-hover:opacity-100 transition-opacity"
                      style={{ height: `${h}%` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card — Seguimiento de Conversiones */}
            <div className="group relative bg-gradient-to-br from-[#F3F7F3] to-[#E8F0E6] border border-light-border rounded-2xl p-7 sm:p-8 overflow-hidden hover:shadow-xl hover:border-accent-sage/50 transition-all duration-300 cursor-pointer">
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-accent-sage/10 rounded-full blur-2xl group-hover:bg-accent-sage/20 transition-all"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-sage to-[#5a7a50] rounded-xl flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform">
                  <i className="ri-funnel-line text-white text-xl"></i>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-light-text">Seguimiento de Conversiones</h3>
                <p className="text-light-muted text-sm mb-5">Rastrea cada paso del embudo y optimiza tus tasas de conversión con datos precisos.</p>
                <div className="space-y-3">
                  {[
                    { label: 'Visitas', pct: 100, val: '18.2K' },
                    { label: 'Leads', pct: 62, val: '11.3K' },
                    { label: 'Clientes', pct: 18, val: '3.2K' },
                  ].map((row, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-xs text-light-muted mb-1">
                        <span>{row.label}</span><span className="font-semibold text-light-text">{row.val}</span>
                      </div>
                      <div className="h-2 bg-white/60 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-accent-sage to-accent-mustard rounded-full transition-all duration-500" style={{ width: `${row.pct}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-3xl font-extrabold text-transparent bg-gradient-to-r from-accent-sage to-accent-mustard bg-clip-text">3.2% <span className="text-sm font-normal text-light-muted">tasa de conv.</span></p>
              </div>
            </div>

            {/* Card — Monitor de Campañas */}
            <div className="group relative bg-gradient-to-br from-[#FDF6EC] to-[#F7EDD8] border border-light-border rounded-2xl p-7 sm:p-8 overflow-hidden hover:shadow-xl hover:border-accent-mustard/50 transition-all duration-300 cursor-pointer">
              <div className="absolute top-0 left-0 w-40 h-40 bg-accent-mustard/10 rounded-full blur-2xl group-hover:bg-accent-mustard/20 transition-all"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-mustard to-[#a07010] rounded-xl flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform">
                  <i className="ri-megaphone-line text-white text-xl"></i>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-light-text">Monitor de Campañas</h3>
                <p className="text-light-muted text-sm mb-5">Visualiza el rendimiento de todas tus campañas en un solo lugar.</p>
                <div className="space-y-2.5">
                  {[
                    { name: 'Google Ads', roas: '4.2x', color: 'bg-accent-terracota' },
                    { name: 'Meta Ads', roas: '3.8x', color: 'bg-accent-sage' },
                    { name: 'Email Mktg', roas: '6.1x', color: 'bg-accent-mustard' },
                  ].map((c, i) => (
                    <div key={i} className="flex items-center justify-between bg-white/60 rounded-lg px-3 py-2 border border-light-border/40">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${c.color}`}></div>
                        <span className="text-xs font-medium text-light-text">{c.name}</span>
                      </div>
                      <span className="text-xs font-bold text-accent-terracota">ROAS {c.roas}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card — Reportes Automáticos */}
            <div className="group relative bg-gradient-to-br from-[#F3F7F3] to-[#EAF0E8] border border-light-border rounded-2xl p-7 sm:p-8 overflow-hidden hover:shadow-xl hover:border-accent-sage/40 transition-all duration-300 cursor-pointer">
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-accent-sage/10 rounded-full blur-2xl group-hover:bg-accent-sage/20 transition-all"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-sage to-accent-terracota rounded-xl flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform">
                  <i className="ri-file-chart-line text-white text-xl"></i>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-light-text">Reportes Automáticos</h3>
                <p className="text-light-muted text-sm mb-5">Recibe reportes detallados en tu bandeja de entrada cada semana sin hacer nada.</p>
                <div className="space-y-2">
                  {['Reporte semanal de ventas', 'Resumen de campañas activas', 'Análisis de cohortes mensual'].map((r, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-light-muted">
                      <i className="ri-checkbox-circle-fill text-accent-sage"></i>
                      {r}
                    </div>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-2 text-xs text-accent-terracota font-semibold">
                  <i className="ri-mail-send-line"></i>
                  Próximo envío: lunes 9:00 AM
                </div>
              </div>
            </div>

            {/* Card — Colaboración en Equipo */}
            <div className="group relative bg-gradient-to-br from-[#FDF8F3] to-[#F5EDE0] border border-light-border rounded-2xl p-7 sm:p-8 overflow-hidden hover:shadow-xl hover:border-accent-terracota/40 transition-all duration-300 cursor-pointer">
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent-terracota/8 rounded-full blur-2xl group-hover:bg-accent-terracota/15 transition-all"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-terracota to-accent-mustard rounded-xl flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform">
                  <i className="ri-team-line text-white text-xl"></i>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-light-text">Colaboración en Equipo</h3>
                <p className="text-light-muted text-sm mb-5">Invita a tu equipo, asigna roles y trabaja en tiempo real sobre los mismos datos.</p>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex -space-x-2.5">
                    {['C4704B', '7C9070', 'B8860B', '8B6F5E', 'A0856C'].map((color, i) => (
                      <div key={i} className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-sm" style={{ backgroundColor: `#${color}` }}>
                        {['A', 'M', 'L', 'R', 'S'][i]}
                      </div>
                    ))}
                  </div>
                  <span className="text-xs text-light-muted">+12 miembros activos</span>
                </div>
                <div className="flex gap-2">
                  <span className="px-2.5 py-1 bg-accent-terracota/10 text-accent-terracota text-xs rounded-full font-medium">Admin</span>
                  <span className="px-2.5 py-1 bg-accent-sage/10 text-accent-sage text-xs rounded-full font-medium">Editor</span>
                  <span className="px-2.5 py-1 bg-accent-mustard/10 text-accent-mustard text-xs rounded-full font-medium">Viewer</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 sm:py-24 bg-accent-cream/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-light-text">Lo que dicen nuestros clientes</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="p-6 sm:p-8 bg-white border border-light-border rounded-2xl hover:border-accent-terracota/30 hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="text-5xl sm:text-6xl text-accent-terracota/20 mb-3 sm:mb-4">"</div>
                <p className="text-base sm:text-lg text-light-text mb-5 sm:mb-6 leading-relaxed">{testimonial.content}</p>
                <div className="h-px bg-gradient-to-r from-transparent via-light-border to-transparent mb-5 sm:mb-6"></div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-light-border"
                  />
                  <div>
                    <p className="font-bold text-light-text text-sm sm:text-base">{testimonial.name}</p>
                    <p className="text-xs sm:text-sm text-light-muted">{testimonial.role} en {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-light-text">Planes simples y transparentes</h2>
            <p className="text-base sm:text-xl text-light-muted">Elige el plan perfecto para tu negocio</p>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 items-start">
            {pricingPlans.map((plan) => (
              <div 
                key={plan.id}
                className={`p-6 sm:p-8 rounded-2xl border transition-all hover:-translate-y-2 cursor-pointer ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-accent-terracota/5 to-accent-sage/5 border-accent-terracota/50 md:scale-105 shadow-xl shadow-accent-terracota/10' 
                    : 'bg-light-bg border-light-border hover:shadow-lg'
                }`}
              >
                {plan.popular && (
                  <div className="inline-block px-4 py-1 bg-gradient-to-r from-accent-terracota to-accent-mustard text-white rounded-full text-sm font-semibold mb-4">
                    Más Popular
                  </div>
                )}
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-light-text">{plan.name}</h3>
                <p className="text-light-muted mb-5 sm:mb-6 text-sm sm:text-base">{plan.description}</p>
                <div className="mb-5 sm:mb-6">
                  <span className="text-4xl sm:text-5xl font-bold text-light-text">${plan.price}</span>
                  <span className="text-light-muted">/mes</span>
                </div>
                <ul className="space-y-3 sm:space-y-4 mb-7 sm:mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <i className="ri-check-line text-accent-sage text-lg sm:text-xl flex-shrink-0"></i>
                      <span className="text-light-muted text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/register"
                  className={`block w-full py-3 rounded-lg font-semibold text-center transition-all whitespace-nowrap ${
                    plan.popular
                      ? 'bg-gradient-to-r from-accent-terracota to-accent-mustard text-white hover:shadow-lg hover:shadow-accent-terracota/30'
                      : 'border border-light-border bg-white hover:bg-accent-cream text-light-text'
                  }`}
                >
                  Comenzar
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 relative overflow-hidden bg-gradient-to-br from-accent-terracota/10 via-accent-cream to-accent-sage/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 sm:mb-6 text-light-text">
            ¿Listo para impulsar tu crecimiento?
          </h2>
          <p className="text-base sm:text-xl text-light-muted mb-7 sm:mb-8">
            Únete a miles de empresas que ya están tomando mejores decisiones con FlowMetrics
          </p>
          <Link 
            to="/register"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-terracota to-accent-mustard text-white rounded-lg font-semibold text-base sm:text-lg hover:shadow-xl hover:shadow-accent-terracota/30 transition-all whitespace-nowrap cursor-pointer"
          >
            Comenzar Prueba Gratuita
            <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative overflow-hidden">
        {/* Decorative top gradient */}
        <div className="h-1.5 bg-gradient-to-r from-accent-terracota via-accent-sage to-accent-mustard"></div>
        
        <div className="bg-[#F9F5EE] relative">
          {/* Decorative blurs */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent-terracota/5 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-sage/5 rounded-full blur-[100px] pointer-events-none"></div>

         <br /><br /><br /><br />

          {/* Main footer content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 pb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-6 mb-14">
              
              {/* Brand column */}
              <div className="lg:col-span-4 sm:col-span-2">
                <div className="flex items-center gap-3 mb-5">
                  <img src="src/img/logo.png" alt="FlowMetrics" className="w-10 h-10" />
                  <span className="text-lg font-bold text-light-text">FlowMetrics</span>
                </div>
                <p className="text-light-muted text-sm leading-relaxed max-w-xs mb-6">
                  Plataforma de analítica inteligente que ayuda a empresas a tomar decisiones basadas en datos reales.
                </p>
                <div className="flex gap-2.5">
                  {[
                    { icon: 'ri-twitter-x-line', label: 'Twitter' },
                    { icon: 'ri-linkedin-line', label: 'LinkedIn' },
                    { icon: 'ri-github-line', label: 'GitHub' },
                    { icon: 'ri-youtube-line', label: 'YouTube' },
                  ].map((social) => (
                    <a 
                      key={social.label}
                      href="#" 
                      aria-label={social.label}
                      className="w-9 h-9 bg-white border border-light-border rounded-lg flex items-center justify-center text-light-muted hover:bg-accent-terracota hover:text-white hover:border-accent-terracota hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-pointer" 
                      rel="nofollow"
                    >
                      <i className={`${social.icon} text-base`}></i>
                    </a>
                  ))}
                </div>
              </div>

              {/* Navigation column */}
              <div className="lg:col-span-2">
                <h4 className="text-xs font-bold text-light-text uppercase tracking-widest mb-5 flex items-center gap-2">
                  <span className="w-5 h-px bg-accent-terracota"></span>
                  <a href="#features">Navegación</a>
                </h4>
                <ul className="space-y-3">
                  {[
                    { label: 'Características', href: '#features' },
                    { label: 'Precios', href: '#pricing' },
                    { label: 'Testimonios', href: '#testimonials' },
                  ].map((link) => (
                    <li key={link.label}>
                      <a 
                        href={link.href} 
                        className="text-light-muted hover:text-accent-terracota transition-all text-sm cursor-pointer inline-block hover:translate-x-1 duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Account column */}
              <div className="lg:col-span-2">
                <h4 className="text-xs font-bold text-light-text uppercase tracking-widest mb-5 flex items-center gap-2">
                  <span className="w-5 h-px bg-accent-sage"></span>
                  <a href="/login">Cuenta</a>
                </h4>
                <ul className="space-y-3">
                  {[
                    { label: 'Iniciar sesión', to: '/login' },
                    { label: 'Crear cuenta', to: '/register' },
                    { label: 'Dashboard', to: '/dashboard' },
                  ].map((link) => (
                    <li key={link.label}>
                      <Link 
                        to={link.to} 
                        className="text-light-muted hover:text-accent-terracota transition-all text-sm cursor-pointer inline-block hover:translate-x-1 duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter column */}
              <div className="lg:col-span-4 sm:col-span-2">
                <h4 className="text-xs font-bold text-light-text uppercase tracking-widest mb-5 flex items-center gap-2">
                  <span className="w-5 h-px bg-accent-mustard"></span>
                  <a href="#newsletter">Newsletter</a>
                </h4>
                <p className="text-light-muted text-sm mb-4 leading-relaxed">Recibe consejos de analítica, novedades y recursos directamente en tu correo.</p>
                <form 
                  id="newsletter-form"
                  data-readdy-form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const form = e.currentTarget;
                    const formData = new FormData(form);
                    const email = formData.get('email') as string;
                    if (!email) return;
                    const submitBtn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
                    const successMsg = document.getElementById('newsletter-success');
                    const errorMsg = document.getElementById('newsletter-error');
                    if (successMsg) successMsg.classList.add('hidden');
                    if (errorMsg) errorMsg.classList.add('hidden');
                    submitBtn.disabled = true;
                    submitBtn.innerHTML = '<i class="ri-loader-4-line animate-spin text-lg"></i>';
                    try {
                      const res = await fetch('https://readdy.ai/api/form/d6g93jpghdq4qda703t0', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                        body: new URLSearchParams({ email }).toString(),
                      });
                      if (res.ok) {
                        form.reset();
                        if (successMsg) successMsg.classList.remove('hidden');
                      } else {
                        if (errorMsg) errorMsg.classList.remove('hidden');
                      }
                    } catch {
                      if (errorMsg) errorMsg.classList.remove('hidden');
                    } finally {
                      submitBtn.disabled = false;
                      submitBtn.innerHTML = '<i class="ri-send-plane-2-line text-lg"></i>';
                    }
                  }}
                  className="flex gap-2"
                >
                  <input 
                    type="email" 
                    name="email" 
                    required
                    placeholder="tu@email.com" 
                    className="flex-1 min-w-0 px-4 py-3 bg-white border border-light-border rounded-xl text-sm text-light-text placeholder:text-light-muted/50 focus:outline-none focus:border-accent-terracota focus:ring-2 focus:ring-accent-terracota/10 transition-all"
                  />
                  <button 
                    type="submit" 
                    className="w-11 h-11 flex-shrink-0 bg-gradient-to-r from-accent-terracota to-accent-mustard text-white rounded-xl flex items-center justify-center hover:shadow-lg hover:shadow-accent-terracota/30 hover:-translate-y-0.5 transition-all cursor-pointer whitespace-nowrap"
                  >
                    <i className="ri-send-plane-2-line text-base"></i>
                  </button>
                </form>
                <p id="newsletter-success" className="hidden text-accent-sage text-xs mt-2 flex items-center gap-1">
                  <i className="ri-check-line"></i> ¡Suscripción exitosa! Revisa tu correo.
                </p>
                <p id="newsletter-error" className="hidden text-accent-terracota text-xs mt-2 flex items-center gap-1">
                  <i className="ri-error-warning-line"></i> Hubo un error. Inténtalo de nuevo.
                </p>
                <p className="text-light-muted/50 text-xs mt-2.5">Sin spam. Cancela cuando quieras.</p>
              </div>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-12">
              {[
                { icon: 'ri-shield-check-line', title: 'Encriptación', desc: 'Datos protegidos con SSL', color: 'from-accent-terracota/10 to-accent-terracota/5' },
                { icon: 'ri-customer-service-2-line', title: 'Soporte 24/7', desc: 'Siempre disponibles', color: 'from-accent-sage/10 to-accent-sage/5' },
                { icon: 'ri-gift-line', title: '14 días gratis', desc: 'Sin tarjeta de crédito', color: 'from-accent-mustard/10 to-accent-mustard/5' },
                { icon: 'ri-lock-line', title: 'Privacidad', desc: 'GDPR compliant', color: 'from-accent-terracota/10 to-accent-sage/5' },
              ].map((badge) => (
                <div key={badge.title} className={`bg-gradient-to-br ${badge.color} rounded-xl p-4 sm:p-5 border border-light-border/40`}>
                  <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/80 mb-3 shadow-sm">
                    <i className={`${badge.icon} text-accent-terracota text-lg`}></i>
                  </div>
                  <p className="text-sm font-semibold text-light-text mb-0.5">{badge.title}</p>
                  <p className="text-xs text-light-muted">{badge.desc}</p>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-light-border to-transparent mb-6"></div>

            {/* Copyright bar */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
              <p className="text-light-muted/60 text-xs text-center sm:text-left">
                © {new Date().getFullYear()} FlowMetrics por Akidev. Todos los derechos reservados.
              </p>
              <a 
                href="" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-light-muted/50 hover:text-accent-terracota text-xs transition-colors cursor-pointer flex items-center gap-1.5"
              >
                Powered by AkiDev
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}