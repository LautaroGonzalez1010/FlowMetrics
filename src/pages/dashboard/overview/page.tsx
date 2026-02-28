
import { useState } from 'react';
import {
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { channelsData, recentActivity } from '../../../mocks/dashboardData';
import { useSales } from '../../../context/SalesContext';
import NewSaleModal from './components/NewSaleModal';

const formatARS = (value: number) =>
  '$ ' + value.toLocaleString('es-AR', { minimumFractionDigits: 0, maximumFractionDigits: 0 });

const translatedActivity = recentActivity.map((a) => ({
  ...a,
  user:
    a.user === 'Emma Thompson' ? 'Valentina López'
    : a.user === 'James Wilson' ? 'Martín Rodríguez'
    : a.user === 'Sofia Martinez' ? 'Sofía Fernández'
    : a.user === 'Michael Chen' ? 'Diego Herrera'
    : a.user === 'Isabella Garcia' ? 'Camila Torres'
    : a.user,
  action:
    a.action === 'Completed purchase' ? 'Compra completada'
    : a.action === 'Started free trial' ? 'Inició prueba gratuita'
    : a.action === 'Upgraded to Pro plan' ? 'Mejoró al plan Pro'
    : a.action === 'Cancelled subscription' ? 'Canceló suscripción'
    : a.action,
  date:
    a.date === '2 minutes ago' ? 'Hace 2 minutos'
    : a.date === '15 minutes ago' ? 'Hace 15 minutos'
    : a.date === '1 hour ago' ? 'Hace 1 hora'
    : a.date === '2 hours ago' ? 'Hace 2 horas'
    : a.date === '3 hours ago' ? 'Hace 3 horas'
    : a.date,
  statusLabel:
    a.status === 'success' ? 'exitoso'
    : a.status === 'warning' ? 'alerta'
    : 'info',
}));

export default function OverviewPage() {
  const { totalRevenue, revenueByMonth, sales } = useSales();
  const [showModal, setShowModal] = useState(false);

  const staticMetrics = [
    { id: 2, title: 'Crecimiento Mensual', value: '+23,5%', change: '+4,2%', trend: 'up', icon: 'ri-arrow-up-line' },
    { id: 3, title: 'Usuarios Activos', value: '2.847', change: '+12,3%', trend: 'up', icon: 'ri-user-line' },
    { id: 4, title: 'Tasa de Conversión', value: '3,2%', change: '-0,4%', trend: 'down', icon: 'ri-percent-line' },
  ];

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Header con botón */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#2D2A26]">Resumen</h1>
          <p className="text-sm text-[#6B6560] mt-1">Métricas actualizadas en tiempo real</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#C4704B] to-[#B8860B] rounded-lg text-sm font-semibold text-white hover:shadow-md hover:shadow-[#C4704B]/30 transition-all whitespace-nowrap cursor-pointer"
        >
          <i className="ri-add-line text-base"></i>
          Registrar Venta
        </button>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
        {/* Ingresos Totales — reactivo */}
        <div className="p-5 sm:p-6 bg-white border border-[#E8E2D9] rounded-xl hover:border-[#C4704B]/40 hover:shadow-md hover:shadow-[#C4704B]/10 transition-all group cursor-pointer">
          <div className="flex items-start justify-between mb-4">
            <div className="w-11 h-11 bg-gradient-to-br from-[#C4704B] to-[#B8860B] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <i className="ri-money-dollar-circle-line text-xl text-white"></i>
            </div>
            <span className="text-xs sm:text-sm text-[#6B6560] text-right leading-tight max-w-[120px]">Ingresos Totales</span>
          </div>
          <div className="space-y-1.5">
            <h3 className="text-xl sm:text-2xl font-bold text-[#2D2A26] leading-tight">{formatARS(totalRevenue)}</h3>
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-xs font-semibold text-[#7C9070]">
                <i className="ri-arrow-up-line"></i>+23,5%
              </span>
              <span className="text-xs text-[#A09890]">vs mes anterior</span>
            </div>
            <p className="text-xs text-[#A09890]">{sales.length} ventas registradas</p>
          </div>
        </div>

        {/* Métricas estáticas */}
        {staticMetrics.map((metric) => (
          <div
            key={metric.id}
            className="p-5 sm:p-6 bg-white border border-[#E8E2D9] rounded-xl hover:border-[#C4704B]/40 hover:shadow-md hover:shadow-[#C4704B]/10 transition-all group cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-11 h-11 bg-gradient-to-br from-[#C4704B] to-[#B8860B] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <i className={`${metric.icon} text-xl text-white`}></i>
              </div>
              <span className="text-xs sm:text-sm text-[#6B6560] text-right leading-tight max-w-[120px]">{metric.title}</span>
            </div>
            <div className="space-y-1.5">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#2D2A26]">{metric.value}</h3>
              <div className="flex items-center gap-2 flex-wrap">
                <span className={`text-sm font-semibold ${metric.trend === 'up' ? 'text-[#7C9070]' : 'text-red-500'}`}>
                  <i className={`ri-arrow-${metric.trend === 'up' ? 'up' : 'down'}-line`}></i>
                  {metric.change}
                </span>
                <span className="text-xs text-[#A09890]">vs mes anterior</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Revenue Chart — reactivo */}
        <div className="lg:col-span-2 p-5 sm:p-6 bg-white border border-[#E8E2D9] rounded-xl shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-[#2D2A26]">Ingresos por Mes</h2>
              <p className="text-xs text-[#A09890] mt-0.5">Se actualiza con cada venta registrada</p>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-[#7C9070]/10 rounded-lg">
              <div className="w-2 h-2 bg-[#7C9070] rounded-full animate-pulse"></div>
              <span className="text-xs font-medium text-[#7C9070]">En vivo</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={revenueByMonth}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#C4704B" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#C4704B" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#E8E2D9" />
              <XAxis dataKey="month" stroke="#A09890" tick={{ fill: '#6B6560', fontSize: 11 }} />
              <YAxis
                stroke="#A09890"
                tick={{ fill: '#6B6560', fontSize: 10 }}
                width={72}
                tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E8E2D9',
                  borderRadius: '8px',
                  color: '#2D2A26',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                  fontSize: '13px',
                }}
                formatter={(value: number) => [formatARS(value), 'Ingresos']}
              />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#C4704B"
                strokeWidth={2.5}
                fillOpacity={1}
                fill="url(#colorRevenue)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Channels Chart */}
        <div className="p-5 sm:p-6 bg-white border border-[#E8E2D9] rounded-xl shadow-sm">
          <h2 className="text-lg sm:text-xl font-bold text-[#2D2A26] mb-4">Principales Canales</h2>
          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie
                data={channelsData}
                cx="50%"
                cy="50%"
                innerRadius={55}
                outerRadius={75}
                paddingAngle={5}
                dataKey="value"
              >
                {channelsData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-2.5 mt-4">
            {channelsData.map((channel) => (
              <div key={channel.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: channel.color }}></div>
                  <span className="text-sm text-[#6B6560]">{channel.name}</span>
                </div>
                <span className="text-sm font-semibold text-[#2D2A26]">{channel.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Últimas ventas registradas */}
      <div className="p-5 sm:p-6 bg-white border border-[#E8E2D9] rounded-xl shadow-sm">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg sm:text-xl font-bold text-[#2D2A26]">Últimas Ventas</h2>
          <button
            onClick={() => setShowModal(true)}
            className="text-sm text-[#C4704B] hover:text-[#B8860B] transition-colors cursor-pointer font-medium whitespace-nowrap flex items-center gap-1"
          >
            <i className="ri-add-line"></i>
            Nueva venta
          </button>
        </div>
        <div className="overflow-x-auto -mx-5 sm:mx-0">
          <div className="min-w-[520px] px-5 sm:px-0">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b border-[#E8E2D9]">
                  <th className="pb-3 text-xs font-semibold uppercase text-[#A09890]">Cliente</th>
                  <th className="pb-3 text-xs font-semibold uppercase text-[#A09890]">Descripción</th>
                  <th className="pb-3 text-xs font-semibold uppercase text-[#A09890]">Mes</th>
                  <th className="pb-3 text-xs font-semibold uppercase text-[#A09890] text-right">Monto</th>
                </tr>
              </thead>
              <tbody>
                {[...sales].reverse().slice(0, 8).map((sale) => (
                  <tr key={sale.id} className="border-b border-[#F0EBE3] hover:bg-[#FDFBF7] transition-colors">
                    <td className="py-3.5">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 bg-gradient-to-br from-[#C4704B]/20 to-[#B8860B]/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <i className="ri-user-line text-[#C4704B] text-xs"></i>
                        </div>
                        <span className="font-medium text-[#2D2A26] text-sm whitespace-nowrap">{sale.client}</span>
                      </div>
                    </td>
                    <td className="py-3.5 text-[#6B6560] text-sm">{sale.description}</td>
                    <td className="py-3.5 text-[#A09890] text-sm whitespace-nowrap">{sale.date}</td>
                    <td className="py-3.5 text-right">
                      <span className="font-bold text-[#2D2A26] text-sm whitespace-nowrap">{formatARS(sale.amount)}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Total al pie */}
        <div className="mt-4 pt-4 border-t border-[#E8E2D9] flex items-center justify-between">
          <span className="text-sm text-[#6B6560]">{sales.length} ventas en total</span>
          <div className="flex items-center gap-2">
            <span className="text-sm text-[#6B6560]">Total acumulado:</span>
            <span className="text-lg font-bold text-[#C4704B]">{formatARS(totalRevenue)}</span>
          </div>
        </div>
      </div>

      {/* Actividad Reciente */}
      <div className="p-5 sm:p-6 bg-white border border-[#E8E2D9] rounded-xl shadow-sm">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg sm:text-xl font-bold text-[#2D2A26]">Actividad Reciente</h2>
          <a href="#" className="text-sm text-[#C4704B] hover:text-[#B8860B] transition-colors cursor-pointer font-medium whitespace-nowrap">
            Ver todo
          </a>
        </div>
        <div className="overflow-x-auto -mx-5 sm:mx-0">
          <div className="min-w-[560px] px-5 sm:px-0">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b border-[#E8E2D9]">
                  <th className="pb-3 text-xs font-semibold uppercase text-[#A09890]">Usuario</th>
                  <th className="pb-3 text-xs font-semibold uppercase text-[#A09890]">Acción</th>
                  <th className="pb-3 text-xs font-semibold uppercase text-[#A09890]">Fecha</th>
                  <th className="pb-3 text-xs font-semibold uppercase text-[#A09890]">Estado</th>
                </tr>
              </thead>
              <tbody>
                {translatedActivity.map((activity) => (
                  <tr key={activity.id} className="border-b border-[#F0EBE3] hover:bg-[#FDFBF7] transition-colors">
                    <td className="py-3.5">
                      <div className="flex items-center gap-3">
                        <img
                          src={activity.avatar}
                          alt={activity.user}
                          className="w-9 h-9 rounded-full object-cover flex-shrink-0"
                        />
                        <span className="font-medium text-[#2D2A26] text-sm whitespace-nowrap">{activity.user}</span>
                      </div>
                    </td>
                    <td className="py-3.5 text-[#6B6560] text-sm whitespace-nowrap">{activity.action}</td>
                    <td className="py-3.5 text-[#A09890] text-sm whitespace-nowrap">{activity.date}</td>
                    <td className="py-3.5">
                      <span
                        className={`px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
                          activity.status === 'success'
                            ? 'bg-[#7C9070]/15 text-[#7C9070]'
                            : activity.status === 'warning'
                            ? 'bg-[#B8860B]/15 text-[#B8860B]'
                            : 'bg-[#C4704B]/15 text-[#C4704B]'
                        }`}
                      >
                        {activity.statusLabel}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && <NewSaleModal onClose={() => setShowModal(false)} />}
    </div>
  );
}
