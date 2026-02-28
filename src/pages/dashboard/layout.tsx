import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

export default function DashboardLayout() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { profile } = useUser();

  const navigation = [
    { name: 'Resumen', path: '/dashboard', icon: 'ri-dashboard-line' },
    { name: 'Analítica', path: '/dashboard/analytics', icon: 'ri-line-chart-line' },
    { name: 'Clientes', path: '/dashboard/customers', icon: 'ri-user-line' },
    { name: 'Facturación', path: '/dashboard/billing', icon: 'ri-bank-card-line' },
    { name: 'Configuración', path: '/dashboard/settings', icon: 'ri-settings-3-line' }
  ];

  const isActive = (path: string) => {
    if (path === '/dashboard') return location.pathname === '/dashboard';
    return location.pathname.startsWith(path);
  };

  const handleNavClick = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F7F4EF] text-[#2D2A26]">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 z-40 w-64 h-screen bg-white border-r border-[#E8E2D9] transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 flex flex-col`}>
        <div className="p-5 border-b border-[#E8E2D9] flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3" onClick={handleNavClick}>
            <img src="src/img/logo.png" alt="FlowMetrics" className="w-9 h-9" />
            <span className="text-lg font-bold text-[#2D2A26]">FlowMetrics</span>
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-1.5 hover:bg-[#F7F4EF] rounded-lg transition-colors cursor-pointer"
          >
            <i className="ri-close-line text-xl text-[#6B6560]"></i>
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navigation.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={handleNavClick}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                isActive(item.path)
                  ? 'bg-[#C4704B]/10 text-[#C4704B] border-l-4 border-[#C4704B]'
                  : 'text-[#6B6560] hover:bg-[#F7F4EF] hover:text-[#2D2A26]'
              }`}
            >
              <i className={`${item.icon} text-xl`}></i>
              <span className="font-medium">{item.name}</span>
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-[#E8E2D9]">
          <div className="p-4 bg-gradient-to-br from-[#C4704B]/15 to-[#7C9070]/15 rounded-xl border border-[#C4704B]/20">
            <h3 className="font-semibold mb-1 text-[#2D2A26] text-sm">Mejorar a Pro</h3>
            <p className="text-xs text-[#6B6560] mb-3">Desbloquea funciones avanzadas</p>
            <button className="w-full py-2 bg-gradient-to-r from-[#C4704B] to-[#B8860B] rounded-lg text-sm font-semibold text-white hover:shadow-md hover:shadow-[#C4704B]/30 transition-all whitespace-nowrap cursor-pointer">
              Mejorar Ahora
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="lg:ml-64 flex flex-col min-h-screen">
        {/* Topbar */}
        <header className="sticky top-0 z-20 bg-white border-b border-[#E8E2D9] shadow-sm">
          <div className="px-4 sm:px-6 flex items-center justify-between h-16">
            {/* Left */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 hover:bg-[#F7F4EF] rounded-lg transition-colors cursor-pointer"
              >
                <i className="ri-menu-line text-xl text-[#2D2A26]"></i>
              </button>
              <div className="hidden sm:flex text-sm text-[#6B6560] items-center gap-1">
                <span className="hover:text-[#2D2A26] transition-colors cursor-pointer">Inicio</span>
                <span className="mx-1">/</span>
                <span className="text-[#2D2A26] font-medium">
                  {navigation.find(item => isActive(item.path))?.name || 'Resumen'}
                </span>
              </div>
              <span className="sm:hidden text-sm font-semibold text-[#2D2A26]">
                {navigation.find(item => isActive(item.path))?.name || 'Resumen'}
              </span>
            </div>

            {/* Right */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Search — hidden on mobile */}
              <div className="hidden md:block relative">
                <input
                  type="text"
                  placeholder="Buscar..."
                  className="w-52 lg:w-64 pl-10 pr-4 py-2 bg-[#F7F4EF] border border-[#E8E2D9] rounded-lg text-sm text-[#2D2A26] placeholder-[#A09890] focus:outline-none focus:border-[#C4704B] focus:ring-2 focus:ring-[#C4704B]/20 transition-all"
                />
                <i className="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-[#A09890] text-sm"></i>
              </div>

              <button className="relative p-2 hover:bg-[#F7F4EF] rounded-lg transition-colors cursor-pointer">
                <i className="ri-notification-3-line text-lg text-[#6B6560]"></i>
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#C4704B] rounded-full"></span>
              </button>

              <div className="flex items-center gap-2 sm:gap-3 pl-2 sm:pl-4 border-l border-[#E8E2D9]">
                <img
                  src={profile.avatarUrl}
                  alt={profile.firstName}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover"
                />
                <div className="hidden sm:block">
                  <p className="text-sm font-semibold text-[#2D2A26] leading-tight">{profile.firstName} {profile.lastName}</p>
                  <p className="text-xs text-[#6B6560]">{profile.role}</p>
                </div>
                <i className="ri-arrow-down-s-line text-[#6B6560] cursor-pointer hidden sm:block"></i>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
