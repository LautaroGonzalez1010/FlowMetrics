
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] flex items-center justify-center p-8">
      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="text-center mb-10">
          <Link to="/" className="inline-flex items-center gap-3 mb-6">
            <img src="https://public.readdy.ai/ai/img_res/f5fcb8b8-63e0-41f8-bde8-7354ad393434.png" alt="FlowMetrics" className="w-10 h-10" />
            <span className="text-xl font-bold text-[#2D2A26]">FlowMetrics</span>
          </Link>
        </div>

        <div className="bg-white border border-[#E8E2D9] rounded-2xl p-8 shadow-sm">
          {!submitted ? (
            <>
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#C4704B] to-[#7C9070] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md shadow-[#C4704B]/20">
                  <i className="ri-lock-password-line text-3xl text-white"></i>
                </div>
                <h2 className="text-2xl font-bold text-[#2D2A26] mb-2">¿Olvidaste tu contraseña?</h2>
                <p className="text-[#6B6560] text-sm leading-relaxed">
                  Ingresa tu email y te enviaremos un enlace para restablecer tu contraseña.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-[#2D2A26] mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <i className="ri-mail-line text-[#9B9490]"></i>
                    </div>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-12 pr-4 py-3.5 bg-[#FDFBF7] border border-[#E8E2D9] rounded-lg text-[#2D2A26] placeholder-[#B8B0A8] focus:outline-none focus:border-[#C4704B] focus:ring-2 focus:ring-[#C4704B]/20 transition-all text-sm"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-[#C4704B] to-[#7C9070] rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-[#C4704B]/30 transition-all whitespace-nowrap cursor-pointer"
                >
                  Enviar Instrucciones
                </button>

                <div className="text-center pt-2">
                  <Link
                    to="/login"
                    className="text-sm text-[#6B6560] hover:text-[#C4704B] transition-colors flex items-center justify-center gap-2"
                  >
                    <i className="ri-arrow-left-line"></i>
                    Volver al inicio de sesión
                  </Link>
                </div>
              </form>
            </>
          ) : (
            <div className="text-center space-y-6 py-4">
              <div className="w-20 h-20 bg-gradient-to-br from-[#7C9070] to-[#C4704B] rounded-full flex items-center justify-center mx-auto shadow-lg shadow-[#7C9070]/30">
                <i className="ri-mail-check-line text-4xl text-white"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#2D2A26] mb-2">¡Email enviado!</h3>
                <p className="text-[#6B6560] text-sm leading-relaxed">
                  Hemos enviado un enlace de recuperación a{' '}
                  <strong className="text-[#2D2A26] font-semibold">{email}</strong>.
                  Revisa tu bandeja de entrada.
                </p>
              </div>

              <div className="bg-[#F5F0EA] border border-[#E8E2D9] rounded-lg px-4 py-3 text-left">
                <div className="flex items-start gap-3">
                  <i className="ri-information-line text-[#C4704B] mt-0.5"></i>
                  <p className="text-xs text-[#6B6560]">
                    Si no ves el email, revisa tu carpeta de spam o solicita un nuevo enlace en unos minutos.
                  </p>
                </div>
              </div>

              <Link
                to="/login"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#C4704B] to-[#7C9070] rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-[#C4704B]/30 transition-all whitespace-nowrap cursor-pointer"
              >
                <i className="ri-arrow-left-line"></i>
                Volver al inicio de sesión
              </Link>
            </div>
          )}
        </div>

        <p className="text-center text-xs text-[#9B9490] mt-6">
          ¿No tienes cuenta?{' '}
          <Link to="/register" className="text-[#C4704B] hover:text-[#A85A3A] font-medium transition-colors">
            Regístrate gratis
          </Link>
        </p>
      </div>
    </div>
  );
}
