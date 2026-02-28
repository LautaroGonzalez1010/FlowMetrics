
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function RegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: false
  });
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }
    setError('');
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] flex">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-2/5 bg-gradient-to-br from-[#7C9070] to-[#C4704B] p-12 flex-col justify-between relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 10 0 L 0 0 0 10' fill='none' stroke='white' stroke-opacity='0.3' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E\")"}}></div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <img src="src/img/logo.png" alt="FlowMetrics" className="w-12 h-12" />
            <span className="text-2xl font-bold text-white">FlowMetrics</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Comienza gratis hoy</h1>
          <p className="text-white/80 text-lg">Únete a miles de empresas que ya están creciendo con FlowMetrics</p>
        </div>

        <div className="relative z-10 space-y-3">
          {[
            { icon: 'ri-bar-chart-2-line', text: 'Analítica en tiempo real' },
            { icon: 'ri-shield-check-line', text: 'Datos 100% seguros' },
            { icon: 'ri-customer-service-2-line', text: 'Soporte 24/7 incluido' },
            { icon: 'ri-rocket-line', text: 'Setup en menos de 5 minutos' },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/30">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/30">
                <i className={`${item.icon} text-white text-sm`}></i>
              </div>
              <span className="text-white text-sm font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8 overflow-y-auto">
        <div className="w-full max-w-md py-8">
          <div className="lg:hidden mb-8 text-center">
            <img src="https://public.readdy.ai/ai/img_res/f5fcb8b8-63e0-41f8-bde8-7354ad393434.png" alt="FlowMetrics" className="w-12 h-12 mx-auto mb-4" />
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-[#2D2A26] mb-2">Crear Cuenta</h2>
            <p className="text-[#6B6560]">Comienza tu prueba gratuita de 14 días</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-[#2D2A26] mb-2">Nombre completo</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <i className="ri-user-line text-[#9B9490]"></i>
                </div>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-12 pr-4 py-3.5 bg-white border border-[#E8E2D9] rounded-lg text-[#2D2A26] placeholder-[#B8B0A8] focus:outline-none focus:border-[#C4704B] focus:ring-2 focus:ring-[#C4704B]/20 transition-all text-sm"
                  placeholder="Juan Pérez"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#2D2A26] mb-2">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <i className="ri-mail-line text-[#9B9490]"></i>
                </div>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-12 pr-4 py-3.5 bg-white border border-[#E8E2D9] rounded-lg text-[#2D2A26] placeholder-[#B8B0A8] focus:outline-none focus:border-[#C4704B] focus:ring-2 focus:ring-[#C4704B]/20 transition-all text-sm"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#2D2A26] mb-2">Contraseña</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <i className="ri-lock-line text-[#9B9490]"></i>
                </div>
                <input
                  type="password"
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full pl-12 pr-4 py-3.5 bg-white border border-[#E8E2D9] rounded-lg text-[#2D2A26] placeholder-[#B8B0A8] focus:outline-none focus:border-[#C4704B] focus:ring-2 focus:ring-[#C4704B]/20 transition-all text-sm"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#2D2A26] mb-2">Confirmar contraseña</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <i className="ri-lock-line text-[#9B9490]"></i>
                </div>
                <input
                  type="password"
                  required
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="w-full pl-12 pr-4 py-3.5 bg-white border border-[#E8E2D9] rounded-lg text-[#2D2A26] placeholder-[#B8B0A8] focus:outline-none focus:border-[#C4704B] focus:ring-2 focus:ring-[#C4704B]/20 transition-all text-sm"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                <i className="ri-error-warning-line text-red-500 text-sm"></i>
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            )}

            <div>
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={formData.terms}
                  onChange={(e) => setFormData({ ...formData, terms: e.target.checked })}
                  className="w-4 h-4 mt-0.5 rounded border-[#E8E2D9] bg-white text-[#C4704B] focus:ring-2 focus:ring-[#C4704B]/20 cursor-pointer"
                />
                <span className="text-sm text-[#6B6560]">
                  Acepto los{' '}
                  <a href="#" className="text-[#C4704B] hover:text-[#A85A3A] font-medium">términos y condiciones</a>
                  {' '}y la{' '}
                  <a href="#" className="text-[#C4704B] hover:text-[#A85A3A] font-medium">política de privacidad</a>
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-gradient-to-r from-[#7C9070] to-[#C4704B] rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-[#C4704B]/30 transition-all whitespace-nowrap cursor-pointer"
            >
              Crear Cuenta
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#E8E2D9]"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-[#FDFBF7] text-[#9B9490]">o continuar con</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                className="py-3 px-4 bg-white border border-[#E8E2D9] rounded-lg text-[#2D2A26] hover:bg-[#F5F0EA] transition-all flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer text-sm font-medium shadow-sm"
              >
                <i className="ri-google-fill text-xl text-[#C4704B]"></i>
                Google
              </button>
              <button
                type="button"
                className="py-3 px-4 bg-white border border-[#E8E2D9] rounded-lg text-[#2D2A26] hover:bg-[#F5F0EA] transition-all flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer text-sm font-medium shadow-sm"
              >
                <i className="ri-github-fill text-xl text-[#2D2A26]"></i>
                GitHub
              </button>
            </div>

            <p className="text-center text-[#6B6560]">
              ¿Ya tienes cuenta?{' '}
              <Link to="/login" className="text-[#C4704B] hover:text-[#A85A3A] font-semibold transition-colors">
                Inicia sesión
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
