
import React from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { analyticsChartData } from '../../../mocks/dashboardData';

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#2D2A26] mb-2">Analítica</h1>
          <p className="text-[#6B6560]">
            Análisis profundo de tus métricas de rendimiento
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="p-6 bg-white border border-[#E8E2D9] rounded-xl shadow-sm">
        <div className="grid md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-[#6B6560] mb-2">
              Rango de Fechas
            </label>
            <select className="w-full px-4 py-2.5 bg-[#F7F4EF] border border-[#E8E2D9] rounded-lg text-[#2D2A26] focus:outline-none focus:border-[#C4704B] focus:ring-2 focus:ring-[#C4704B]/20 transition-all cursor-pointer text-sm">
              <option>Últimos 7 días</option>
              <option>Últimos 30 días</option>
              <option>Últimos 90 días</option>
              <option>Rango personalizado</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#6B6560] mb-2">
              Tipo de Métrica
            </label>
            <select className="w-full px-4 py-2.5 bg-[#F7F4EF] border border-[#E8E2D9] rounded-lg text-[#2D2A26] focus:outline-none focus:border-[#C4704B] focus:ring-2 focus:ring-[#C4704B]/20 transition-all cursor-pointer text-sm">
              <option>Todas las Métricas</option>
              <option>Ingresos</option>
              <option>Tráfico</option>
              <option>Conversiones</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#6B6560] mb-2">
              Segmento de Usuarios
            </label>
            <select className="w-full px-4 py-2.5 bg-[#F7F4EF] border border-[#E8E2D9] rounded-lg text-[#2D2A26] focus:outline-none focus:border-[#C4704B] focus:ring-2 focus:ring-[#C4704B]/20 transition-all cursor-pointer text-sm">
              <option>Todos los Usuarios</option>
              <option>Nuevos Usuarios</option>
              <option>Usuarios Recurrentes</option>
              <option>Usuarios Premium</option>
            </select>
          </div>

          <div className="flex items-end">
            <button className="w-full px-6 py-2.5 bg-gradient-to-r from-[#C4704B] to-[#B8860B] rounded-lg font-semibold text-white hover:shadow-md hover:shadow-[#C4704B]/30 transition-all whitespace-nowrap cursor-pointer">
              Aplicar Filtros
            </button>
          </div>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Page Views Chart */}
        <div className="p-6 bg-white border border-[#E8E2D9] rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-[#2D2A26] flex items-center gap-2">
              <i className="ri-eye-line text-[#C4704B]"></i>
              Vistas de Página
            </h2>
            <button className="p-2 hover:bg-[#F7F4EF] rounded-lg transition-colors cursor-pointer">
              <i className="ri-download-line text-[#6B6560]"></i>
            </button>
          </div>

          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={analyticsChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E8E2D9" />
              <XAxis
                dataKey="date"
                stroke="#A09890"
                tick={{ fill: '#6B6560', fontSize: 12 }}
              />
              <YAxis
                stroke="#A09890"
                tick={{ fill: '#6B6560', fontSize: 12 }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E8E2D9',
                  borderRadius: '8px',
                  color: '#2D2A26',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                }}
              />
              <Line
                type="monotone"
                dataKey="pageViews"
                stroke="#C4704B"
                strokeWidth={2.5}
                dot={{ fill: '#C4704B', r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Unique Visitors Chart */}
        <div className="p-6 bg-white border border-[#E8E2D9] rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-[#2D2A26] flex items-center gap-2">
              <i className="ri-user-line text-[#7C9070]"></i>
              Visitantes Únicos
            </h2>
            <button className="p-2 hover:bg-[#F7F4EF] rounded-lg transition-colors cursor-pointer">
              <i className="ri-download-line text-[#6B6560]"></i>
            </button>
          </div>

          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={analyticsChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E8E2D9" />
              <XAxis
                dataKey="date"
                stroke="#A09890"
                tick={{ fill: '#6B6560', fontSize: 12 }}
              />
              <YAxis
                stroke="#A09890"
                tick={{ fill: '#6B6560', fontSize: 12 }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E8E2D9',
                  borderRadius: '8px',
                  color: '#2D2A26',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                }}
              />
              <Bar
                dataKey="uniqueVisitors"
                fill="#7C9070"
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Bounce Rate Chart */}
        <div className="p-6 bg-white border border-[#E8E2D9] rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-[#2D2A26] flex items-center gap-2">
              <i className="ri-arrow-go-back-line text-[#B8860B]"></i>
              Tasa de Rebote
            </h2>
            <button className="p-2 hover:bg-[#F7F4EF] rounded-lg transition-colors cursor-pointer">
              <i className="ri-download-line text-[#6B6560]"></i>
            </button>
          </div>

          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={analyticsChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E8E2D9" />
              <XAxis
                dataKey="date"
                stroke="#A09890"
                tick={{ fill: '#6B6560', fontSize: 12 }}
              />
              <YAxis
                stroke="#A09890"
                tick={{ fill: '#6B6560', fontSize: 12 }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E8E2D9',
                  borderRadius: '8px',
                  color: '#2D2A26',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                }}
              />
              <Line
                type="monotone"
                dataKey="bounceRate"
                stroke="#B8860B"
                strokeWidth={2.5}
                dot={{ fill: '#B8860B', r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Performance Summary */}
        <div className="p-6 bg-white border border-[#E8E2D9] rounded-xl shadow-sm">
          <h2 className="text-xl font-bold text-[#2D2A26] mb-6">
            Resumen de Rendimiento
          </h2>
          <div className="space-y-6">
            {/* Session Duration */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-[#6B6560]">
                  Duración Media de Sesión
                </span>
                <span className="text-lg font-bold text-[#2D2A26]">
                  4m 32s
                </span>
              </div>
              <div className="w-full h-2 bg-[#F0EBE3] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#C4704B] to-[#B8860B] rounded-full"
                  style={{ width: '75%' }}
                ></div>
              </div>
            </div>

            {/* Pages per Session */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-[#6B6560]">
                  Páginas por Sesión
                </span>
                <span className="text-lg font-bold text-[#2D2A26]">5.8</span>
              </div>
              <div className="w-full h-2 bg-[#F0EBE3] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#7C9070] to-[#5A7A5A] rounded-full"
                  style={{ width: '82%' }}
                ></div>
              </div>
            </div>

            {/* Goal Completion Rate */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-[#6B6560]">
                  Tasa de Cumplimiento de Objetivos
                </span>
                <span className="text-lg font-bold text-[#2D2A26]">68%</span>
              </div>
              <div className="w-full h-2 bg-[#F0EBE3] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#B8860B] to-[#D4A574] rounded-full"
                  style={{ width: '68%' }}
                ></div>
              </div>
            </div>

            {/* Customer Satisfaction */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-[#6B6560]">
                  Satisfacción del Cliente
                </span>
                <span className="text-lg font-bold text-[#2D2A26]">4.8/5</span>
              </div>
              <div className="w-full h-2 bg-[#F0EBE3] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#C4704B] to-[#7C9070] rounded-full"
                  style={{ width: '96%' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
