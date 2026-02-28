
import { billingHistory } from '../../../mocks/dashboardData';

export default function BillingPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-[#2D2A26] mb-2">Facturación</h1>
        <p className="text-[#6B6560]">Gestiona tu suscripción e información de facturación</p>
      </div>

      {/* Current Plan */}
      <div className="p-8 bg-gradient-to-br from-[#C4704B]/10 to-[#7C9070]/10 border border-[#C4704B]/25 rounded-xl">
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="inline-block px-3 py-1 bg-gradient-to-r from-[#C4704B] to-[#B8860B] rounded-full text-sm font-semibold text-white mb-3">
              Plan Actual
            </div>
            <h2 className="text-3xl font-bold text-[#2D2A26] mb-2">Plan Growth</h2>
            <p className="text-[#6B6560]">Perfecto para equipos en crecimiento</p>
          </div>
          <div className="text-right">
            <p className="text-4xl font-bold text-[#2D2A26]">$ 79.000</p>
            <p className="text-[#6B6560]">por mes</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="p-4 bg-white/70 rounded-lg border border-[#E8E2D9]">
            <p className="text-sm text-[#6B6560] mb-1">Próxima facturación</p>
            <p className="text-lg font-semibold text-[#2D2A26]">1 de octubre, 2024</p>
          </div>

          <div className="p-4 bg-white/70 rounded-lg border border-[#E8E2D9]">
            <p className="text-sm text-[#6B6560] mb-1">Método de pago</p>
            <p className="text-lg font-semibold text-[#2D2A26]">•••• 4242</p>
          </div>

          <div className="p-4 bg-white/70 rounded-lg border border-[#E8E2D9]">
            <p className="text-sm text-[#6B6560] mb-1">Ciclo de facturación</p>
            <p className="text-lg font-semibold text-[#2D2A26]">Mensual</p>
          </div>
        </div>

        <div className="flex gap-4">
          <button className="px-6 py-3 bg-gradient-to-r from-[#C4704B] to-[#B8860B] text-white rounded-lg font-semibold hover:shadow-md hover:shadow-[#C4704B]/30 transition-all whitespace-nowrap cursor-pointer">
            Mejorar Plan
          </button>
          <button className="px-6 py-3 bg-white border border-[#E8E2D9] text-[#2D2A26] rounded-lg font-semibold hover:bg-[#F7F4EF] transition-all whitespace-nowrap cursor-pointer">
            Gestionar Suscripción
          </button>
        </div>
      </div>

      {/* Payment Method */}
      <div className="p-6 bg-white border border-[#E8E2D9] rounded-xl shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-[#2D2A26]">Método de Pago</h2>
          <button className="px-4 py-2 bg-[#F7F4EF] border border-[#E8E2D9] rounded-lg font-medium text-[#6B6560] hover:bg-[#E8E2D9] transition-all whitespace-nowrap cursor-pointer">
            <i className="ri-add-line mr-2"></i>
            Añadir Nuevo
          </button>
        </div>

        <div className="p-6 bg-gradient-to-r from-[#C4704B] to-[#B8860B] rounded-xl text-white max-w-sm">
          <div className="flex items-start justify-between mb-12">
            <div>
              <p className="text-sm opacity-80 mb-1">Titular de la Tarjeta</p>
              <p className="text-lg font-semibold">Carlos García</p>
            </div>
            <i className="ri-bank-card-line text-3xl opacity-80"></i>
          </div>

          <div className="flex items-end justify-between">
            <div>
              <p className="text-2xl font-bold tracking-wider mb-2">•••• •••• •••• 4242</p>
              <p className="text-sm opacity-80">Vence 12/25</p>
            </div>
            <div className="text-right">
              <p className="text-sm opacity-80 mb-1">CVV</p>
              <p className="text-lg font-bold">•••</p>
            </div>
          </div>
        </div>
      </div>

      {/* Billing History */}
      <div className="p-6 bg-white border border-[#E8E2D9] rounded-xl shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-[#2D2A26]">Historial de Pagos</h2>
          <button className="px-4 py-2 bg-[#F7F4EF] border border-[#E8E2D9] rounded-lg font-medium text-[#6B6560] hover:bg-[#E8E2D9] transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer">
            <i className="ri-download-line"></i>
            Descargar Todo
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-[#E8E2D9]">
                <th className="pb-3 text-xs font-semibold uppercase text-[#A09890]">Fecha</th>
                <th className="pb-3 text-xs font-semibold uppercase text-[#A09890]">Descripción</th>
                <th className="pb-3 text-xs font-semibold uppercase text-[#A09890]">Importe</th>
                <th className="pb-3 text-xs font-semibold uppercase text-[#A09890]">Estado</th>
                <th className="pb-3 text-xs font-semibold uppercase text-[#A09890]">Factura</th>
              </tr>
            </thead>
            <tbody>
              {billingHistory.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-[#F0EBE3] hover:bg-[#FDFBF7] transition-colors"
                >
                  <td className="py-4 text-[#6B6560]">{item.date}</td>
                  <td className="py-4 text-[#2D2A26]">{item.description}</td>
                  <td className="py-4 font-semibold text-[#2D2A26]">{item.amount}</td>
                  <td className="py-4">
                    <span className="px-3 py-1 bg-[#7C9070]/15 text-[#7C9070] rounded-full text-xs font-semibold">
                      Pagado
                    </span>
                  </td>
                  <td className="py-4">
                    <button className="text-[#C4704B] hover:text-[#B8860B] transition-colors flex items-center gap-1 cursor-pointer text-sm font-medium">
                      <i className="ri-download-line"></i>
                      {item.invoice}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Usage Stats */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Eventos Usados */}
        <div className="p-6 bg-white border border-[#E8E2D9] rounded-xl shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#C4704B]/10 rounded-xl flex items-center justify-center">
              <i className="ri-database-2-line text-[#C4704B] text-2xl"></i>
            </div>
            <div>
              <p className="text-sm text-[#6B6560]">Eventos Usados</p>
              <p className="text-2xl font-bold text-[#2D2A26]">45,230</p>
            </div>
          </div>

          <div className="w-full h-2 bg-[#F0EBE3] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#C4704B] to-[#B8860B] rounded-full"
              style={{ width: '45%' }}
            ></div>
          </div>

          <p className="text-xs text-[#A09890] mt-2">45% del límite mensual de 100,000</p>
        </div>

        {/* Miembros del Equipo */}
        <div className="p-6 bg-white border border-[#E8E2D9] rounded-xl shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#7C9070]/10 rounded-xl flex items-center justify-center">
              <i className="ri-team-line text-[#7C9070] text-2xl"></i>
            </div>
            <div>
              <p className="text-sm text-[#6B6560]">Miembros del Equipo</p>
              <p className="text-2xl font-bold text-[#2D2A26]">5</p>
            </div>
          </div>

          <div className="w-full h-2 bg-[#F0EBE3] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#7C9070] to-[#5A7A5A] rounded-full"
              style={{ width: '50%' }}
            ></div>
          </div>

          <p className="text-xs text-[#A09890] mt-2">5 de 10 asientos usados</p>
        </div>

        {/* Reportes Generados */}
        <div className="p-6 bg-white border border-[#E8E2D9] rounded-xl shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#B8860B]/10 rounded-xl flex items-center justify-center">
              <i className="ri-file-chart-line text-[#B8860B] text-2xl"></i>
            </div>
            <div>
              <p className="text-sm text-[#6B6560]">Reportes Generados</p>
              <p className="text-2xl font-bold text-[#2D2A26]">128</p>
            </div>
          </div>

          <div className="w-full h-2 bg-[#F0EBE3] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#B8860B] to-[#D4A574] rounded-full"
              style={{ width: '100%' }}
            ></div>
          </div>

          <p className="text-xs text-[#A09890] mt-2">Reportes ilimitados</p>
        </div>
      </div>
    </div>
  );
}
