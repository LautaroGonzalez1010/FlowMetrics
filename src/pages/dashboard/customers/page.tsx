
import { useState } from 'react';
import { customersData } from '../../../mocks/dashboardData';

export default function CustomersPage() {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCustomers = customersData.filter((customer) => {
    const matchesFilter = filter === 'all' || customer.status === filter;
    const lowerSearch = searchTerm.toLowerCase();
    const matchesSearch =
      customer.name.toLowerCase().includes(lowerSearch) ||
      customer.email.toLowerCase().includes(lowerSearch);
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#2D2A26] mb-2">Clientes</h1>
          <p className="text-[#6B6560]">Gestiona y monitorea tu base de clientes</p>
        </div>
        <button className="px-6 py-3 bg-gradient-to-r from-[#C4704B] to-[#B8860B] rounded-lg font-semibold text-white hover:shadow-md hover:shadow-[#C4704B]/30 transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer">
          <i className="ri-add-line"></i>
          Añadir Cliente
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-6">
        <div className="p-6 bg-white border border-[#E8E2D9] rounded-xl shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-[#C4704B]/10 rounded-lg flex items-center justify-center">
              <i className="ri-user-line text-[#C4704B] text-xl"></i>
            </div>
            <span className="text-sm text-[#6B6560]">Total Clientes</span>
          </div>
          <p className="text-3xl font-bold text-[#2D2A26]">{customersData.length}</p>
        </div>

        <div className="p-6 bg-white border border-[#E8E2D9] rounded-xl shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-[#7C9070]/10 rounded-lg flex items-center justify-center">
              <i className="ri-user-follow-line text-[#7C9070] text-xl"></i>
            </div>
            <span className="text-sm text-[#6B6560]">Activos</span>
          </div>
          <p className="text-3xl font-bold text-[#2D2A26]">
            {customersData.filter((c) => c.status === 'active').length}
          </p>
        </div>

        <div className="p-6 bg-white border border-[#E8E2D9] rounded-xl shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-[#B8860B]/10 rounded-lg flex items-center justify-center">
              <i className="ri-user-unfollow-line text-[#B8860B] text-xl"></i>
            </div>
            <span className="text-sm text-[#6B6560]">Inactivos</span>
          </div>
          <p className="text-3xl font-bold text-[#2D2A26]">
            {customersData.filter((c) => c.status === 'inactive').length}
          </p>
        </div>

        <div className="p-6 bg-white border border-[#E8E2D9] rounded-xl shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-[#D4A574]/20 rounded-lg flex items-center justify-center">
              <i className="ri-money-dollar-circle-line text-[#C4704B] text-xl"></i>
            </div>
            <span className="text-sm text-[#6B6560]">Ingresos Totales</span>
          </div>
          <p className="text-3xl font-bold text-[#2D2A26]">$ 9.631.000</p>
        </div>
      </div>

      {/* Table */}
      <div className="p-6 bg-white border border-[#E8E2D9] rounded-xl shadow-sm">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Buscar clientes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[#F7F4EF] border border-[#E8E2D9] rounded-lg text-[#2D2A26] placeholder-[#A09890] focus:outline-none focus:border-[#C4704B] focus:ring-2 focus:ring-[#C4704B]/20 transition-all text-sm"
            />
            <i className="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-[#A09890]"></i>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2.5 rounded-lg font-medium transition-all whitespace-nowrap cursor-pointer ${
                filter === 'all'
                  ? 'bg-[#C4704B] text-white'
                  : 'bg-[#F7F4EF] text-[#6B6560] hover:bg-[#E8E2D9]'
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => setFilter('active')}
              className={`px-4 py-2.5 rounded-lg font-medium transition-all whitespace-nowrap cursor-pointer ${
                filter === 'active'
                  ? 'bg-[#7C9070] text-white'
                  : 'bg-[#F7F4EF] text-[#6B6560] hover:bg-[#E8E2D9]'
              }`}
            >
              Activos
            </button>
            <button
              onClick={() => setFilter('inactive')}
              className={`px-4 py-2.5 rounded-lg font-medium transition-all whitespace-nowrap cursor-pointer ${
                filter === 'inactive'
                  ? 'bg-[#B8860B] text-white'
                  : 'bg-[#F7F4EF] text-[#6B6560] hover:bg-[#E8E2D9]'
              }`}
            >
              Inactivos
            </button>
          </div>

          <button className="px-4 py-2.5 bg-[#F7F4EF] border border-[#E8E2D9] rounded-lg font-medium text-[#6B6560] hover:bg-[#E8E2D9] transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer">
            <i className="ri-download-line"></i>
            Exportar
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-[#E8E2D9]">
                <th className="pb-3 text-xs font-semibold uppercase text-[#A09890]">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-[#E8E2D9] cursor-pointer accent-[#C4704B]"
                  />
                </th>
                <th className="pb-3 text-xs font-semibold uppercase text-[#A09890]">Cliente</th>
                <th className="pb-3 text-xs font-semibold uppercase text-[#A09890]">Estado</th>
                <th className="pb-3 text-xs font-semibold uppercase text-[#A09890]">Total Gastado</th>
                <th className="pb-3 text-xs font-semibold uppercase text-[#A09890]">Última Actividad</th>
                <th className="pb-3 text-xs font-semibold uppercase text-[#A09890]">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredCustomers.map((customer) => (
                <tr
                  key={customer.id}
                  className="border-b border-[#F0EBE3] hover:bg-[#FDFBF7] transition-colors"
                >
                  <td className="py-4">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-[#E8E2D9] cursor-pointer accent-[#C4704B]"
                    />
                  </td>
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={customer.avatar}
                        alt={customer.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-medium text-[#2D2A26]">{customer.name}</p>
                        <p className="text-sm text-[#A09890]">{customer.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        customer.status === 'active'
                          ? 'bg-[#7C9070]/15 text-[#7C9070]'
                          : 'bg-[#B8860B]/15 text-[#B8860B]'
                      }`}
                    >
                      {customer.status === 'active' ? 'Activo' : 'Inactivo'}
                    </span>
                  </td>
                  <td className="py-4 font-semibold text-[#2D2A26]">{customer.totalSpent}</td>
                  <td className="py-4 text-[#A09890] text-sm">{customer.lastActivity}</td>
                  <td className="py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-[#F7F4EF] rounded-lg transition-colors cursor-pointer">
                        <i className="ri-eye-line text-[#6B6560]"></i>
                      </button>
                      <button className="p-2 hover:bg-[#F7F4EF] rounded-lg transition-colors cursor-pointer">
                        <i className="ri-edit-line text-[#6B6560]"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between mt-6 pt-6 border-t border-[#E8E2D9]">
          <p className="text-sm text-[#A09890]">
            Mostrando {filteredCustomers.length} de {customersData.length} clientes
          </p>
          <div className="flex items-center gap-2">
            <button className="px-3 py-2 bg-[#F7F4EF] border border-[#E8E2D9] rounded-lg hover:bg-[#E8E2D9] transition-all cursor-pointer text-[#6B6560]">
              <i className="ri-arrow-left-s-line"></i>
            </button>
            <button className="px-4 py-2 bg-[#C4704B] text-white rounded-lg font-medium cursor-pointer">1</button>
            <button className="px-4 py-2 bg-[#F7F4EF] text-[#6B6560] rounded-lg hover:bg-[#E8E2D9] transition-all cursor-pointer">
              2
            </button>
            <button className="px-4 py-2 bg-[#F7F4EF] text-[#6B6560] rounded-lg hover:bg-[#E8E2D9] transition-all cursor-pointer">
              3
            </button>
            <button className="px-3 py-2 bg-[#F7F4EF] border border-[#E8E2D9] rounded-lg hover:bg-[#E8E2D9] transition-all cursor-pointer text-[#6B6560]">
              <i className="ri-arrow-right-s-line"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
